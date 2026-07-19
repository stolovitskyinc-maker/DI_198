import React from "react";
import posts from "./posts.json";

function PostList() {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;