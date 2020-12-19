import axios from 'axios';
import Head from 'next/head'

import Layout from '../components/Layout';

import styles from '../styles/Home.module.css'

const Home = (props) => {
  return (
    <Layout>
      <Head>
        <title>Price Of BTC</title>
      </Head>
      <main className={styles.main}>
        <h1>
          1 Bitcoin = {props.bpi.USD.code} {props.bpi.USD.rate} = {props.bpi.EUR.code} {props.bpi.EUR.rate}
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </Layout>
  )
};

export async function getServerSideProps(){
  const res = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`);
  return { props: res.data };
};

export default Home;
