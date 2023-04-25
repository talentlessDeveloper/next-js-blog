import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import Date from "@/components/date";

type PostData = {
  id: string;
  date: string;
  [key: string]: any;
  // Other properties of the post object
};

type HomeProps = {
  allPostsData: PostData[];
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

function Home({ allPostsData }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Na we o, Na we dey here dey run things!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default Home;

// export const getStaticProps:GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();

//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// export default function Home({allPostsData}: InferGetStaticPropsType<typeof getStaticProps>) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>Na we o, Na we dey here dey run things!</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{" "}
//           <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
//         </p>
//       </section>
//     </Layout>
//   );
// }

// const Home: NextPage<HomeProps> = ({ allPostsData }) => {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>Na we o, Na we dey here dey run things!</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{" "}
//           <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
//         </p>
//       </section>
//     </Layout>
//   );
// };
