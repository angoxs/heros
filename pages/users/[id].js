import Layout from "../../components/Layout";
import { users } from "../../data";
import { loadUsers } from "../../lib/fetch-post";
import { Hero } from "../../screens/Profile";

export const getStaticProps = async ({ params }) => {
  const user = await loadUsers(`${params.id}`);

  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths = async () => {
  const users = await loadUsers();

  const paths = users.map((user) => ({
    params: { id: user.id },
  }));

  return { paths, fallback: false };
};

export default function Users({ user }) {
  return (
    <Layout>
      <Hero {...user} id={user.id} />
    </Layout>
  );
}
