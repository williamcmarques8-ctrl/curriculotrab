import styles from './styles.module.css'
import logo from "../assets/logo.png"
import montelogo from "../assets/montelogo.png"

export default function Formacao() {

    return(
        <div className={styles.formacaodiv1}>
            <h2 className={styles.tituloh2}>Formação</h2>
            <div className={styles.formacaodiv2}>

                <div className={styles.formacaodiv3}>
                    <div className={styles.formacaodiv41}>
                        <img className={styles.formacaoimg} src={logo} alt="logoIF" />
                        <h3 className={styles.formacaoh3}>TECNICO EM INFORMATICA</h3>
                    </div>

                    <div className={styles.formacaodiv42}>
                        <h4 className={styles.formacaoh4}>IFSP</h4>
                        <p className={styles.formacaop}>3340 h</p>
                    </div>
                </div>

                <div className={styles.formacaodiv3}>
                    <div className={styles.formacaodiv41}>
                        <img className={styles.formacaoimg} src={montelogo} alt="logoIF" />
                        <h3 className={styles.formacaoh3}>CURSO DE INFORMATICA </h3>
                    </div>

                    <div className={styles.formacaodiv42}>
                        <h4 className={styles.formacaoh4}>MICROCAMP</h4>
                        <p className={styles.formacaop}>180 h</p>
                    </div>
                </div>

            </div>
        </div>
    )
}