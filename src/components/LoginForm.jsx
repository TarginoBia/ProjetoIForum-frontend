import { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário submetido.');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        
        {}
        <div className="login-form-content">
            <h2 className="login-title">Login de Acesso</h2>
            <form onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password" className="form-label">Senha</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              
              <button 
                type="submit" 
                className="login-button"
              >
                Entrar
              </button>
              
            </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
