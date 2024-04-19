import { memo } from "react";
import styles from "./Checkbox.module.scss";

export const Checkbox = memo(() => (
  <input type="checkbox" className={styles.checkbox} />
));
