import SearchBar from "../components/layout/SearchBar";
import Sidebar from "../components/layout/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Sidebar />
      <div className="md:ml-50">
        <SearchBar />
        <div className="w-full max-w-267.5 mx-auto my-0 px-6">
          <div className="py-10 w-full">{children}</div>
        </div>
      </div>
    </section>
  );
}
