import { columns } from './columns';
import { DataTable } from './data-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

async function getData() {
  const response = await fetch(
    'http://localhost:3000/api/books',
    {
      cache: 'no-store',
    }
  );

  const data = await response.json();

  return data.libros;
}

export default async function BooksPage() {
  const data = await getData();

  return (
    <div className='container mx-auto py-10'>
      <div className='flex justify-between items-center mb-10'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight'>Gestión de Libros</h2>
          <p className='text-muted-foreground'>Administra los libros de la biblioteca.</p>
        </div>
        <Link href='/books/create'>
          <Button className='ml-auto'>Agregar Libro</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}