import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { movement } = await request.json();

  try {
    const createdMovement = await prisma.movement.create({
      data: {
        bookTitle: movement.bookTitle,
        userName: movement.userName,
        userID: movement.userID,
        type: movement.type,
        movementDate: movement.movementDate,
        dueDate: movement.dueDate,
        status: movement.status,
      },
    });
    return NextResponse.json({ movement: createdMovement }, { status: 201 });
  } catch (error) {
    console.error('Error creating movement:', error);
    return NextResponse.json({ error: 'Failed to create movement' }, { status: 500 });
  }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const movementId = searchParams.get('id');

  if (!movementId) {
    return NextResponse.json({ error: 'Movement ID is required' }, { status: 400 });
  } else {
    try {
      const movement = await prisma.movement.findUnique({
        where: {
          id: movementId,
        },
      });
      if (!movement) {
        return NextResponse.json({ error: 'Movement not found' }, { status: 404 });
      }
      return NextResponse.json({ movement }, { status: 200 });
    } catch (error) {
      console.error('Error fetching movement:', error);
      return NextResponse.json({ error: 'Failed to fetch movement' }, { status: 500 });
    }
  }
}
export async function PUT(request: NextRequest): Promise<NextResponse> {
  const { movement } = await request.json();

  try {
    const updatedMovement = await prisma.movement.update({
      where: {
        id: movement.id,
      },
      data: {
        bookTitle: movement.bookTitle,
        userName: movement.userName,
        userID: movement.userID,
        type: movement.type,
        movementDate: movement.movementDate,
        dueDate: movement.dueDate,
        status: movement.status,
        returnedAt: movement.returnedAt,
      },
    });
    return NextResponse.json({ movement: updatedMovement }, { status: 200 });
  } catch (error) {
    console.error('Error updating movement:', error);
    return NextResponse.json({ error: 'Failed to update movement' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const movementId = searchParams.get('id');

  if (!movementId) {
    return NextResponse.json({ error: 'Movement ID is required' }, { status: 400 });
  } else {
    try {
      await prisma.movement.delete({
        where: {
          id: movementId,
        },
      });
      return NextResponse.json({ message: 'Movement deleted successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error deleting movement:', error);
      return NextResponse.json({ error: 'Failed to delete movement' }, { status: 500 });
    }
  }
}