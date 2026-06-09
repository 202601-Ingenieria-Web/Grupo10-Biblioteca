'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Book } from '@/types/book';

export const columns: ColumnDef<Book>[] = [
  {accessorKey: 'title', header: 'Título',},
  {accessorKey: 'author', header: 'Autor',},
  {accessorKey: 'isbn', header: 'ISBN',},
  {accessorKey: 'publicationYear', header: 'Año de Publicación',},
  {accessorKey: 'status', header: 'Estado',},
  {accessorKey: 'image', header: 'Imagen',},
];