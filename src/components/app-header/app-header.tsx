import React from "react";
import './style.css'
import {Link} from "react-router-dom";

interface IPropState {
  showMenu: boolean
}

export default class AppHeader extends React.Component<any, IPropState> {

  state: IPropState = {
    showMenu: false
  };

  onShowMenu = (showMenu: any) => {
    this.setState({showMenu: !showMenu})
  };

  render() {

    const {showMenu} = this.state;

    const Menu = (
      <ul>
        <li>
          <Link to='/'>Раздел №1</Link>
        </li>
        <li>
          <Link to='/two'>Раздел №2</Link>
        </li>
      </ul>
    );

    return (
      <header className="header black-bg">
        <a className="logo"><b>Vito<span> Technology</span></b></a>
        {showMenu ? showMenu : Menu}
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" onClick={() => this.onShowMenu(showMenu)}/>
            <span></span>
            <span></span>
            <span></span>
            <ul>
              {showMenu &&
              <ul className="">
                <li>
                  <Link to='/'>Раздел №1</Link>
                </li>
                <li>
                  <Link to='/two'>Раздел №2</Link>
                </li>
              </ul>
              }
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
