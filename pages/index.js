import Head from "next/head";
import NextLink from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lakers Legends</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Lakers Legends</h1>

        <p className={styles.description}>
          Click <NextLink href="/lakers-legends">here</NextLink> to see the live
          demo!
        </p>

        <p>
          Built using <a href="https://www.slicemachine.dev/">SliceMachine</a>{" "}
          from <a href="https://prismic.io">Prismic.io</a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
