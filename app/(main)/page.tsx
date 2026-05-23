import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, ShieldCheck, ArrowRight, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      {/* Encabezado / Navbar */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <span className="font-bold text-xl tracking-tight text-slate-800">
            BiblioGestión
          </span>
        </div>
        <Link
          href="/login"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm shadow-sm"
        >
          Iniciar Sesión
        </Link>
      </header>

      {/* Contenido Principal / Hero Section */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 flex flex-col items-center justify-center text-center gap-12">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Sistema de Gestión de Biblioteca
          </h1>
          <p className="text-lg text-slate-600">
            Control eficiente de inventario de libros, registro automatizado de
            préstamos y administración de usuarios en tiempo real.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-md group"
            >
              Acceder al Panel
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Sección de Características (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-6">
          {/* Tarjeta 1 */}
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-col items-center text-center pb-2">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl mb-2">
                <BookOpen className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Control de Materiales</CardTitle>
              <CardDescription>Catálogo e Inventario</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 text-center">
              Administración completa de libros y recursos con actualización
              automática de saldos disponibles.
            </CardContent>
          </Card>

          {/* Tarjeta 2 */}
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-col items-center text-center pb-2">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mb-2">
                <Activity className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Transacciones</CardTitle>
              <CardDescription>Préstamos y Devoluciones</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 text-center">
              Registro estricto de movimientos de entradas y salidas asociando
              automáticamente al responsable.
            </CardContent>
          </Card>

          {/* Tarjeta 3 */}
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-col items-center text-center pb-2">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl mb-2">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Roles y Seguridad</CardTitle>
              <CardDescription>Control de Acceso</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 text-center">
              Vistas dinámicas y restricciones de seguridad personalizadas para
              perfiles ADMIN y USER.
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Pie de Página / Footer */}
      <footer className="bg-white border-t border-slate-200 px-6 py-4 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} BiblioGestión - Proyecto de Ingeniería
        Web. Todos los derechos reservados.
      </footer>
    </div>
  );
}
