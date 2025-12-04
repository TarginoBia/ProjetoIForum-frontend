import CadastroForm from './CadastroForm';

const COORDENADOR_FIELDS = [
    { name: 'nome', label: 'Nome Completo', required: true },
    { name: 'cpf', label: 'CPF', required: true },
    { name: 'area', label: 'Área de Coordenação', required: true },
    { name: 'email', label: 'Email Institucional', type: 'email', required: true },
    { name: 'telefone', label: 'Telefone', type: 'tel' },
    { name: 'senha', label: 'Senha Inicial', type: 'password', required: true },
];

function CadastroCoordenador() {
    const handleCoordenadorSubmit = (data) => {
        console.log('Dados do Coordenador Prontos para o Backend:', data);
    };
    
    return (
        <CadastroForm 
            title="Cadastro de Coordenador"
            fields={COORDENADOR_FIELDS}
            onSubmit={handleCoordenadorSubmit}
        />
    );
}

export default CadastroCoordenador;