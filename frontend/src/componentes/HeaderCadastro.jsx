import styles from "../style.module.css"

export function HeaderCadastro() {
    return(
        <div className={styles.formheader}>
            <h1>Cadastro de Imóvel</h1>
            <p>Preencha os dados abaixo para cadastrar um imóvel novo</p>
        </div>
    )
}