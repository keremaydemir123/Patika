import axios from "axios";

export default async function getData(id) {
  if (typeof id !== "number") {
    throw new Error("id must be a number");
  }

  const { data: user } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const { data: posts } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  return { user, posts };
}
