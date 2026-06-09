'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Maestro = {
  id: string;
  nombre: string;
  saldo: number;
  creadoPor: {
    name: string;
  };
};

export const columns: ColumnDef<Maestro>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'nombre',
    header: 'Título',
  },
  {
    accessorKey: 'saldo',
    header: 'Disponibles',
  },
  {
    accessorKey: 'creadoPor.name',
    header: 'Creado Por',
  },
];