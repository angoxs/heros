import cn from "classnames";
import styles from "./users.module.css";
import User from "../../../components/User";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Users({ users }) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (event) => {
    var lowerCase = event.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = users.filter((element) => {
    if (inputText === "") {
      return element;
    } else {
      return element.firstName.toLowerCase().includes(inputText);
    }
  });

  return (
    <div className={cn("section section-pt", styles.section)}>
      <div className={styles.users_wrapper}>
        <div className={styles.label}>
          <input
            className={cn("caption", styles.input)}
            onChange={inputHandler}
            placeholder='Search Users'
            type='text'
          />
        </div>

        {filteredData.map((user) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <User key={user.id} {...user} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
