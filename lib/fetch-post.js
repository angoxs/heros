export async function loadUsers() {
  const response = await fetch(`${process.env.BASE_URL}/user?limit=10`, {
    headers: {
      "app-id": process.env.APP_ID,
    },
  });

  const { data } = await response.json();

  return data;
}
