"use client";
import React from "react";
import styles from "../../page.module.css";

const StudentList = ({ params }) => {
  console.log(params.student, "hello");
  return (
    <div className={styles.main}>
      <h1>Student List Child</h1>
      <h3>hello {params.student}</h3>
    </div>
  );
};

export default StudentList;
