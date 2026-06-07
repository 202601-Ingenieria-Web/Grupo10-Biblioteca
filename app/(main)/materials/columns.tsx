'use client';

import { ColumnDef } from '@tanstack/react-table';
import type { Material } from "@/types/material";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Material>[] = [
  {accessorKey: 'title', header: 'Título',},
  {accessorKey: 'author', header: 'Autor',},
  {accessorKey: 'description', header: 'Descripción',},
  {accessorKey: 'publisher', header: 'Editorial',},
  {accessorKey: 'isbn', header: 'ISBN',},
  {accessorKey: 'category', header: 'Categoría',},
  {accessorKey: 'materialType', header: 'Tipo de Material',},
  {accessorKey: 'publicationYear', header: 'Año de Publicación',},
  {accessorKey: 'status', header: 'Estado',},
  {accessorKey: 'image', header: 'Imagen',},
];
