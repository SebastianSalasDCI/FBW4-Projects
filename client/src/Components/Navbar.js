import {NavLink} from 'react-router-dom'
import React, {useState} from 'react'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Collapse
  } from "shards-react";
import data from '../data/data.json'


export default function NavbarComp() {

    const [collapseOpen, setCollapse] = useState(false)

    const toggleNavbar = () =>{
        setCollapse(!collapseOpen)
    }

    let navbar_links = data.groups.map(group => {
        return(
            <NavItem key={group.name} className="navItem">
                <NavLink className="navlink" 
                        activeClassName='linkActive' 
                        style={{ textDecoration: 'none' }}
                        to={`/group/${group.link}`}>
                    {group.name}
                </NavLink>
            </NavItem>
        )
    })

    return (
        
    <Navbar className="navb" type="dark" theme="dark" expand="md">
        <NavLink to="/">
            <NavbarBrand >FBW3 Projects</NavbarBrand>
        </NavLink>
        <NavbarToggler onClick={toggleNavbar} />

        <Collapse open={collapseOpen} navbar>
            <Nav navbar>
                {navbar_links}
            </Nav>
        </Collapse>
    </Navbar>
        
    )
}
