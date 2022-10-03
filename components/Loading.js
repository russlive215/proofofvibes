import * as React from "react";
import { LoadingIcon } from "./LoadingIcon";

import styles from "../styles/About.module.css";

export const Loading = () => (
  <div className={styles.container}>
    <LoadingIcon />
  </div>
);
