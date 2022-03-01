import Layout from "../../components/Layout";
import { getAllUserIds, getAllUserPost } from "../../lib/fetch-post";
import { Profile } from "../../screens/UserPage";

export async function getServerSideProps({ query }) {
  const { id } = query;

  const data = await getAllUserIds({ id });
  const posts = await getAllUserPost({ id });

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
      {/* {JSON.stringify(posts)} */}
      <Profile {...data} posts={posts} id={data.id} />
    </Layout>
  );
}
