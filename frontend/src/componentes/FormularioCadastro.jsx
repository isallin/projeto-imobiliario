export function FormularioCadastro() {
    const TIPO_IMOVEL = ["Casa", "Apartamento", "Terreno", "Imóvel Comercial"]
    const TIPO_FINALIDADE = ["Venda", "Aluguel"]

    function CamposSelect(props) {
        return (
            <div>
                <label>{props.titulo}</label>
                <select id={props.id}>
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
            <div>
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
            <div>
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

    return (
        <form>
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
                id={"endereço"}
                textoExemplo={"Rua, Avenida..."} />
            <CamposTexto
                titulo={"Número"}
                id={"numero"}
                textoExemplo={"Ex: 250"} />
            <CamposTexto
                titulo={"Bairro"}
                id={"bairro"}
                textoExemplo={"Digite o bairro"} />
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
                titulo={"Quantidade de quartos"}
                id={"quartos"}
                textoExemplo={"Ex: 3"}
                minimo={"0"} />
            <CamposNumero
                titulo={"Quantidade de banheiros"}
                id={"banheiros"}
                textoExemplo={"Ex: 2"}
                minimo={"0"} />
            <CamposNumero
                titulo={"Valor (R$)"}
                id={"valor"}
                textoExemplo={"Ex: 450000"}
                minimo={"0"}
                step={"0.01"}/>
        </form>
    )
}