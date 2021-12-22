import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Webdev Newz</title>
        <meta name='keywords' content='web development' />
      </Head>
      
      <ArticleList articles={articles} />

    </div>
  )
}

export const getStaticProps= async()=>{
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();

  return {
    props:{
      articles
    }
  }
}
