import { Badge } from "@/components/ui/badge";
import type { Material } from "@/types/material";

type Props = {
  status: Material["status"];
};

export function StatusBadge({ status }: Props) {
  const styles = {
    AVAILABLE: "bg-green-100 text-green-800",
    BORROWED: "bg-blue-100 text-blue-800",
    RESERVED: "bg-yellow-100 text-yellow-800",
    LOST: "bg-red-100 text-red-800",
    DAMAGED: "bg-orange-100 text-orange-800",
  };

  const labels = {
    AVAILABLE: "Disponible",
    BORROWED: "Prestado",
    RESERVED: "Reservado",
    LOST: "Perdido",
    DAMAGED: "Dañado",
  };

  return (
    <Badge className={styles[status]}>
      {labels[status]}
    </Badge>
  );
}