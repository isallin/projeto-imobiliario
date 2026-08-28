package school.sptech.backend;

public class Imovel {
    private Integer id;
    private String tipoimovel;
    private String finalidade;
    private String endereco;
    private String cidade;
    private Integer area;
    private Double valor;

    public Imovel(Integer id, String tipoimovel, String finalidade, String endereco, String cidade, Integer area, Double valor) {
        this.id = id;
        this.tipoimovel = tipoimovel;
        this.finalidade = finalidade;
        this.endereco = endereco;
        this.cidade = cidade;
        this.area = area;
        this.valor = valor;
    }

    public Imovel() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTipoimovel() {
        return tipoimovel;
    }

    public void setTipoimovel(String tipoimovel) {
        this.tipoimovel = tipoimovel;
    }

    public String getFinalidade() {
        return finalidade;
    }

    public void setFinalidade(String finalidade) {
        this.finalidade = finalidade;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public Integer getArea() {
        return area;
    }

    public void setArea(Integer area) {
        this.area = area;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }
}
