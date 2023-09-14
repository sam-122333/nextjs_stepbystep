"use client";
import React from "react";
import styles from "../../page.module.css";

const page = ({ params }) => {
  return (
    <div className={styles.main}>
      <h1>day of college {params.lecture[0]}</h1>
      <h3>lecture of college {params.lecture[1]} </h3>
      <h4>month {params.lecture[2]} </h4>
      <h4>year {params.lecture[3]} </h4>
    </div>
  );
};

export default page;
