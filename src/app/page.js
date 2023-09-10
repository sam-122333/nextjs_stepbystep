"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("rohan");
  const changeName = (name) => setName(name);
  const InnerComp = () => {
    return <h1>inner component call</h1>;
  };
  return (
    <main className={styles.main}>
      <h1>Home Page name is {name}</h1>

      {/* <button onClick={() => alert("hello alert")}>click me</button> */}
      <button onClick={() => changeName("fruit")}>click me</button>

      <InnerComp />
    </main>
  );
}
