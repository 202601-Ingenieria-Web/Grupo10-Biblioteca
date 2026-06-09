import { columns} from './columns';
import { Movement } from '@/types/movement';
import { DataTable } from './data-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

async function getData(): Promise<Movement[]> {
  const response = await fetch('http://localhost:3000/api/movements');
  const data = await response.json();

  return data.movements;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className='container mx-auto py-10'>
      <div className='flex flex-row justify-around my-10 '>
        <div>
          <h2 className='text-2xl font-bold tracking-tight'>Movements</h2>
          <p className='text-muted-foreground'>Manage your movements here.</p>
        </div>
        <Link href='/movements/create'>
          <Button className='ml-auto'>Create Movement</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
