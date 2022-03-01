import Layout from "../components/Layout";
import { Hero, Users } from "../screens/Home";
import { loadUsers } from "../lib/fetch-post";

const endpoint = "https://dummyapi.io/data/v1/user";

export async function getStaticProps() {
  // const response = await fetch(`${endpoint}?limit=10`, {
  //   headers: {
  //     "app-id": "621b899337e9039ef45290cd",
  //   },
  // });

  const users = await loadUsers();

  return {
    props: {
      users: users,
    },
  };
}

export default function Home({ users, endpoint }) {
  console.log(users);

  return (
    <Layout>
      <Hero />
      <Users users={users} endpoint={endpoint} />
    </Layout>
  );
}
