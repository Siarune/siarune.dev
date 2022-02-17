import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/index.module.sass'

export default function Home() {
  return (

    <main className={styles.main}>
      <Head>
        <title>Siarune</title>
        <meta name={styles.Description} content="My stupid little site" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>


      <nav className={styles.navbar}>
        <ul className={styles.navbarNav}>

          <li className={styles.intro}>
            <div className={styles.tWrap}>
              <Image src="/hentieSolid.png" alt="chikin" className={styles.thumbnail} height="32" width="32" layout="fixed" />
            </div>
            <h2 className={styles.me}>Siarune<span className={styles.span}>.dev</span></h2>
          </li>

        </ul>
      </nav>



      <div className={styles.grid}>

        <div className={styles.card}>
          <h2>
            About Me
          </h2>
          <p>
            Hey, Sia here. <br/>
            Nice place, huh? It&apos;s taken quite a few redesigns, and this certainly won&apos;t be the last. :3
            <br/>
            I&apos;m just a computer science student with a little too much free time. Why don&apos;t you check out the place while you&apos;re here?
          </p>

          {/* <div className={styles.linkGrid}> */}
          <h4 className={styles.linksTitle}>Links</h4>
          <ul className={styles.linkItems}>

            <li className={styles.link1}><a href="https://github.com/Siarune" target="_blank" rel="noopener noreferrer">
              Github
            </a></li>

            <li className={styles.link2}><a href="https://gitlab.com/Siarune" target="_blank" rel="noopener noreferrer">
              Gitlab
            </a></li>

            <li className={styles.link3}><a href="https://siarune.me/" target="_blank" rel="noopener noreferrer">
              Old Site
            </a></li>

            <li className={styles.link4}><a href="https://steamcommunity.com/profiles/76561199007571171/" target="_blank" rel="noopener noreferrer">
              Steam
            </a></li>

          </ul>

        </div>

        <div className={styles.card}>
          <h2>
            <Link href="projects/sauce"><a>
              This Website
            </a></Link>
          </h2>
          <h4>
            A How and Why
          </h4>
        </div>

        <div className={styles.card}>
          <h2>
            <Link href="projects/poetry"><a>
              Poetry is for Nerds
            </a></Link>
          </h2>
          <h4>
            ...Wait, I&apos;m a nerd
          </h4>
        </div>
        {/* Wait, I'm a nerd */}

        <div className={styles.card}>
          <h2>
            <Link href="projects/maboibart"><a>
              Bartholomew
            </a></Link>
          </h2>
          <h4>
            He hates everything and it&apos;s great
          </h4>
        </div>



      </div>

      {/* <hr></hr> */}
      <footer className={styles.footer}>
        <h3>
          {/* And more to come! When? I have no idea! */}
          Area Under Construction
        </h3>

      </footer>
    </main>
  )
}