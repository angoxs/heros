import Layout from "../../components/Layout";
import { getAllUserIds, loadUsers } from "../../lib/fetch-post";
import { Hero } from "../../screens/Profile";
import { getData } from "../api/user";

// export const getStaticPaths = async () => {
//   const paths = await getAllUserIds();

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const response = await fetch(`https://dummyapi.io/data/v1/user/${params.id}`);
//   const userData = await response.json();

//   return {
//     props: {
//       userData,
//     },
//   };
// };

const endpoint = "https://dummyapi.io/data/v1/user";
const appId = "621b899337e9039ef45290cd";

export async function getServerSideProps({ query }) {
  const { id } = query;

  // const [dataRequest, postDataRequest] = await Promise.all([
  //   fetch(`${endpoint}/${id}`, {
  //     headers: {
  //       "app-id": "621b899337e9039ef45290cd",
  //     },
  //   }),
  //   fetch(`${endpoint}/${id}/post`, {
  //     headers: {
  //       "app-id": "621b899337e9039ef45290cd",
  //     },
  //   }),
  // ]);

  // const [data, postData] = await Promise.all([
  //   dataRequest.json(),
  //   postDataRequest.json(),
  // ]);

  const response = await fetch(`${endpoint}/${id}`, {
    headers: {
      "app-id": appId,
    },
  });

  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default function Users({ data, postData }) {
  console.log(data);
  console.log(postData);

  return (
    <Layout>
      <Hero {...data} id={data.id} />
      {/* {postData.map((post) => (
        <div key={post.id}>
          <h1>{post.text}</h1>
        </div>
      ))} */}
    </Layout>
  );
}
