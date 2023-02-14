import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.container}>
      <div class={`${styles.circle} ${styles.circle1}`} />
      <div class={`${styles.circle} ${styles.circle2}`} />
      <div class={styles.titleArea}>
        <p class={styles.titleText}>SOLID</p>
        <p class={`${styles.titleText} ${styles.titlePrimaryText}`}>TODO</p>
        <p class={styles.titleText}>APP</p>
        <img src={logo} class={styles.titleImage} />
      </div>
    </div>
  );
};

export default App;
