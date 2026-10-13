"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { MenuIcon, XIcon } from "./Icons";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a
          className="wordmark"
          href="#home"
          aria-label={`${siteConfig.shortName}, home`}
          onClick={() => setMenuOpen(false)}
        >
          {siteConfig.shortName}<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
        <div
          id="primary-navigation"
          className={`nav-content${menuOpen ? " is-open" : ""}`}
        >
          <div className="nav-links">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
          <a
            className="button button-small button-outline"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
