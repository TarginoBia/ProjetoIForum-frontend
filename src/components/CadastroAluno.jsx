import React from 'react';
import CadastroForm from './CadastroForm'; 
import IForumBg from '../assets/iforum_logo.png'; 
import './CadastroAluno.css';

const ALUNO_FIELDS = [
    { name: 'nome', label: 'Nome Completo', required: true },
    { name: 'matricula', label: 'Matrícula', required: true },
    { name: 'curso', label: 'Curso', required: true },
    { name: 'email', label: 'Email Institucional', type: 'email', required: true },
    { name: 'telefone', label: 'Telefone', type: 'tel' },
    { name: 'dataNascimento', label: 'Data de Nascimento', type: 'date' },
];

const CadastroAluno = () => { 
    
    const handleAlunoSubmit = (data) => {
        console.log('Dados do Aluno Prontos para o Backend:', data);
    };
    
    const screenStyle = {
        backgroundImage: `url(${IForumBg})`
    };

    return (
        <div className="full-screen-wrapper" style={screenStyle}>
            <div className="overlay-content">
                <CadastroForm 
                    title="Cadastro de Aluno"
                    fields={ALUNO_FIELDS}
                    onSubmit={handleAlunoSubmit}
                />
            </div>
        </div>
    );
};

export default CadastroAluno;
