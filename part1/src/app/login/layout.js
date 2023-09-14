"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";
const Layout = ({ children }) => {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <h4>login navbar</h4>
        </li>
        <li>
          <Link href="/login">login page</Link>
        </li>
        <li>
          <Link href="/login/studentlogin">student page</Link>
        </li>
        <li>
          <Link href="/login/collegelogin">college page</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
