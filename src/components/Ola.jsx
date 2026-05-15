import minhaimagem from "../assets/minhaimagem.png"
import react from "../assets/react.png"
import html from "../assets/html5.png"
import css from "../assets/css3.png"
import js from "../assets/js.png"
import git from "../assets/git.png"
import styles from "./styles.module.css"

export default function Ola() {
    return(
        <div className={styles.oladiv1}>
            <img className={styles.olaimg} src={minhaimagem} alt="minhaimagem.jpg" />
            <div>
                <h2 className={styles.olah21}>Oi, eu sou um DEV</h2>
                <h2 className={styles.olah2}>Fullstackdev DEV</h2>
                <div className={styles.oladiv3}>
                    <img className={styles.olaimgpequena} src={html} alt="HTML" />
                    <img className={styles.olaimgpequena} src={css} alt="CSS" />
                    <img className={styles.olaimgpequena} src={js} alt="JavaScript" />
                    <img className={styles.olaimgpequena} src={react} alt="React" />
                    <img className={styles.olaimgpequena} src={git} alt="Git" />                    
                </div>
            </div>
        </div>
    )
}