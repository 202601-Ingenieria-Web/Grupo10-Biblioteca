export type Movement = {
  id: string;
  bookTitle: string;
  // Usuario que realizó el movimiento
  userName: string;
  userID: string;
  // Tipo de movimiento
  type: 'BORROW' | 'RETURN' | 'RESERVATION';
  // Fechas
  movementDate: Date;
  dueDate: Date;
  returnedAt?: Date;
  status: 'PENDING' | 'COMPLETED' | 'LATE';
};