export async function loadUsers() {
  const response = await fetch("https://dummyapi.io/data/v1/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "app-id": "621b899337e9039ef45290cd",
    },
  });

  const data = await response.json();

  return data;
}
