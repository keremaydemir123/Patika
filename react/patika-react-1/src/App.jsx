import { getData } from "./getData";

function App() {
  getData(1).then((data) => {
    console.log("user: ", data.user);
    console.log("posts: ", data.posts);
  });

  return (
    <div style={{ fontSize: "3rem" }}>
      Check Console for <strong>User</strong> and <strong>Posts</strong> Data
    </div>
  );
}

export default App;
