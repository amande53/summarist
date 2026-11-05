import MenuButton from "../components/layout/MenuButton";
import Sidebar from "../components/layout/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Sidebar />
      <div className="md:ml-50">
        <div>
          {" "}
          Search bar goes Here <MenuButton />
        </div>
        {children}
      </div>
    </section>
  );
}
