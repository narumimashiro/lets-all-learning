import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {/*
        practice/jsxをURLに追加して、ブラウザに打ち込むことで新しいページが表示されたかと思いますが、
        毎回手動で入力するのは手間かと思います。

        そこで、HTMLの勉強でも出てきたかと思います<a>タグを用いて、ページの遷移をしていきましょう！

        practiceフォルダにpage1.tsxとpage2.tsxファイルを追加しました。
        以下にpage1へのページ遷移の例を記載しますので、page2への遷移リンクを作成してみてください
        
        +αなページ遷移についてをdocフォルダに置いておきました
        気になりましたら、ご確認ください。(NextJsは<a>タグではない？！)
        */}
        <div className={styles.header}>
          <a href='/practice/page1'>Page1</a>
          {/*
          page2へのページリンク作成をしてみましょう
          */}
        </div>
        <div className={styles.main}>
          <div className={styles.side1}>Side1</div>
          <div className={styles.contents}>Contents</div>
          <div className={styles.side2}>Side2</div>
        </div>
        <div className={styles.footer}>Footer</div>
      </div>
    </>
  )
}
