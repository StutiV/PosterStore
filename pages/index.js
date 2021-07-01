import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Neat Poster Shop
        </h1>

        <p className={styles.description}>
          The sleekest posters on the web!
        </p>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <a href="https://nextjs.org/docs" >
              <img src="images/poster-helvetica.jpg" alt="Helvetica Typography Poster" />
              <h2>Helvetica Typography</h2>
              <p>This is a dummy statement that will be replaced later.</p>
            </a>
          </li>

          <li className={styles.card}>
            <a href="https://nextjs.org/learn">
              <img src="images/poster-uno.jpg" alt="Uno Poster" />
              <h2>Uno Theme</h2>
              <p>This is a dummy statement that will be replaced later.</p>
            </a>
          </li>

          <li className={styles.card}>
            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
            >
              <img src="images/poster-online.jpg" alt="Online-Offline Poster" />
              <h2>Online - Offline</h2>
              <p>This is a dummy statement that will be replaced later.</p>
            </a>
          </li>

          <li className={styles.card}>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            >
              <img src="images/poster-do.jpg" alt="Do Something Poster" />
              <h2>Do Something</h2>
              <p>This is a dummy statement that will be replaced later.</p>
            </a>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
