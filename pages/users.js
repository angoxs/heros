export default function UserList() {
  return <h1>List of users</h1>;
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  const data = await response.json();
  console.log(data);
}
