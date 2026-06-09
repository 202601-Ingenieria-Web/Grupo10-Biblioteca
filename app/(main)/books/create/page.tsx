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

const formSchema = z.object({
  nombre: z
    .string()
    .min(2, 'Ingrese un título válido'),

  saldo: z.number(),
});

export function BookForm() {
  const [loading, setLoading] =
    React.useState(false);

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
            method: 'POST',
            headers: {
              'Content-Type':
                'application/json',
            },
            body: JSON.stringify({
              maestro: value,
            }),
          }
        );

        if (!response.ok) {
          throw new Error();
        }

        toast.success(
          'Libro creado correctamente'
        );
      } catch {
        toast.error(
          'Error creando libro'
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <h2 className='text-2xl font-bold tracking-tight'>
        Libros
      </h2>

      <p className='text-muted-foreground'>
        Registrar libro
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
              {(field) => (
                <Field>
                  <FieldLabel>
                    Título
                  </FieldLabel>

                  <Input
                    value={field.state.value}
                    onChange={(e) =>
                      field.handleChange(
                        e.target.value
                      )
                    }
                  />
                </Field>
              )}
            </form.Field>

            <form.Field name='saldo'>
              {(field) => (
                <Field>
                  <FieldLabel>
                    Cantidad
                  </FieldLabel>

                  <Input
                    type='number'
                    value={field.state.value}
                    onChange={(e) =>
                      field.handleChange(
                        Number(
                          e.target.value
                        )
                      )
                    }
                  />
                </Field>
              )}
            </form.Field>
          </FieldGroup>
        </form>

        <div className='mt-6'>
          {!loading ? (
            <Button
              type='submit'
              form='book-form'
            >
              Guardar
            </Button>
          ) : (
            <Button type='button'>
              <Spinner />
              Guardando...
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CreateBookPage() {
  return (
    <div className='container mx-auto py-10'>
      <BookForm />

      <Link href='/books'>
        <Button variant='outline'>
          Cancelar
        </Button>
      </Link>
    </div>
  );
}