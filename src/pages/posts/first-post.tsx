import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
// import Script from "next/script";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <div>
        <h2 className='text-2xl uppercase'>first-posts</h2>
        <p className='mt-3'>
          <Link
            href='/'
            className='w-fit block px-4 bg-zinc-200 text-zinc-800 py-3'
          >
            Back To Home
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default FirstPost;
