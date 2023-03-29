import getData from "./getData.js";

const { user, posts } = await getData(1);

console.log("user: ", user);
console.log("posts: ", posts);
