"use client";

import { LoginForm } from "@/components/login-form";
import { HugeiconsIcon } from "@hugeicons/react";
import { Book02Icon } from "@hugeicons/core-free-icons";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-white">
      {/* Lado Izquierdo: Formulario */}
      <div className="flex flex-col gap-4 p-6 md:p-10 justify-center items-center">
        <div className="flex flex-col items-center gap-2 text-center mb-4">
          {/* Reemplazamos el escudo de BROOK por un icono de libro elegante en color azul/índigo */}
          <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl mb-2">
            <HugeiconsIcon icon={Book02Icon} size={40} strokeWidth={2} />
          </div>
          <span className="font-bold text-2xl tracking-tight text-slate-800">
            BiblioGestión
          </span>
          <p className="text-sm text-slate-500 max-w-sm">
            Ingresa tus credenciales para acceder al sistema administrativo
          </p>
        </div>

        <div className="w-full max-w-xs">
          <LoginForm />
        </div>
      </div>

      {/* Lado Derecho: Imagen Alusiva a Biblioteca */}
      <div className="relative hidden bg-slate-900 lg:block">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop"
          alt="Biblioteca Universitaria"
          className="absolute inset-0 h-full w-full object-cover opacity-85 brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent flex items-end p-12">
          <p className="text-white text-lg font-medium italic drop-shadow-md">
            &ldquo;La educación es el arma más poderosa que puedes usar para
            cambiar el mundo.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
