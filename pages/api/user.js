export async function getData({ query }) {
  const { id } = query;
  const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
    headers: {
      "app-id": "621b899337e9039ef45290cd",
    },
  });

  const data = response.json();

  return data;
}

export default async function handler(req, res) {
  const data = await getData();
  res.status(200).json(data);
}
