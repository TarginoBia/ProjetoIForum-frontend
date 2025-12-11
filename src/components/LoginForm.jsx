import React, { useState } from 'react';
import IForumBg from '../assets/iforum_logo.png'; 
import './LoginForm.css'; 

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulário submetido. Dados:', { email, password });
    };

    const loginStyle = {
        backgroundImage: `url(${IForumBg})`
    };

    return (
        <div className="login-form-wrapper" style={loginStyle}>
            
            <div className="login-form-container">
                <h2 className="login-title">Login de Acesso</h2>
                
                <form onSubmit={handleSubmit}>
                    
                    {}
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="input-field" 
                        />
                    </div>
                    
                    {}
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Senha</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="input-field" 
                        />
                    </div>
                    
                    {}
                    <button 
                        type="submit" 
                        className="primary-button" 
                    >
                        Entrar
                    </button>
                    
                </form>
                
            </div>
        </div>
    );
};

export default LoginForm;
