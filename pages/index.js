import Layout from "../components/Layout";
import { Hero, Users } from "../screens/Home";
import { loadUsers } from "../lib/fetch-post";

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
      <Users userList={userList} />
    </Layout>
  );
}
