import Layout from "../../components/Layout";
import { users } from "../../data";
import { Hero } from "../../screens/Profile";

export const getStaticProps = async ({ params }) => {
  const userList = users.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      user: userList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
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
