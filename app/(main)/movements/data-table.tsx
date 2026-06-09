'use client';
import { Movement } from '@/types/movement';
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

interface DataTableProps<TData, TValue> {
  columns: any;
  data: Movement[];
}

export function DataTable<Movement, TValue>({ columns, data }: DataTableProps<Movement, TValue>) {
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
                <TableCell className='text-center'>{row.bookTitle}</TableCell>
                <TableCell className='text-center'>{row.userName}</TableCell>
                <TableCell className='text-center'>{row.userID}</TableCell>
                <TableCell className='text-center'>{row.type}</TableCell>
                <TableCell className='text-center'>{row.movementDate}</TableCell>
                <TableCell className='text-center'>{row.dueDate}</TableCell>
                <TableCell className='text-center'>{row.returnedAt}</TableCell>
                <TableCell className='text-center'>{row.status}</TableCell>
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

                      checked={row.enabled}
                    />
                  </div>
                </TableCell>
                <TableCell className='justify-center items-center text-center'>
                  <div className='flex flex-row gap-2 justify-center'>
                    <Button variant='outline' size='icon'>
                      <Link href={`/movements/create/${row.id}`}>
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
