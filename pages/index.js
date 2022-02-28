import Layout from "../components/Layout";
import { Hero } from "../screens/Home";
import { loadUsers } from "../lib/fetch-post";
import User from "../components/User";
import styles from "../styles/Home.module.css";
import cn from "classnames";
import axios from "axios";
import Link from "next/link";

const BASE_URL = "https://dummyapi.io/data/v1";
const APP_ID = "621b899337e9039ef45290cd";

export async function getStaticProps() {
  const response = await fetch(`${BASE_URL}/user?limit=10`, {
    headers: {
      "app-id": APP_ID,
    },
  });

  const { data } = await response.json();

  return {
    props: {
      userList: data,
    },
  };
}

// export const getStaticProps = async () => {
//   const response = await axios.get(`${BASE_URL}/user?limit=10`, {
//     headers: {
//       "app-id": APP_ID,
//     },
//   });

//   return {
//     props: {
//       data: response.data,
//     },
//   };
// };

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
