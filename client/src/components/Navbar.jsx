import React from "react";
import { Link } from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { ready, authenticated, login, logout } = usePrivy();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!ready) {
    return (
      <div className="flex justify-center items-center h-16 bg-background-dark dark:bg-background-dark">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <nav className="bg-background-dark dark:bg-background-dark text-white shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2">
              <span className="material-icons-outlined text-2xl text-primary">edit</span>
              <span className="text-xl font-bold">GramChecker</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            {authenticated && <NavLink to="/write">Write</NavLink>}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="ml-4">
              {authenticated ? (
                <button
                  onClick={logout}
                  className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition duration-300 text-sm"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={login}
                  className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition duration-300 text-sm"
                >
                  Login
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
              {authenticated && <MobileNavLink to="/write" onClick={toggleMenu}>Write</MobileNavLink>}
              <div className="pt-4">
                {authenticated ? (
                  <button
                    onClick={() => {
                      logout();
                      toggleMenu();
                    }}
                    className="w-full bg-primary text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition duration-300"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      login();
                      toggleMenu();
                    }}
                    className="w-full bg-primary text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition duration-300"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:text-primary transition duration-300 font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-white hover:text-primary transition duration-300 font-medium py-2"
  >
    {children}
  </Link>
);

export default Navbar;