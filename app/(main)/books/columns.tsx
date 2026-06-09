'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Book = {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publicationYear: number;
  status: "AVAILABLE" | "BORROWED" | "RESERVED" | "LOST" | "DAMAGED";
  image?: string;
};

export const columns: ColumnDef<Book>[] = [
  {accessorKey: 'title', header: 'Título',},
  {accessorKey: 'author', header: 'Autor',},
  {accessorKey: 'isbn', header: 'ISBN',},
  {accessorKey: 'publicationYear', header: 'Año de Publicación',},
  {accessorKey: 'status', header: 'Estado',},
  {accessorKey: 'image', header: 'Imagen',},
];