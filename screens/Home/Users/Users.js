import cn from "classnames";
import styles from "./users.module.css";
import User from "../../../components/User";

export default function Users({ userList }) {
  return (
    <div className={cn("section section-pt", styles.section)}>
      <div className={styles.users_wrapper}>
        {userList.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}
