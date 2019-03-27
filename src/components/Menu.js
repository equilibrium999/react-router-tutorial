import React, { Component } from 'react';
import { Route, Link} from "react-router-dom";

const menuItems = [{
  name: "Home Page",
  to: "/",
  exact: true
},{
  name: "About",
  to: "/about",
  exact: false
},{
  name: "Contact",
  to: "/contact",
  exact: false
},{
  name: "Products",
  to: "/products",
  exact: false
}];

const MenuLink = ({
  label, to, activeOnlyWhenExact
}) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
      var active = match ? "active" : "";
      return (
        <li className={`my-li ${active}`}>
          <Link to={to} className="my-link">{label}</Link>
        </li>
      )
    }}/>
  );
}

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              {this.showMenu(menuItems)}
            </ul>
       </nav>
    );
  }

  showMenu = (menu) => {
    var result = null;
    if (menuItems.length > 0) {
      result = menuItems.map((item, index) => {
        return (
          <MenuLink key={index} label={item.name} to={item.to} activeOnlyWhenExact={item.exact}/>
        );
      });
    }
    return result;
  }
}

export default Menu;
