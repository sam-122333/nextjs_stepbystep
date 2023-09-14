import Link from "next/link";
import React from "react";
import styles from "../page.module.css";

const StudentList = () => {
  return (
    <div className={styles.main}>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentlist/anil">Anil</Link>
        </li>
        <li>
          <Link href="/studentlist/peter">peter</Link>
        </li>
        <li>
          <Link href="/studentlist/sam">sam</Link>
        </li>
        <li>
          <Link href="/studentlist/bhaskar">bhaskar</Link>
        </li>
      </ul>
    </div>
  );
};

export default StudentList;
