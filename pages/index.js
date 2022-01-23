import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/index.module.scss'

export default function Home() {
  return (

    <main className={styles.main}>
      <Head>
        <title>Siarune</title>
        <meta name={styles.Description} content="My stupid little site" />
        <link rel="icon" href="/thumbnails/recolor.png" />
      </Head>



      <nav className={styles.navbar}>
        <ul className={styles.navbarNav}>

          <li className={styles.navItem, styles.intro}>
            <Image src="/thumbnails/recolor.png" alt="chikin" className="styles.thumbnail" width="100" height="100" layout="responsive" ></Image>
            {/* <img className={styles.thumbnail} src="/thumbnails/recolor.png"></img> */}
            {/* <Image src="/thumbnails/dino.jpg" alt="dino" className={styles.cover} width="100" height="100" layout="responsive" /> */}
            <h2>Siarune</h2>
          </li>

          <li className={styles.navItem}>
            <h2>
              Home
            </h2>
          </li>

          {/* <!-- Dropdown of my other links --> */}
          <li className={styles.navItem, styles.hasDropdown}>
            <h2>
              <a href="#" onClick="reset()">Links</a>
            </h2>
            <ul className={styles.dropdown}>
              <li className="dropdown-item">
                <a href="https://github.com/Siarune/">Github</a>
              </li>

              <li className={styles.dropdownItem}>
                <a href="https://siarune.tumblr.com/">Tumblr</a>
              </li>

              <li className={styles.dropdownItem, styles.tooltip}>
                <a href="#" >Discord</a>
                <span className={styles.tooltiptext}>Copy ID?</span>
              </li>


            </ul>
          </li>
        </ul>
      </nav>


      <div className={styles.shiny}>

        <ul>
          <li>Welcome to the Idiot Corner!</li>
        </ul>

      </div>


      <div className={styles.grid}>


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

        <div className={styles.card}>
          <h2>
            About Me
          </h2>
          <p>
            Hey, Sia here. Nice place, huh? It&apos;s taken quite a few redesigns, and this certainly won&apos;t be the last. :3
          </p>
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