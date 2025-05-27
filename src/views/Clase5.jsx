import { Link, useLoaderData } from "react-router-dom";

const Clase5 = () => {
  const { posts } = useLoaderData();

  return (
    <div className="contenedor contenedor__centrado">
      <h1 className="space_mini_inferior">Tutorial React</h1>
      <h2 className="color_sky_blue">Clase 5 - React Router - Posts</h2>
      <br />
      <br />
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <Link to={`/clase5/${post.id}`}>
                {post.id} - {post.title}
              </Link>
            </li>
          ))
        ) : (
          <li>No Blogs Found</li>
        )}
      </ul>
    </div>
  );
};

export default Clase5;

export const loaderBlog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok)
    throw {
      status: res.status,
      statusText: `--- No encontramos el post: ${params.id} ---`,
    };

  const posts = await res.json();
  return { posts };
};
