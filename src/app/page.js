"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("rohan");
  const changeName = (name) => setName(name);
  const InnerComp = () => {
    return <h1>inner component call</h1>;
  };
  return (
    <main className={styles.main}>
      <h1>Home Page name is {name}</h1>
      <Link href="/login">link</Link>
      <button
        onClick={() => {
          router.push("/login");
        }}
      >
        click me to go in login page
      </button>
      <br />
      <button
        onClick={() => {
          router.push("/about");
        }}
      >
        click me to go in about page
      </button>

      {/* <button onClick={() => alert("hello alert")}>click me</button> */}
      <button onClick={() => changeName("fruit")}>click me</button>

      <InnerComp />
    </main>
  );
}
