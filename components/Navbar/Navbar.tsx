"use client";

import "./Navbar.css";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <nav className="Navbar">
      <Link className="NavbarName" href="/posts">
        Walid Moussa Khalil Ibrahim
      </Link>
      <button className="NavbarToggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
