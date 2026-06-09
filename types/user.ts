export type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  deleted: boolean;
  enabled: boolean;
  role: 'ADMIN' | 'USER';
  createdAt: Date;
};