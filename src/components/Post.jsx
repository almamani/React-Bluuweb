import { useLoaderData } from "react-router";

const Post = () => {
  const { post } = useLoaderData();

  return (
    <div className="contenedor contenedor__centrado">
      <h1>Detalle Blog</h1>
      <br />
      <h2 className="color_sky_blue">
        {post.id} - {post.title}
      </h2>
      <h3>{post.body}</h3>
    </div>
  );
};

export default Post;

import React from "react";

export const loaderPost = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!res.ok)
    throw {
      status: res.status,
      statusText: `--- No encontramos el post: ${params.id} ---`,
    };
  const post = await res.json();
  return { post };
};
