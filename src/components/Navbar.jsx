import { contextMain } from "./Context";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Navbar = () => {
  const { isLight, darkMode } = useContext(contextMain);
  return (
    <div>
      <p>Geekster</p>
      <Link to="/">Home</Link> <br />
      <Link to="/contact">Contact</Link> <br />
      <Link to="/service">Service</Link> <br />
      <button onClick={() => darkMode()}>
        Toggle Theme to {isLight ? "Light" : "Dark"}{" "}
      </button>
    </div>
  );
};
export default Navbar;
