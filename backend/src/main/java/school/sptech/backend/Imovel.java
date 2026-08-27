package school.sptech.backend;

public class Imovel {
    private Integer id;
    private String TipoImovel;
    private String Finalidade;
    private String Endereco;
    private String Cidade;
    private Integer Area;
    private Double Valor;

    public Imovel(Integer id, String tipoImovel, String finalidade, String endereco, String cidade, Integer area, Double valor) {
        this.id = id;
        TipoImovel = tipoImovel;
        Finalidade = finalidade;
        Endereco = endereco;
        Cidade = cidade;
        Area = area;
        Valor = valor;
    }

    public Imovel() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTipoImovel() {
        return TipoImovel;
    }

    public void setTipoImovel(String tipoImovel) {
        TipoImovel = tipoImovel;
    }

    public String getFinalidade() {
        return Finalidade;
    }

    public void setFinalidade(String finalidade) {
        Finalidade = finalidade;
    }

    public String getEndereco() {
        return Endereco;
    }

    public void setEndereco(String endereco) {
        Endereco = endereco;
    }

    public String getCidade() {
        return Cidade;
    }

    public void setCidade(String cidade) {
        Cidade = cidade;
    }

    public Integer getArea() {
        return Area;
    }

    public void setArea(Integer area) {
        Area = area;
    }

    public Double getValor() {
        return Valor;
    }

    public void setValor(Double valor) {
        Valor = valor;
    }
}
