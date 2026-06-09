'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Pencil } from 'lucide-react';
import Delete from '@/components/delete-dialog/Index';

interface DataTableProps {
  columns: any;
  data: any[];
}

export function DataTable({
  columns,
  data,
}: DataTableProps) {
  return (
    <div className='overflow-hidden rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column: any) => (
              <TableHead
                key={column.accessorKey}
                className='text-center'
              >
                {column.header}
              </TableHead>
            ))}

            <TableHead className='text-center'>
              Acciones
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.length ? (
            data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className='text-center'>
                  {row.id}
                </TableCell>

                <TableCell className='text-center'>
                  {row.nombre}
                </TableCell>

                <TableCell className='text-center'>
                  {row.saldo}
                </TableCell>

                <TableCell className='text-center'>
                  {row.creadoPor?.name}
                </TableCell>

                <TableCell>
                  <div className='flex justify-center gap-2'>
                    <Button
                      variant='outline'
                      size='icon'
                    >
                      <Link
                        href={`/maestros/create/${row.id}`}
                      >
                        <Pencil className='h-4 w-4' />
                      </Link>
                    </Button>

                    <Delete
                      id={row.id}
                      name={row.nombre}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={5}
                className='h-24 text-center'
              >
                No hay libros registrados.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}