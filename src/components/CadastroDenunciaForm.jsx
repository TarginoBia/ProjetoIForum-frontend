import React from 'react';
import CadastroForm from './CadastroForm'; 
import IForumBg from '../assets/iforum_logo.png'; 
import './CadastroAluno.css'; 

const DENUNCIA_FIELDS = [
    { name: 'titulo', label: 'Título da Denúncia', required: true },
    { name: 'descricao', label: 'Descrição Detalhada', type: 'textarea', required: true }, 
    { name: 'setor', label: 'Setor Envolvido', required: true },
    { name: 'dataOcorrencia', label: 'Data da Ocorrência', type: 'date' },
];

const CadastroDenuncia = () => {
    
    const handleDenunciaSubmit = (data) => {
        console.log('Dados da Denúncia Prontos para o Backend:', data);
    };

    const screenStyle = {
        backgroundImage: `url(${IForumBg})`
    };
    
    return (
        <div className="full-screen-wrapper" style={screenStyle}>
            <div className="overlay-content">
                <CadastroForm 
                    title="Registro de Denúncia"
                    fields={DENUNCIA_FIELDS}
                    onSubmit={handleDenunciaSubmit}
                    submitButtonText="Registrar Denúncia" 
                />
            </div>
        </div>
    );
};

export default CadastroDenuncia;
