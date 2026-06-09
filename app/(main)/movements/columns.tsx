'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Movement } from '@/types/movement';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Movement>[] = [
  {accessorKey: 'bookTitle', header: 'Libro',},
  {accessorKey: 'userName',header: 'Usuario',},
  {accessorKey: 'userID', header: 'ID de Usuario',},
  {accessorKey: 'type', header: 'Tipo de movimiento',},
  {accessorKey: 'movementDate', header: 'Fecha de movimiento',},
  {accessorKey: 'dueDate', header: 'Fecha de vencimiento',},
  {accessorKey: 'returnedAt', header: 'Fecha devuelto',},
  {accessorKey: 'status', header: 'Estado',},
];
