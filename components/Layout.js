import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Pro 13 - Hero</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />

        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Lobster&family=Luckiest+Guy&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Righteous&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
