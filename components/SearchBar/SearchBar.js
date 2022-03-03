import cn from "classnames";
import styles from "./searchBar.module.css";

export default function SearchBar({ inputHandler }) {
  return (
    <label className={styles.label}>
      <input
        className={cn("caption", styles.input)}
        onChange={inputHandler}
        placeholder='Search Heros'
        type='text'
      />
    </label>
  );
}
