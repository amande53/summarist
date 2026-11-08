interface BookDetailProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function BookDetail({ icon, children }: BookDetailProps) {
  return (
    <div className="flex items-center w-1/2 text-navy font-medium text-sm">
      <span className="flex mr-1 text-2xl">{icon}</span>
      {children}
    </div>
  );
}
