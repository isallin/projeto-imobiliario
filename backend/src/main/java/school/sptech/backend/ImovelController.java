package school.sptech.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.PreparedStatement;
import java.sql.Statement;

@RestController
@RequestMapping("/imoveis")
public class ImovelController {
    private final JdbcTemplate template;

    public ImovelController(JdbcTemplate template) {
        this.template = template;
    }

    @PostMapping
    public ResponseEntity<Imovel> cadastrar(
            @RequestBody Imovel imovel
    ) {
        String sql = "INSERT INTO imovel (TipoImovel, Finalidade, Endereco, Cidade, Area, Valor) VALUES (?, ?, ?, ?, ?, ?)";

        KeyHolder holder = new GeneratedKeyHolder();
        template.update(con -> {
            PreparedStatement statement = con.prepareStatement(
                    sql,
                    Statement.RETURN_GENERATED_KEYS
            );
            statement.setString(1, imovel.getTipoImovel());
            statement.setString(2, imovel.getFinalidade());
            statement.setString(3, imovel.getEndereco());
            statement.setString(4, imovel.getCidade());
            statement.setInt(5, imovel.getArea());
            statement.setDouble(6, imovel.getValor());

            return statement;
        }, holder);
        int idGerado = holder.getKey().intValue();
        imovel.setId(idGerado);
        return ResponseEntity.status(201).body(imovel);
    }

}
