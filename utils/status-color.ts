type TxStatus = "successful" | "pending" | "completed" | "failed";

const statusColors: Record<TxStatus, { text: string; background: string }> = {
  successful: {
    text: "#065f46",
    background: "#d1fae5",
  },
  pending: {
    text: "#92400e",
    background: "#fef3c7",
  },
  completed: {
    text: "#1e40af",
    background: "#dbeafe",
  },
  failed: {
    text: "#7f1d1d",
    background: "#fee2e2",
  },
};

export const getStatusColor = ({ status }: { status: string }) => {
  return (
    statusColors[status as TxStatus] ?? {
      text: "#374151",
      background: "#f3f4f6",
    }
  );
};
