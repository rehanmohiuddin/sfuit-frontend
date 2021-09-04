import React from 'react'
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import "./Navbar.css";


export const Navbar = () => {
    return (
        <>
            <nav>
                <ul className="nav_list">
                    <li>
                        <Link to="/" className="td">
                            <div className="logo">S<span>f</span>UIT</div>
                        </Link>
                    </li>
                    <li>
                        <div className="profile">
                            <div className="name">John Doe</div>
                        </div>
                    </li>
                    <li>
                        <Link to="#" className="options">
                            <AiIcons.AiOutlineCaretDown  className="options"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/#" className="notifications">
                            <MdIcons.MdNotifications />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
