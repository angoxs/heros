import Layout from "../../components/Layout";
import Post from "../../components/Post";
import { Hero } from "../../screens/Profile";

const endpoint = "https://dummyapi.io/data/v1/user";
const appId = "621b899337e9039ef45290cd";

export async function getServerSideProps({ query }) {
  const { id } = query;

  const response = await fetch(`${endpoint}/${id}`, {
    headers: {
      "app-id": appId,
    },
  });

  const postResponse = await fetch(`${endpoint}/${id}/post?limit=10`, {
    headers: {
      "app-id": appId,
    },
  });

  const data = await response.json();
  const posts = await postResponse.json();

  return {
    props: {
      data,
      posts: posts.data,
    },
  };
}

export default function Users({ data, posts }) {
  console.log(data);
  console.log(posts);

  return (
    <Layout>
      <Hero {...data} posts={posts} id={data.id} />
      {/* {JSON.stringify(posts)} */}
    </Layout>
  );
}
