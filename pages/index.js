import Layout from "../components/Layout";
import { Hero } from "../screens/Home";
import { loadUsers } from "../lib/fetch-post";
import { users } from "../data";
import User from "../components/User";
import styles from "../styles/Home.module.css";
import cn from "classnames";
import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "https://dummyapi.io/data/v1";
const APP_ID = "621b899337e9039ef45290cd";

export async function getStaticProps() {
  const users = await loadUsers();

  return {
    props: {
      userList: users,
    },
  };
}

export default function Home({ userList }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  // console.log(data);

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(`${BASE_URL}/user?limit=10`, { headers: { "app-id": APP_ID } })
  //     .then(({ data }) => setData(data))
  //     .catch(console.error)
  //     .finally(() => setLoading(false));
  // }, []);
  console.log(userList);

  return (
    <Layout>
      <Hero />
      {loading && "Loading..."}
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
