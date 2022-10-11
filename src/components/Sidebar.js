import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export class Sidebar extends Component {
    render() {
        return (
            <div>
                <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>

                <header id="header" class="d-flex flex-column justify-content-center">

                    <nav id="navbar" class="navbar nav-menu">
                    
                        <ul>
                            <li><NavLink end to="" class="nav-link scrollto"><i class="bx bx-home"></i> <span>Home</span></NavLink></li>
                            <li><NavLink to="/about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></NavLink></li>
                            <li><NavLink to="/CV" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></NavLink></li>
                            <li><NavLink to="/ProjectItem" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></NavLink></li>
                            <li><a href="https://form.123formbuilder.com/6267380/form" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
                        </ul>
                    </nav>

                </header>
            </div>
        );
    }
}

export default Sidebar
