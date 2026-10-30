export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div>Sidebar goes here</div>
      <div> Search bar goes Here</div>
      {children}
    </section>
  );
}
