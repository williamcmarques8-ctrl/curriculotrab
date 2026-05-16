import styles from './styles.module.css'
import linkedinlogo from "../assets/linkedinlogo.png"
import instagram from "../assets/instagram.png"
import git from "../assets/gitlogo.png"
import email from "../assets/email.png"
import seta from "../assets/seta.png"



export default function Contato() {

    return(
        <div className={styles.contatodiv1} id="contato">

            <h2 className={styles.tituloh2}>Contato</h2>
            <p className={styles.contatop1}>Entre em contato comigo ou siga minha rede social</p>



            <div className={styles.contatodiv2}>

                <a href='https://www.linkedin.com/in/william-campos-marques-do-nascimento-6b6abb377'>
                    <button className={styles.contatobutton}>
                        <div className={styles.contatodiv3}>
                            <img className={styles.contatoimg} src={linkedinlogo} alt="linkedinlogo" />
                            <p>Linkedin</p>
                        </div>
                        <img className={styles.seta} src={seta} alt="seta" />
                    </button>
                </a>

                <a href='https://www.instagram.com/williamm4rques/'>
                    <button className={styles.contatobutton}>
                        <div className={styles.contatodiv3}>
                            <img className={styles.contatoimg1} src={instagram} alt="instagram" />
                            <p>Instragram</p>
                        </div>
                        <img className={styles.seta} src={seta} alt="seta" />
                    </button>
                </a>
                

            </div> 

            <div className={styles.contatodiv2}>

                <a href='https://github.com/williamcmarques8-ctrl'>
                    <button className={styles.contatobutton}>
                        <div className={styles.contatodiv3}>
                            <img className={styles.contatoimg1} src={git} alt="gitlogo" />
                            <p>GitHub</p>
                        </div>
                        <img className={styles.seta} src={seta} alt="seta" />
                    </button>
                </a>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=william.c.marques8@gmail.com"> 
                    <button className={styles.contatobutton}>
                        <div className={styles.contatodiv3}>
                            <img className={styles.contatoimg1} src={email} alt="" />
                            <p>E-mail</p>
                        </div>
                        <img className={styles.seta} src={seta} alt="seta" />
                    </button>
                </a>
            </div> 

            <p className={styles.contatop}>2026 | Wiliam Campos</p>

        </div>
    )
}