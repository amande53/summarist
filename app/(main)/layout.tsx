import SearchBar from "../components/layout/SearchBar";
import Sidebar from "../components/layout/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Sidebar />
      <div className="md:ml-50">
        <SearchBar />
        {children}
      </div>
    </section>
  );
}
