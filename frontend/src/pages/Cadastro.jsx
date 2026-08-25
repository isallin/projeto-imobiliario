import { HeaderCadastro } from "../componentes/HeaderCadastro"
import { FormularioCadastro } from "../componentes/FormularioCadastro"

export function Cadastro(){
    return(
        <div>
            <main>
                <section>
                    <HeaderCadastro/>
                    <FormularioCadastro/>
                </section>
            </main>
        </div>
    )
}