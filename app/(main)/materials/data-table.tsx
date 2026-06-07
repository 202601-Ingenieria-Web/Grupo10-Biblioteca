'use client';
import { Material } from './columns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Pencil, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Delete from '@/components/delete-dialog/Index';
import { StatusBadge } from "@/components/materials/status-badge";

interface DataTableProps<TData, TValue> {
  columns: any;
  data: Material[];
}

export function DataTable<Material, TValue>({ columns, data }: DataTableProps<Material, TValue>) {
  return (
    <div className='overflow-hidden rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column: any) => (
              <TableHead className='text-center' key={column.accessorKey}>
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length ? (
            data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className='justify-center items-center text-center'>
                  <Avatar>
                    <AvatarImage
                      src={row.image || 'https://avatars.githubusercontent.com/u/9919?s=200&v=4'}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className='text-center'>{row.title}</TableCell>
                <TableCell className='text-center'>{row.author}</TableCell>
                <TableCell className='text-center'>{row.description}</TableCell>
                <TableCell className='justify-center items-center text-center'>
                  <div>
                    <StatusBadge status={row.status} />
                  </div>
                </TableCell>
                <TableCell className='justify-center items-center text-center'>
                  <div className='flex flex-row gap-2 justify-center'>
                    <Button variant='outline' size='icon'>
                      <Link href={`/materials/create/${row.id}`}>
                        <Pencil />
                      </Link>
                    </Button>
                    <Delete id={row.id} name={row.name} />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
