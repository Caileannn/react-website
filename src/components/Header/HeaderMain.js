import "./HeaderMain.css";
import { NavLink } from "react-router-dom";

function HeaderMain() {
  return (
    <div className="header-main-container">
      <div>
        <NavLink
          to="/works"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "rgb(46, 46, 46)",
            background: isActive ? "#f52626" : "#fafefa",
            padding: '4px',
            borderRadius: '12px',
            boxShadow: isActive ? '0px 0px 1px black' : '0px 0px 0px white'
          })}
        >
          works
        </NavLink>
      </div>
      <div>
        <NavLink to="/about" style={({ isActive }) => ({
            color: isActive ? "#fff" : "rgb(46, 46, 46)",
            background: isActive ? "#f52626" : "#fafefa",
            padding: '4px',
            borderRadius: '12px',
            boxShadow: isActive ? '0px 0px 1px black' : '0px 0px 0px white'
          })}>about</NavLink>
      </div>
      <div>
        <NavLink to="/other-projects" style={({ isActive }) => ({
            color: isActive ? "#fff" : "rgb(46, 46, 46)",
            background: isActive ? "#f52626" : "#fafefa",
            padding: '4px',
            borderRadius: '12px',
            boxShadow: isActive ? '0px 0px 1px black' : '0px 0px 0px white'
          })}>other projects</NavLink>
      </div>
      <div>
        <NavLink to="/log" style={({ isActive }) => ({
            color: isActive ? "#fff" : "rgb(46, 46, 46)",
            background: isActive ? "#f52626" : "#fafefa",
            padding: '4px',
            borderRadius: '12px',
            boxShadow: isActive ? '0px 0px 1px black' : '0px 0px 0px white'
          })}>(b)log</NavLink>
      </div>
    </div>
  );
}

export default HeaderMain;
