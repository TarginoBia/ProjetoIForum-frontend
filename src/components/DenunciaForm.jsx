import { useEffect, useState } from "react";

function DenunciaForm({ users, onItemAdded, editingDenuncia }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [idUsuario, setIdUsuario] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (editingDenuncia) {
      setTitulo(editingDenuncia.titulo);
      setDescricao(editingDenuncia.descricao);
      setIdUsuario(editingDenuncia.idUsuario);
    } else {
      setTitulo("");
      setDescricao("");
      setIdUsuario("");
    }
  }, [editingDenuncia]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const method = editingDenuncia ? "PUT" : "POST";
    const url = editingDenuncia
      ? `http://localhost:8081/api/denuncias/${editingDenuncia.id}`
      : "http://localhost:8081/api/denuncias";

    const bodyData = {
      titulo,
      descricao,
      idUsuario: Number(idUsuario)
    };

    try {
      const res = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Erro ao salvar denúncia.");
      }

      const data = await res.json();
      setMessage("Denúncia salva com sucesso!");

      if (editingDenuncia) {
        onItemUpdated(data, "Denúncia");
      } else {
        onItemAdded(data, "Denúncia");
      }

      setTitulo("");
      setDescricao("");
      setIdUsuario("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div>
        <label htmlFor="userSelect">Usuário:</label>
        <select
          id="userSelect"
          value={idUsuario}
          onChange={(e) => setIdUsuario(e.target.value)}
          required
        >
          <option value="">Selecione o Usuário</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name} ({user.email})
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        placeholder="Título da denúncia"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <textarea
        placeholder="Descrição da denúncia"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <button type="submit">{editingDenuncia ? "Atualizar Denúncia" : "Registrar Denúncia"}</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default DenunciaForm;