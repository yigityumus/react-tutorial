import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
	const [user, setUser] = useState({ name: "Bob" });

	const logout = () => {
		setUser(null);
	};

	const login = () => {
		setUser({ name: "Bob" });
	};

	return (
		<NavbarContext.Provider value={{ user, logout, login }}>
			<nav className="navbar">
				<h5>CONTEXT API</h5>
				<NavLinks />
			</nav>
		</NavbarContext.Provider>
	);
};
export default Navbar;
