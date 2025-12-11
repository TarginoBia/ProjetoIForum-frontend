import React from 'react';
import CadastroForm from './CadastroForm'; 
import IForumBg from '../assets/iforum_logo.png'; 
import './CadastroAlunoScreen.css'; 

const FUNCIONARIO_FIELDS = [
    { name: 'nome', label: 'Nome Completo', required: true },
    { name: 'cpf', label: 'CPF', required: true },
    { name: 'cargo', label: 'Cargo', required: true },
    { name: 'departamento', label: 'Departamento', required: true },
    { name: 'email', label: 'Email Institucional', type: 'email', required: true }, 
    { name: 'salario', label: 'Salário (R$)', type: 'number', placeholder: 'Ex: 3500.00' },
];

const CadastroFuncionario = () => { 
    
    const handleFuncionarioSubmit = (data) => {
        console.log('Dados do Funcionário Prontos para o Backend:', data);
    };

    const screenStyle = {
        backgroundImage: `url(${IForumBg})`
    };
    
    return (
        <div className="full-screen-wrapper" style={screenStyle}>
            <div className="overlay-content">
                <CadastroForm 
                    title="Cadastro de Funcionário"
                    fields={FUNCIONARIO_FIELDS}
                    onSubmit={handleFuncionarioSubmit}
                />
            </div>
        </div>
    );
};

export default CadastroFuncionario;
