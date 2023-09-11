"use client";
import React from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1 className="heading">login Page</h1>
    </main>
  );
};

export default Login;
