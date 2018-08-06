import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import _ from 'lodash';
import { Link } from 'react-router-dom';

// using the default img for now from the component
//import hamBurger from '../style/burger.png';
import { styles } from '../style/nav_style';


class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }
  
  handleStateChange(state) {
    this.setState({menuOpen: state.isOpen});
  }

  closeMenu() {
    this.setState({menuOpen: false});
  }

  toggleMenu(event) {
    //event.preventDefault();
    this.setState({menuOpen: !this.state.menuOpen});
  }

  navContent(items) {
    return(
      _.map(items, (value, key) => 
      <Link className="sidenav-link" onClick={ () => this.toggleMenu()} to={value} key={key}>{key}</Link>)
    );
  }
  render(){
    const navItems = {Home: '/',
                      Blog: '/blog',
                      ClemsonSpecials: '/clemsonspecials',
                      Notes: '/notes'};
    
    return(
      <div>
        <Menu width={ '300px' }
              styles={ styles }
              pageWrapId={ "page-wrap" }
              isOpen={ this.state.menuOpen }
              onStateChange={ (state) => this.handleStateChange(state) }
        >
        <h3 className="text-center">
        <Link className="nav-home-link" onClick={ () => this.toggleMenu()} to="/" key="home">edelman.io</Link>
        </h3>
        {this.navContent(navItems)}
        </Menu>

      </div>
    );
  }
}

export default HamburgerMenu;