import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [isLogin, setIsLogin] = useState(true);
  
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(""); 
    
    if (!email || !password || (!isLogin && !name)) {
        setMessage("Por favor, preencha todos os campos obrigatórios.");
        return;
    }
    
    console.log(isLogin ? "Tentativa de Login:" : "Tentativa de Cadastro:", { name, email, password });
  };
  
  const toggleMode = () => {
      setIsLogin(!isLogin);
      setName('');
      setEmail('');
      setPassword('');
      setMessage('');
  };

  return (
    <div className="login-form-wrapper">
        <form onSubmit={handleSubmit} className="login-form-container">
            <h2>{isLogin ? "Acessar Conta" : "Criar Conta"}</h2>
            
            {}
            {!isLogin && (
                <input 
                    type="text" 
                    placeholder="Nome" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required={!isLogin} 
                    className="input-field"
                />
            )}
            
            {}
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                className="input-field"
            />
            
            {}
            <input 
                type="password" 
                placeholder="Senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                className="input-field"
            />
            
            {}
            {message && <p className="feedback-message error">{message}</p>}
            
            {}
            <button 
                type="submit" 
                className="primary-button"
            >
                {isLogin ? "Entrar" : "Cadastrar"}
            </button>
            
            <hr className="separator" />
            
            {}
            <button 
                type="button" 
                onClick={toggleMode} 
                className="secondary-button"
            >
                {isLogin ? "Não tem conta? Cadastre-se" : "Já tem conta? Faça login"}
            </button>
        </form>
    </div>
  );
}

export default LoginForm;
