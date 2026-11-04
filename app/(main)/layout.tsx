import Sidebar from "../components/layout/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Sidebar />
      <div className="ml-50">
        <div> Search bar goes Here</div>
        {children}
      </div>
    </section>
  );
}
