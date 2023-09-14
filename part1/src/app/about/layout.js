import Link from "next/link";
import "./about.css";
const layout = ({ children }) => {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <h4>about navbar</h4>
        </li>
        <li>
          <Link href="/about">about menu</Link>
        </li>
        <li>
          <Link href="/about/aboutcollege">aboutcollege meny</Link>
        </li>
        <li>
          <Link href="/about/aboutstudent">aboutstudent menu</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default layout;
