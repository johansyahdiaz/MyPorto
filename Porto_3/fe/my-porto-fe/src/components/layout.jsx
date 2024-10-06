import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full bg-[#021526]">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
