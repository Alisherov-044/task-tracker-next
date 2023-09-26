"use client";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h5 className="footer--copyright">Copyright © {year}</h5>
      <Link className="footer--link" href="/about">
        about
      </Link>
    </footer>
  );
}
