import Layout from "../../components/Layout";
import { getAllUserIds, loadUsers } from "../../lib/fetch-post";
import { Hero } from "../../screens/Profile";

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

const endpoint = "https://dummyapi.io/data/v1/user/";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const response = await fetch(`${endpoint}/${id}`, {
    headers: {
      "app-id": "621b899337e9039ef45290cd",
    },
  });
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default function Users({ data }) {
  console.log(data);

  return (
    <Layout>
      <Hero {...data} id={data.id} />
    </Layout>
  );
}
