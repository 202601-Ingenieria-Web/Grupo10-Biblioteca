export type Material = {
  id: string;
  title: string;
  author: string;
  description?: string;
  publisher: string;
  isbn: string;

  // Clasificación
  category: string;
  materialType: "BOOK" | "MAGAZINE" | "THESIS" | "DVD" | "EBOOK";

  publicationYear: number;

  // Estado
  status: "AVAILABLE" | "BORROWED" | "RESERVED" | "LOST" | "DAMAGED";

  image?: string;
};