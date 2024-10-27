import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-10" aria-label="navbar">
      <nav className="navbar bg-[#03346E] ">
        <div className="flex-1 text-[#E2E2B6]">
          <Link to="/" className="btn btn-ghost text-base font-semibold md:text-3xl hover:no-underline hover:text-[#E2E2B6]">
            Johansyah Diaz
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-xs font-normal md:text-base">
            <li>
              <a>
                <NavLink to="/informations" className="hover:no-underline hover:text-white">
                  Information
                </NavLink>
              </a>
            </li>
            <li>
              <a>
                <Link to="" className="hover:no-underline hover:text-white">
                  Blog
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link className="hover:no-underline hover:text-white" to="">
                  Contact
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
