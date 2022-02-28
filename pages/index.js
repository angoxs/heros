import Layout from "../components/Layout";
import { Hero } from "../screens/Home";
import { loadUsers } from "../lib/fetch-post";
import { users } from "../data";
import User from "../components/User";
import styles from "../styles/Home.module.css";
import cn from "classnames";

export async function getStaticProps() {
  // const users = await loadUsers();

  return {
    props: {
      userList: users,
    },
  };
}

export default function Home({ userList }) {
  return (
    <Layout>
      <Hero />
      <div className={cn("section section-pt")}>
        <div className={styles.users_wrapper}>
          {userList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
