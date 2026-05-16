import styles from './styles.module.css'

export default function Cabecalho(){

    return(
        <div className={styles.cabecalhodiv1}>
            <h2 className={styles.cabecalhoh2}>Curriculo</h2>
            <div className={styles.cabecalhodiv2}> 
                <a href='#sobremim' className={styles.cabecalhoa}>Sobre mim</a>
                <a href='#experiencia' className={styles.cabecalhoa}>Experiências</a>
                <a href='#formacao' className={styles.cabecalhoa}>Formação</a>
                <a href='#contato' className={styles.cabecalhoa}>contato</a>
            </div>
        </div>
    )
}