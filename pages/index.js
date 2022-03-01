import Layout from "../components/Layout";
import { Hero, Users } from "../screens/Home";
import { loadUsers } from "../lib/fetch-post";

export async function getStaticProps() {
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
