"use client";
import Image from "next/image";
import Link from "next/link";
import LogoText from "./LogoText";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <div className="">
      <header className="header">
        <nav className="nav">
          <Link
            className="navbar-brand d-flex align-items-center gap-2"
            href="/"
          >
            <Image
              width={300}
              height={300}
              className="img-fluid d-flex"
              src="/images/logo.png"
              alt="logo image"
              style={{ height: "80px" }}
            />
            <LogoText />
          </Link>

          <div
            className={`nav__menu ${showMenu ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <Link
                  href="/"
                  className="nav__link"
                  onClick={closeMenuOnMobile}
                >
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  href="/contact"
                  className="nav__link"
                  onClick={closeMenuOnMobile}
                >
                  Contact
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  href="/about-us"
                  className="nav__link"
                  onClick={closeMenuOnMobile}
                >
                  About Us
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  href="/blogs"
                  className="nav__link"
                  onClick={closeMenuOnMobile}
                >
                  Blogs
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  href="/free-seminar"
                  className="nav__link"
                  onClick={closeMenuOnMobile}
                >
                  Free Seminar
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/courses" className="nav__link nav__cta">
                  Visit courses
                </Link>
              </li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
