const BASE_URL = "https://dummyapi.io/data/v1";
const APP_ID = "621b899337e9039ef45290cd";

export async function loadUsers() {
  const response = await fetch(`${BASE_URL}/user?limit=10`, {
    headers: {
      "app-id": APP_ID,
    },
  });

  const { data } = await response.json();

  return data;
}
