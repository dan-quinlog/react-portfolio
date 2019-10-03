import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
    constructor() { 
        super();
    }
    render() {
        return (
            <div>
                <NavLink exact to="/">
                    Home
                </NavLink>

                <NavLink to="/about-me">
                    About
                </NavLink>
                {/* normally classes get class active, activeClassName overrides that */}
                <NavLink to="/contact" activeClassName="nav-link-active">
                    Contact
                </NavLink>

                <NavLink to="/blog">
                    Blog
                </NavLink>

                {false ? <button>Add Blog</button> : null }
            </div>
        )
    }
}
