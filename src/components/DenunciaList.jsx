
function DenunciaList({ denuncias, onDelete, onEdit }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Denúncias e Sugestões Registradas</h2>
      <ul>
        {denuncias.map((denuncia) => (
          <li key={denuncia.id}>
            <strong>{denuncia.titulo}</strong>
            <br />
            {denuncia.descricao}
            <br />
            <small>Tipo: {denuncia.tipo}</small>
            <br />
            <small>Status: {denuncia.status}</small>
            <br />
            <small>Usuário: {denuncia.nomeUsuario || "N/A"}</small>
            <br />
            <button onClick={() => onDelete(denuncia.id, "denuncias")}>Excluir</button>
            <button onClick={() => onEdit(denuncia)}>Analisar / Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DenunciaList;