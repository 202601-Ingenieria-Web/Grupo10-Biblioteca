import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { book } = await request.json();

  try {
    const createdBook = await prisma.book.create({
      data: {
        name: book.title,
        description: book.description,
        quantity: book.quantity,
      },
    });
    return NextResponse.json({ book: createdBook }, { status: 201 });
  } catch (error) {
    console.error('Error creating book:', error);
    return NextResponse.json({ error: 'Failed to create book' }, { status: 500 });
  }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const bookId = searchParams.get('id');

  if (!bookId) {
    return NextResponse.json({ error: 'Book ID is required' }, { status: 400 });
  } else {
    try {
      const book = await prisma.book.findUnique({
        where: {
          id: bookId,
        },
      });
      if (!book) {
        return NextResponse.json({ error: 'Book not found' }, { status: 404 });
      }
      return NextResponse.json({ book }, { status: 200 });
    } catch (error) {
      console.error('Error fetching book:', error);
      return NextResponse.json({ error: 'Failed to fetch book' }, { status: 500 });
    }
  }
}
export async function PUT(request: NextRequest): Promise<NextResponse> {
  const { book } = await request.json();

  try {
    const updatedBook = await prisma.book.update({
      where: {
        id: book.id,
      },
      data: {
        name: book.name,
        description: book.description,
        quantity: book.quantity,
      },
    });
    return NextResponse.json({ book: updatedBook }, { status: 200 });
  } catch (error) {
    console.error('Error updating book:', error);
    return NextResponse.json({ error: 'Failed to update book' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const bookId = searchParams.get('id');

  if (!bookId) {
    return NextResponse.json({ error: 'Book ID is required' }, { status: 400 });
  } else {
    try {
      await prisma.book.delete({
        where: {
          id: bookId,
        },
      });
      return NextResponse.json({ message: 'Book deleted successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error deleting book:', error);
      return NextResponse.json({ error: 'Failed to delete book' }, { status: 500 });
    }
  }
}