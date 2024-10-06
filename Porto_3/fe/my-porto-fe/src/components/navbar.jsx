import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 " aria-label="navbar">
      <nav className="navbar bg-[#03346E] ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Johansyah Diaz</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Information</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
