'use client';

import { ColumnDef } from '@tanstack/react-table';
import { User } from '@/types/user';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<User>[] = [
  { accessorKey: 'image', header: 'Avatar' },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'enabled', header: 'Enabled' },
  {
    accessorKey: 'actions',
    header: 'Actions',
  },
];
