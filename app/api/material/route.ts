import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { material } = await request.json();

  try {
    const createdMaterial = await prisma.material.create({
      data: {
        name: material.name,
        description: material.description,
        quantity: material.quantity,
      },
    });
    return NextResponse.json({ material: createdMaterial }, { status: 201 });
  } catch (error) {
    console.error('Error creating material:', error);
    return NextResponse.json({ error: 'Failed to create material' }, { status: 500 });
  }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const materialId = searchParams.get('id');

  if (!materialId) {
    return NextResponse.json({ error: 'Material ID is required' }, { status: 400 });
  } else {
    try {
      const material = await prisma.material.findUnique({
        where: {
          id: materialId,
        },
      });
      if (!material) {
        return NextResponse.json({ error: 'Material not found' }, { status: 404 });
      }
      return NextResponse.json({ material }, { status: 200 });
    } catch (error) {
      console.error('Error fetching material:', error);
      return NextResponse.json({ error: 'Failed to fetch material' }, { status: 500 });
    }
  }
}
export async function PUT(request: NextRequest): Promise<NextResponse> {
  const { material } = await request.json();

  try {
    const updatedMaterial = await prisma.material.update({
      where: {
        id: material.id,
      },
      data: {
        name: material.name,
        description: material.description,
        quantity: material.quantity,
      },
    });
    return NextResponse.json({ material: updatedMaterial }, { status: 200 });
  } catch (error) {
    console.error('Error updating material:', error);
    return NextResponse.json({ error: 'Failed to update material' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const materialId = searchParams.get('id');

  if (!materialId) {
    return NextResponse.json({ error: 'Material ID is required' }, { status: 400 });
  } else {
    try {
      await prisma.material.delete({
        where: {
          id: materialId,
        },
      });
      return NextResponse.json({ message: 'Material deleted successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error deleting material:', error);
      return NextResponse.json({ error: 'Failed to delete material' }, { status: 500 });
    }
  }
}