import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta charset='UTF-8' />
        <meta name='description' content='Free Web tutorials' />
        <meta name='keywords' content='HTML, CSS, JavaScript' />
        <meta name='author' content='John Doe' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <h2 className='font-chango text-4xl text-center p-5'>A Next JS Build</h2>
      <div className='md:flex justify-between p-2 bg-red-100'>
        <div className='md:w-4/12 ml-2 md:mb-0 mb-8'>
          <h3 className='font-bold mb-2'>Next JS</h3>
          <p>I am discovering Next JS as I build.</p>
        </div>
        <div className='md:w-4/12 ml-2 md:mb-0 mb-8'>
          <Image
            src='/spotted-drum.jpg'
            alt='spotted-drum-antigua'
            width='302'
            height='302'
            class='rounded shadow-xl'
          />
        </div>

        <div className='md:w-4/12 ml-2 md:mb-0 mb-8'>
          <h3 className='font-bold mb-2'>Tailwind CSS</h3>
          <p>I am using tailwind too.</p>
        </div>
      </div>
      <div>
        <h1 className='bg-black text-white'>Home Page</h1>
      </div>
    </>
  );
}
