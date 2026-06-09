'use client';

import * as React from 'react';
import { useForm } from '@tanstack/react-form';
import { toast } from 'sonner';
import * as z from 'zod';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { useParams } from 'next/navigation';

const formSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El título debe tener mínimo 2 caracteres.')
    .max(100, 'El título debe tener máximo 100 caracteres.'),

  saldo: z.number().min(0, 'El saldo no puede ser negativo.'),
});

export function BookForm() {
  const params = useParams<{ id: string }>();

  const [loading, setLoading] = React.useState(false);

  const [bookData, setBookData] = React.useState<{
    nombre: string;
    saldo: number;
  } | null>(null);

  async function fetchBookData(bookId: string) {
    try {
      const response = await fetch(
        `/api/maestros?id=${bookId}`
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      return data.maestro;
    } catch (error) {
      console.error(error);
      toast.error('Error cargando libro');
      return null;
    }
  }

  const form = useForm({
    defaultValues: {
      nombre: '',
      saldo: 0,
    },

    validators: {
      onSubmit: formSchema,
    },

    onSubmit: async ({ value }) => {
      setLoading(true);

      try {
        const response = await fetch(
          '/api/maestros',
          {
            method: 'PUT',
            headers: {
              'Content-Type':
                'application/json',
            },
            body: JSON.stringify({
              maestro: {
                id: params.id,
                ...value,
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error();
        }

        toast.success(
          'Libro actualizado correctamente'
        );
      } catch (error) {
        console.error(error);
        toast.error(
          'Error actualizando libro'
        );
      } finally {
        setLoading(false);
      }
    },
  });

  React.useEffect(() => {
    if (!params.id) return;

    fetchBookData(params.id).then((data) => {
      if (!data) return;

      setBookData(data);

      form.reset({
        nombre: data.nombre,
        saldo: data.saldo,
      });
    });
  }, [params.id]);

  return (
    <div>
      <h2 className='text-2xl font-bold tracking-tight'>
        Libros
      </h2>

      <p className='text-muted-foreground'>
        Gestiona los libros de la biblioteca.
      </p>

      <div className='my-10 rounded-md border bg-popover p-6 max-w-2xl'>
        <form
          id='book-form'
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field name='nombre'>
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched &&
                  !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel>
                      Título del libro
                    </FieldLabel>

                    <Input
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) =>
                        field.handleChange(
                          e.target.value
                        )
                      }
                      placeholder='Clean Code'
                    />

                    {isInvalid && (
                      <FieldError
                        errors={
                          field.state.meta.errors
                        }
                      />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name='saldo'>
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched &&
                  !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel>
                      Cantidad disponible
                    </FieldLabel>

                    <Input
                      type='number'
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) =>
                        field.handleChange(
                          Number(e.target.value)
                        )
                      }
                      placeholder='10'
                    />

                    {isInvalid && (
                      <FieldError
                        errors={
                          field.state.meta.errors
                        }
                      />
                    )}
                  </Field>
                );
              }}
            </form.Field>
          </FieldGroup>
        </form>

        <div className='mt-6'>
          <Field orientation='horizontal'>
            <Button
              type='button'
              variant='outline'
              onClick={() => form.reset()}
            >
              Reset
            </Button>

            {!loading ? (
              <Button
                type='submit'
                form='book-form'
              >
                Guardar
              </Button>
            ) : (
              <Button type='button'>
                <Spinner data-icon='inline-start' />
                Guardando...
              </Button>
            )}
          </Field>
        </div>
      </div>
    </div>
  );
}

export default function EditBookPage() {
  return (
    <div className='container mx-auto py-10'>
      <BookForm />

      <Link href='/maestros'>
        <Button
          type='button'
          variant='outline'
        >
          Cancelar
        </Button>
      </Link>
    </div>
  );
}