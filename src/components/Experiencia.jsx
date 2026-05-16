import styles from './styles.module.css'

export default function Experiencia(){

    return(
        <div className={styles.experdiv1} id="experiencia">

            <h2 className={styles.tituloh2exper}>Experiências</h2>

            <div className={styles.experdiv2}>
                <p className={styles.experp1}>jun 2024-jun 2024</p>
                <div className={styles.experdiv3}>
                    <h4 className={styles.experh4}>Pedreiro</h4>
                    <p className={styles.experp2}> Trabalhei como pedreiro por uma semana </p>
                </div>            
            </div>

            <div className={styles.experdiv2}>
                <p className={styles.experp1}>mai 2023-dez 2025</p>
                <div className={styles.experdiv3}>
                    <h4 className={styles.experh4}>Eco Game</h4>
                    <p className={styles.experp2}>Um Projeto escolar onde tinhamos que resolver um problema, eu e meu grupo resolvemos criar um jogo ecologico com objetivo de conscientizar. Exigio muito trabalho em equipe e cooperação.</p>
                </div>            
            </div>

        </div>
    )
}