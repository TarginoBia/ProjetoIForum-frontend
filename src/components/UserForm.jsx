import { useEffect, useState } from "react";

function UserForm({ onUserAdded, onUserUpdated, editingUser, userType }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [matricula, setMatricula] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setSenha("");
      if (editingUser.matricula) {
        setMatricula(editingUser.matricula);
      }
    } else {
      setName("");
      setEmail("");
      setSenha("");
      setMatricula("");
    }
  }, [editingUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const method = editingUser ? "PUT" : "POST";
    const url = editingUser
      ? `http://localhost:8081/api/${userType}/${editingUser.id}`
      : `http://localhost:8081/api/${userType}`;

    let bodyData = { name, email, senha };
    if (userType === "alunos") {
      bodyData.matricula = matricula;
    }

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
      setMatricula("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      {/* O select para o tipo de usuário foi movido para o App.jsx,
          pois o formulário já sabe qual é o tipo de usuário ativo. */}
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
      {userType === "alunos" && (
        <input
          type="text"
          placeholder="Matrícula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
          required
        />
      )}
      <button type="submit">{editingUser ? "Atualizar" : "Cadastrar"}</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default UserForm;