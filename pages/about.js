import Head from "next/head";

export default function About({ art }) {
  //console.log(art.data.post.title);

  const { id, slug, title } = art.data.post;

  //console.log("AS", id);

  return (
    <>
      <Head>
        <title>About Calvin Crane</title>
      </Head>
      <div className='font-sans'>{id}</div>
      <div className='font-sans'>{slug}</div>
      <div className='font-sans'>{title}</div>
    </>
  );
}

export const getServerSideProps = async () => {
  const _REQ = `
  {
    post(id: "cG9zdDoxMDQ=") {
      id
      slug
      title
    }
  }
`;

  const res = await fetch(process.env.WORDPRESS_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: _REQ,
    }),
  });

  const art = await res.json();

  return {
    props: {
      art,
    },
  };
};
