export type Book = {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publicationYear: number;
  status: "AVAILABLE" | "BORROWED" | "RESERVED" | "LOST" | "DAMAGED";
  image?: string;
};