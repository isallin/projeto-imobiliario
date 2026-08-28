package school.sptech.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
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
        String sql = "INSERT INTO imovel (tipoimovel, finalidade, endereco, cidade, area, valor) VALUES (?, ?, ?, ?, ?, ?)";

        KeyHolder holder = new GeneratedKeyHolder();
        template.update(con -> {
            PreparedStatement statement = con.prepareStatement(
                    sql,
                    Statement.RETURN_GENERATED_KEYS
            );
            statement.setString(1, imovel.getTipoimovel());
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

    @GetMapping
    public ResponseEntity<List<Imovel>> listar(){
        String sql = "SELECT * FROM imovel";

        List<Imovel> resultado = template.query(sql,
        new BeanPropertyRowMapper<>(Imovel.class));
        // O dado é colunar -> Objeto
        return ResponseEntity.status(200).body(resultado);
    }

}
