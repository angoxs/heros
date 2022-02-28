import Layout from "../../components/Layout";
import { loadUsers } from "../../lib/fetch-post";
import { Hero } from "../../screens/Profile";

export const getStaticProps = async ({ params }) => {
  const { response } = await fetch(
    `https://dummyapi.io/data/v1/user/${params.id}`
  );
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`https://dummyapi.io/data/v1/user/`);
  const users = await response.json();

  const paths = users.map((user) => ({
    params: { id: user.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default function Users({ user }) {
  return (
    <Layout>
      <Hero {...user} id={post.id} />
    </Layout>
  );
}
