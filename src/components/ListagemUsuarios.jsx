import React from 'react';
import './CadastroAluno.css'; 
import IForumBg from '../assets/iforum_logo.png'; 

const ListagemUsuarios = () => {
    
    const COLUMNS = [
        { key: 'tipo', label: 'Tipo' },
        { key: 'nome', label: 'Nome' },
        { key: 'identificador', label: 'Matrícula/CPF' },
        { key: 'detalhe', label: 'Detalhe' },
        { key: 'status', label: 'Status' },
        { key: 'acoes', label: 'Ações' },
    ];
    
    const MOCK_ROWS = [
        { id: 1, tipo: 'Aluno', nome: 'Ana Silva', identificador: '2019001', detalhe: 'ADS', status: 'Ativo' },
        { id: 2, tipo: 'Coordenador', nome: 'Dr. João Mendes', identificador: '999.888.777-66', detalhe: 'Ciências', status: 'Ativo' },
        { id: 3, tipo: 'Funcionário', nome: 'Carlos Souza', identificador: '111.222.333-44', detalhe: 'Secretário', status: 'Inativo' },
    ];

    const screenStyle = {
        backgroundImage: `url(${IForumBg})`
    };
    
    return (
        <div className="full-screen-wrapper" style={screenStyle}>
            {}
            <div className="overlay-content listagem-content"> 
                
                <h2 className="listagem-title">Listagem de Usuários Cadastrados</h2>
                
                {}
                <div className="filter-controls">
                    <label htmlFor="filtroTipo">Filtrar por Tipo:</label>
                    <select 
                        id="filtroTipo"
                        className="filter-select"
                        defaultValue="Todos" 
                    >
                        <option value="Todos">Todos</option>
                        <option value="Aluno">Alunos</option>
                        <option value="Coordenador">Coordenadores</option>
                        <option value="Funcionário">Funcionários</option>
                    </select>
                </div>

                {}
                <div className="table-container">
                    <table className="listagem-table">
                        <thead>
                            <tr>
                                {}
                                {COLUMNS.map(col => (
                                    <th key={col.key}>{col.label}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {}
                            {MOCK_ROWS.map(usuario => (
                                <tr key={usuario.id} className={usuario.status === 'Inativo' ? 'row-inactive' : ''}>
                                    <td>{usuario.tipo}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.identificador}</td>
                                    <td>{usuario.detalhe}</td>
                                    <td>
                                        <span className={`status-badge status-${usuario.status.toLowerCase()}`}>
                                            {usuario.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="action-button view-button">Ver</button>
                                        <button className="action-button edit-button">Editar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ListagemUsuarios;