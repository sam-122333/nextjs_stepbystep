"use client";
import React from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>login Page</h1>
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

export default Login;
