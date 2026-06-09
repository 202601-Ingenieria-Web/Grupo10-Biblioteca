export type Book = {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publicationYear: number;
  // Estado
  status: "AVAILABLE" | "BORROWED" | "RESERVED" | "LOST" | "DAMAGED";
  image?: string;
};