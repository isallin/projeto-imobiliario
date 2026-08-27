import styles from "../style.module.css"

export function SubmitCadastro() {
    function BotaoCadastro(props) {
        return (
            <button type={props.tipo} className={props.estilo}>{props.titulo}</button>
        )
    }
    return(
        <div className={styles.formactions}>
            <BotaoCadastro tipo={"reset"} estilo={"btnsecondary"} titulo={"Limpar"}/>
            <BotaoCadastro tipo={"submit"} estilo={"btnprimary"} titulo={"Cadastrar imóvel"}/>
        </div>
    )
}