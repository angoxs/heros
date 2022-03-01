import cn from "classnames";
import styles from "./users.module.css";
import User from "../../../components/User";
import { motion } from "framer-motion";

export default function Users({ userList }) {
  return (
    <div className={cn("section section-pt", styles.section)}>
      <div className={styles.users_wrapper}>
        {userList.map((user) => (
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
