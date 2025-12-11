import React from 'react';
import CadastroForm from './CadastroForm'; 
import IForumBg from '../assets/iforum_logo.png'; 
import './CadastroAluno.css'; 

const COORDENADOR_FIELDS = [
    { name: 'nome', label: 'Nome Completo', required: true },
    { name: 'cpf', label: 'CPF', required: true },
    { name: 'area', label: 'Área de Coordenação', required: true },
    { name: 'email', label: 'Email Institucional', type: 'email', required: true },
    { name: 'telefone', label: 'Telefone', type: 'tel' },
    { name: 'senha', label: 'Senha Inicial', type: 'password', required: true },
];

const CadastroCoordenador = () => {
    
    const handleCoordenadorSubmit = (data) => {
        console.log('Dados do Coordenador Prontos para o Backend:', data);
    };

    const screenStyle = {
        backgroundImage: `url(${IForumBg})`
    };
    
    return (
        <div className="full-screen-wrapper" style={screenStyle}>
            <div className="overlay-content">
                <CadastroForm 
                    title="Cadastro de Coordenador"
                    fields={COORDENADOR_FIELDS}
                    onSubmit={handleCoordenadorSubmit}
                />
            </div>
        </div>
    );
};

export default CadastroCoordenador;
