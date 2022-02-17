// import React from 'react'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import styles from "../../styles/index.module.sass";
import Head from "next/head";

import txt from '../../public/markdown/hello.md'


class Terms extends Component {
    constructor(props) {
        super(props)

        this.state = { terms: null }
    }

    // eslint-disable-next-line react/no-deprecated
    componentWillMount() {
        fetch(txt).then((response) => response.text()).then((text) => {
            this.setState({ terms: text })
        })
    }

    // render() {
    //     return (
    //         <div className="content">
    //             <ReactMarkdown source={this.state.terms} />
    //         </div>
    //     )
    // }
}

export default function md() {

    const markdown = `hihi`
    return (
        <main className={styles.main}>
            <Head>
                <title>Siarune</title>
                <meta name={styles.Description} content="My stupid little site"/>
                {/* <link rel="icon" href="/hentie_solid.png" /> */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>

            {/* eslint-disable-next-line react/no-children-prop */}
            <ReactMarkdown  children={markdown}/>
            {/* eslint-disable-next-line react/no-children-prop */}
            <ReactMarkdown children={this.state.terms} />

        </main>
    )
}