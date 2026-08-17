import { NavLink, Outlet } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout() {
  return (
    <>
      <nav>
        <div className="wrap nav-inner">
          <span className="wordmark">Rue Botanicals</span>
          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <span className="status-pill">In the making</span>
        </div>
      </nav>

      <Outlet />

      <footer>
        <div className="wrap">© 2026 Rue Botanicals · built one step at a time</div>
      </footer>
    </>
  );
}
