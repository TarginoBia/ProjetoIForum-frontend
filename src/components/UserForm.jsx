import { useEffect, useState } from "react";

function UserForm({ onUserAdded, onUserUpdated, editingUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setSenha(""); 
    } else {
      setName("");
      setEmail("");
      setSenha("");
    }
  }, [editingUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const method = editingUser ? "PUT" : "POST";
    const url = editingUser 
      ? `http://localhost:8081/api/users/${editingUser.id}` 
      : "http://localhost:8081/api/users";
    
    const bodyData = { name, email, senha };

    try {
      const res = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Erro ao salvar usuário.");
      }

      const data = await res.json();
      setMessage("Usuário salvo com sucesso!");
    
      if (editingUser) {
        onUserUpdated(data);
      } else {
        onUserAdded(data);
      }

      setName("");
      setEmail("");
      setSenha("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required={!editingUser}
      />
      <button type="submit">{editingUser ? "Atualizar" : "Cadastrar"}</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default UserForm;