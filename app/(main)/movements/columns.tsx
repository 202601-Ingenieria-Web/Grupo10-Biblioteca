'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Movement = {
  id: string;

  materialName: string;

  // Usuario que realizó el movimiento
  userName: string;

  // Tipo de movimiento
  type: 'BORROW' | 'RETURN' | 'RESERVATION';

  // Fechas
  movementDate: Date;
  dueDate?: Date;
  returnedAt?: Date;

  status: 'PENDING' | 'COMPLETED' | 'LATE';

  // Observaciones
  notes?: string;
};

export const columns: ColumnDef<Movement>[] = [
  {accessorKey: 'materialName', header: 'Material',},
  {accessorKey: 'userName',header: 'User',},
  {accessorKey: 'type', header: 'Type',},
  {accessorKey: 'movementDate', header: 'Movement Date',},
  {accessorKey: 'dueDate', header: 'Due Date',},
  {accessorKey: 'status', header: 'Status',},
];
