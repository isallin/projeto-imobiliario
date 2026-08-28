import { HeaderCadastro } from "../componentes/HeaderCadastro"
import { FormularioCadastro } from "../componentes/FormularioCadastro"
import styles from "../style.module.css"

export function Cadastro() {
    return (
        <main className={styles.container}>
            <section className={styles.formcard}>
                <HeaderCadastro />
                <FormularioCadastro />
            </section>
        </main>
    )
}