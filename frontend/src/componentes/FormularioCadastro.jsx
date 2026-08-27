import styles from "../style.module.css"
import { useState } from "react"
import { inserirImovel } from "../services/imovelApi"

export function FormularioCadastro() {
    const TIPO_IMOVEL = ["Casa", "Apartamento", "Terreno", "Imóvel Comercial"]
    const TIPO_FINALIDADE = ["Venda", "Aluguel"]
    const [mensagem, setMensagem] = useState("")
    const [enviando, setEnviando] = useState(false)

    function CamposSelect(props) {
        return (
            <div className={styles.formgroup}>
                <label>{props.titulo}</label>
                <select id={props.id} name={props.id} required>
                    <option value="">Selecione</option>
                    {props.options.map(imovel =>
                        <option
                            value={imovel.toLowerCase()}
                            key={imovel}>
                            {imovel}
                        </option>)}
                </select>
            </div>
        )
    }

    function CamposTexto(props) {
        return (
            <div className={styles.formgroup}>
                <label>{props.titulo}</label>
                <input
                    type="text"
                    id={props.id}
                    name={props.id}
                    placeholder={props.textoExemplo}
                    required
                ></input>
            </div>
        )
    }

    function CamposNumero(props) {
        return (
            <div className={styles.formgroup}>
                <label>{props.titulo}</label>
                <input
                    type="number"
                    id={props.id}
                    name={props.id}
                    placeholder={props.textoExemplo}
                    min={props.minimo}
                    step={props.step}
                    required
                ></input>
            </div>
        )
    }

    async function cadastrar(event) {
        event.preventDefault()
        setMensagem("")
        setEnviando(true)

        const formData = new FormData(event.currentTarget)
        const imovel = {
            tipo: formData.get("tipoimovel"),
            finalidade: formData.get("finalidade"),
            endereco: formData.get("endereco"),
            bairro: formData.get("bairro"),
            cidade: formData.get("cidade"),
            area: Number(formData.get("area")),
            valor: Number(formData.get("valor")),
        }

        try {
            await inserirImovel(imovel)
            event.currentTarget.reset()
            setMensagem("Imóvel cadastrado com sucesso.")
        } catch (error) {
            setMensagem(error.message)
        } finally {
            setEnviando(false)
        }
    }

    return (
        <form onSubmit={cadastrar}>
            <div className={styles.formgrid}>
                <CamposSelect
                    titulo={"Tipo de imóvel"}
                    id={"tipoimovel"}
                    options={TIPO_IMOVEL} />
                <CamposSelect
                    titulo={"Finalidade"}
                    id={"finalidade"}
                    options={TIPO_FINALIDADE} />
                <CamposTexto
                    titulo={"Endereço"}
                    id={"endereco"}
                    textoExemplo={"Rua, Número, Avenida..."} />
                <CamposTexto
                    titulo={"Cidade"}
                    id={"cidade"}
                    textoExemplo={"Digite a cidade"} />
                <CamposNumero
                    titulo={"Área (m²)"}
                    id={"area"}
                    textoExemplo={"Ex: 120"}
                    minimo={"1"} />
                <CamposNumero
                    titulo={"Valor (R$)"}
                    id={"valor"}
                    textoExemplo={"Ex: 450000"}
                    minimo={"0"}
                    step={"0.01"} />
            </div>
        </form>
    )
}