import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/poetry.module.scss'

export default function Poetry() {
    return (
        <div className={styles.container}>

            <Head>
                <title>Some bad poetry</title>
                <meta name={styles.Description} content="My weird little site." />
                <link rel="icon" href="/hentie.png" />
            </Head>

            <div className={styles.bannerWrapper}>
                <h1 className={styles.banner}>
                    Some Very (very) Bad Poetry
                </h1>
            </div>

            <div className={styles.poems}>

                <div className={styles.collapsibleWrapper} >
                    <details>
                        <summary className={styles.collapsibleTitle}>Sad Doot</summary>
                        <div className={styles.content}>

                            <p className={styles.collapsibleText}>
                                Spooky season has ended <br></br>
                                not nearly as intended. <br></br>
                                For Christmas creeps ever closer. <br></br>
                                The candy and pumpkins <br></br>
                                replaced with toy munchkins- <br></br>
                                Someone get me a bulldozer. <br></br> <br></br>
                                What can I do? <br></br>
                                What can I say? <br></br>
                                Nothing can really <br></br>
                                express my dismay. <br></br> <br></br>
                                Because spooky scary skeletons <br></br>
                                that sent shivers down my spine <br></br>
                                they&aposre shrieking skulls <br></br>
                                won&apost shock my skull <br></br>
                                or seal my doom tonight. <br></br> <br></br>
                                But the spook lives on <br></br>
                                every day of the year. <br></br>
                                In all of my shrieks, <br></br>
                                and all of my tears. <br></br> <br></br>
                                So I give my salute <br></br>
                                with a sad little doot <br></br>
                                and wait for the days <br></br>
                                of spooky scary skeletons.
                            </p>

                            <div className={styles.littleInfo}>
                                <p>
                                    November 9th, 2021 -- 3:16 P.M.
                                </p>
                            </div>

                        </div>
                    </details>
                </div>

                <div className={styles.collapsibleWrapper} >
                    <details>
                        <summary className={styles.collapsibleTitle}>Bugs</summary>
                        <p className={styles.collapsibleText}>
                            100 bugs in the code I just wrote <br></br>
                            100 bugs in the code <br></br>
                            Take one down <br></br>
                            Patch in around <br></br>
                            300 bugs in the code I just wrote <br></br>
                            800 bugs in the code I just wrote <br></br>
                            2,000 bugs in the code I just wrote <br></br>
                            Your PC ran into a problem and needs to restart
                        </p>
                        <div className={styles.littleInfo}>
                            <p>
                                April 2nd, 2021 -- 6:44 A.M.
                            </p>
                        </div>
                    </details>
                </div>

                <div className={styles.collapsibleWrapper} >
                    <details>
                        <summary className={styles.collapsibleTitle}>Law Abiding Citizen</summary>
                        <p className={styles.collapsibleText}>
                            If you are what you eat, <br></br>
                            then I’ll be just fine. <br></br>
                            My logic can’t be beat. <br></br>
                            I’m a law abiding citizen.
                        </p>
                        <div className={styles.littleInfo}>
                            <p>
                                March 10th, 2021 -- 6:43 P.M.
                            </p>
                        </div>
                    </details>
                </div>

                <div className={styles.collapsibleWrapper} >
                    <details>
                        <summary className={styles.collapsibleTitle}>O.D.</summary>
                        <p className={styles.collapsibleText}>
                            Jack and Jill <br></br>
                            went up the hill <br></br>
                            To smoke some <br></br>
                            crack cocaine. <br></br><br></br>
                            Jack tried to boast <br></br>
                            and upped the dose, <br></br>
                            And Jill took all the blame.
                        </p>
                        <div className={styles.littleInfo}>
                            <p>
                                January 14th, 2021 12:51 A.M.
                            </p>
                        </div>
                    </details>
                </div>

                <div className={styles.collapsibleWrapper} >
                    <details>
                        <summary className={styles.collapsibleTitle}>To, Sleep</summary>
                        <p className={styles.collapsibleText}>
                            Why have you forsaken me? <br></br> <br></br>
                            I lay here tired <br></br>
                            In worry mired <br></br>
                            Trying to fall asleep <br></br> <br></br>
                            But my family&aposs loud as fuck <br></br>
                            And cringy memories are stuck <br></br>
                            So I guess I&aposll count some sheep
                        </p>
                        <div className={styles.littleInfo}>
                            <p>
                                February 9th, 2021 -- 11:18 A.M.
                            </p>
                        </div>
                    </details>
                </div>

            </div>

        </div>
    )
//     class Accordion {
//         // The default constructor for each accordion
//         constructor(el) {
//             // Store the <details> element
//             this.el = el;
//             // Store the <summary> element
//             this.summary = el.querySelector('summary');
//             // Store the <div class="content"> element
//             this.content = el.querySelector('.content');

//             // Store the animation object (so we can cancel it, if needed)
//             this.animation = null;
//             // Store if the element is closing
//             this.isClosing = false;
//             // Store if the element is expanding
//             this.isExpanding = false;
//             // Detect user clicks on the summary element
//             this.summary.addEventListener('click', (e) => this.onClick(e));
//         }

//         // Function called when user clicks on the summary
//         onClick(e) {
//             // Stop default behaviour from the browser
//             e.preventDefault();
//             // Add an overflow on the <details> to avoid content overflowing
//             this.el.style.overflow = 'hidden';
//             // Check if the element is being closed or is already closed
//             if (this.isClosing || !this.el.open) {
//                 this.open();
//                 // Check if the element is being openned or is already open
//             } else if (this.isExpanding || this.el.open) {
//                 this.shrink();
//             }
//         }

//         // Function called to close the content with an animation
//         shrink() {
//             // Set the element as "being closed"
//             this.isClosing = true;

//             // Store the current height of the element
//             const startHeight = `${this.el.offsetHeight}px`;
//             // Calculate the height of the summary
//             const endHeight = `${this.summary.offsetHeight}px`;

//             // If there is already an animation running
//             if (this.animation) {
//                 // Cancel the current animation
//                 this.animation.cancel();
//             }

//             // Start a WAAPI animation
//             this.animation = this.el.animate({
//                 // Set the keyframes from the startHeight to endHeight
//                 height: [startHeight, endHeight]
//             }, {
//                 // If the duration is too slow or fast, you can change it here
//                 duration: 400,
//                 // You can also change the ease of the animation
//                 easing: 'ease-out'
//             });

//             // When the animation is complete, call onAnimationFinish()
//             this.animation.onfinish = () => this.onAnimationFinish(false);
//             // If the animation is cancelled, isClosing variable is set to false
//             this.animation.oncancel = () => this.isClosing = false;
//         }

//         // Function called to open the element after click
//         open() {
//             // Apply a fixed height on the element
//             this.el.style.height = `${this.el.offsetHeight}px`;
//             // Force the [open] attribute on the details element
//             this.el.open = true;
//             // Wait for the next frame to call the expand function
//             window.requestAnimationFrame(() => this.expand());
//         }
//         // Function called to expand the content with an animation
//         expand() {
//             // Set the element as "being expanding"
//             this.isExpanding = true;
//             // Get the current fixed height of the element
//             const startHeight = `${this.el.offsetHeight}px`;
//             // Calculate the open height of the element (summary height + content height)
//             const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

//             // If there is already an animation running
//             if (this.animation) {
//                 // Cancel the current animation
//                 this.animation.cancel();
//             }

//             // Start a WAAPI animation
//             this.animation = this.el.animate({
//                 // Set the keyframes from the startHeight to endHeight
//                 height: [startHeight, endHeight]
//             }, {
//                 // If the duration is too slow of fast, you can change it here
//                 duration: 400,
//                 // You can also change the ease of the animation
//                 easing: 'ease-out'
//             });
//             // When the animation is complete, call onAnimationFinish()
//             this.animation.onfinish = () => this.onAnimationFinish(true);
//             // If the animation is cancelled, isExpanding variable is set to false
//             this.animation.oncancel = () => this.isExpanding = false;
//         }
//         // Callback when the shrink or expand animations are done
//         onAnimationFinish(open) {
//             // Set the open attribute based on the parameter
//             this.el.open = open;
//             // Clear the stored animation
//             this.animation = null;
//             // Reset isClosing & isExpanding
//             this.isClosing = false;
//             this.isExpanding = false;
//             // Remove the overflow hidden and the fixed height
//             this.el.style.height = this.el.style.overflow = '';
//         }
    
        
//     }
    
//     document.querySelectorAll('details').forEach((el) => {
//       new Accordion(el);
//   });

    
}