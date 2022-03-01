import Layout from "../components/Layout";
import { Hero } from "../screens/Home";
import { loadUsers } from "../lib/fetch-post";
import User from "../components/User";
import styles from "../styles/Home.module.css";
import cn from "classnames";

export async function getStaticProps() {
  const response = await fetch(`https://dummyapi.io/data/v1/user?limit=10`, {
    headers: {
      "app-id": "621b899337e9039ef45290cd",
    },
  });

  const data = await response.json();

  return {
    props: {
      userList: data.data,
    },
  };
}

export default function Home({ userList }) {
  console.log(userList);

  return (
    <Layout>
      <Hero />
      {/* {JSON.stringify(userList)} */}
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
