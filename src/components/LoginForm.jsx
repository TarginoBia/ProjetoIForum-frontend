// src/components/LoginForm.jsx
import { useState } from "react";

function LoginForm({ onLoginSuccess, onCadastroSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Limpa a mensagem anterior

    const endpoint = isLogin ? "login" : "cadastro";
    const bodyData = isLogin ? { email, senha } : { name, email, senha };

    try {
      const res = await fetch(`http://localhost:8081/api/auth/${endpoint}`, { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      if (!res.ok) {
        let errorText = "Erro na operação. Verifique seus dados.";

        if (res.status === 401) {
          errorText = "Credenciais inválidas. E-mail ou senha incorretos.";
        } else if (res.status === 409) {
          errorText = "E-mail já cadastrado.";
        } else {
          try {
            const errorData = await res.json();
            errorText = errorData.message || errorText;
          } catch (e) {
          }
        }
        throw new Error(errorText);
      }

      const data = await res.json();
      setMessage("Operação realizada com sucesso!");
      
      if (isLogin) {
        onLoginSuccess(data);
      } else {
        onCadastroSuccess(data);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '0 auto' }}>
      <h2>{isLogin ? "Login" : "Cadastro"}</h2>
      {!isLogin && (
        <input 
          type="text" 
          placeholder="Nome" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      )}
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
        style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <input 
        type="password" 
        placeholder="Senha" 
        value={senha} 
        onChange={(e) => setSenha(e.target.value)} 
        required 
        style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        {isLogin ? "Entrar" : "Cadastrar"}
      </button>
      <button 
        type="button" 
        onClick={() => setIsLogin(!isLogin)} 
        style={{ padding: '10px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        {isLogin ? "Não tem conta? Cadastre-se" : "Já tem conta? Faça login"}
      </button>
      {message && <p style={{ color: message.includes('sucesso') ? 'green' : 'red', textAlign: 'center' }}>{message}</p>}
    </form>
  );
}

export default LoginForm;