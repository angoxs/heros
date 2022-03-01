const endpoint = "https://dummyapi.io/data/v1/user";
const appId = "621b899337e9039ef45290cd";

export async function loadUsers() {
  const response = await fetch(`${endpoint}?limit=10`, {
    headers: {
      "app-id": appId,
    },
  });

  const { data } = await response.json();

  return data;
}

export async function getAllUserIds({ id }) {
  const response = await fetch(`${endpoint}/${id}`, {
    headers: {
      "app-id": appId,
    },
  });

  const data = await response.json();

  return data;
}

export async function getAllUserPost({ id }) {
  const response = await fetch(`${endpoint}/${id}/post?limit=10`, {
    headers: {
      "app-id": appId,
    },
  });

  const data = await response.json();

  return data;
}
