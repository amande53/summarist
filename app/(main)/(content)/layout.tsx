export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-267.5 mx-auto  px-6">
      <main className="py-10 w-full">{children}</main>
    </div>
  );
}
