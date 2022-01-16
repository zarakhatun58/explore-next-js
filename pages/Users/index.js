import React from "react";
import Link from "next/link";

const index = ({ users }) => {
  //set state all
  // useEffect
  return (
    <div>
      <h3> This is index pages:{users.length} </h3>

      {users.map((user) => (
        <p key={user.id}>
          {" "}
          {user.name}{" "}
          <Link href={`users/${user.id}`}>
            <a>explore</a>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users },
  };
}
