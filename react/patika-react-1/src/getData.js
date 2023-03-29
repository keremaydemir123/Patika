import axios from "axios";

export async function getData(user_id) {
  if (typeof user_id != "number") throw new Error("user_id must be a number");

  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  );
  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
  );

  return { user, posts };
}
