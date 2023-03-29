import { useEffect, useState } from "react";
import "./App.css";
import { getData } from "./getData";

function App() {
  getData(1).then((data) => {
    console.log("user: ", data.user);
    console.log("posts: ", data.posts);
  });
}

export default App;
