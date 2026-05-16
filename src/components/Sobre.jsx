import styles from './styles.module.css'
import minhaimagemDARK from "../assets/minhaimagemDARK.png"

export default function Sobre() {

    return( 
            
            <div className={styles.sobrediv1} id="sobremim">
                <h2 className={styles.tituloh2}>Sobre mim</h2>
                <div className={styles.sobrediv2}>
                    <div className={styles.sobrediv3}>
                        <img className={styles.sobreimg} src={minhaimagemDARK} alt="minhaimagemDARK" />
                        <div className={styles.sobrediv4}>
                            <p className={styles.sobrep}>Meu nome é William Campos, e etenho 18 anos.</p>
                            <p className={styles.sobrep}>Sou estudante e desenvolvedor em formacao, atualmente estudo React, JavaScript, HTML e CSS.</p>
                            <p className={styles.sobrep}>Estou sempre aprendendo novas tecnologias e desenvolvendo projetos para evoluir minhas habilidades como desenvolvedor web.</p>
                        </div>
                    </div>
                </div>
            
            </div>
    )
}