import Head from "next/head";

export default function About({ art }) {
  //console.log(art.data.post.title);

  const { id, slug, title } = art.data.post;

  console.log(id, slug, title);

  return (
    <>
      <Head>
        <title>About Calvin Crane</title>
      </Head>
      <div className='font-sans'>title</div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(process.env.WORDPRESS_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    {
      post(id: "cG9zdDoxMDQ=") {
        id
        slug
        title
      }
    }
  `,
    }),
  });

  //const log = await res;

  const art = await res.json();

  return {
    props: {
      art,
    },
  };
};

/*
 */
