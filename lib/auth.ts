// lib/auth.ts
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  // Adaptador: sincroniza automáticamente usuarios de Google con tu BD
  adapter: PrismaAdapter(prisma) as any,

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  // Estrategia JWT para que el rol esté disponible en el cliente
  session: {
    strategy: "jwt",
  },

  callbacks: {
    // Al crear el JWT, añadimos el id y rol del usuario desde la BD
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // Obtenemos el rol actualizado desde la base de datos
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });
        token.role = dbUser?.role ?? Role.USER;
      }
      return token;
    },

    // Exponemos id y rol en el objeto session del cliente
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as Role;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login", // Página personalizada de login
  },
};