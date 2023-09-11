"use client";
import React from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>about Page</h1>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        click me to go in home page
      </button>
    </main>
  );
};

export default About;
