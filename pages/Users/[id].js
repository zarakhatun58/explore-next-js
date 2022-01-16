import React from 'react'

const user = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <div>
      <h3> user:{name}</h3>
      <h3> email:{email}</h3>
      <h3> phone:{phone}</h3>
    </div>
  )
}

export default user

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  )
  const user = await res.json()

  // Pass post data to the page via props
  return { props: { user } }
}
