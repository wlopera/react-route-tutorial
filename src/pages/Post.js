import React from "react";

const Post = (props) => {
  const { match, location } = props;

  console.log(111, props);

  const id = match.params.id;
  const query = new URLSearchParams(location.search);

  return (
    <>
      <h2>Identificador es: {id}</h2>
      <h2>Query-name: {query.get("name")}</h2>
    </>
  );
};

export default Post;
