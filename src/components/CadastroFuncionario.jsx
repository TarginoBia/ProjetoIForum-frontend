import CadastroForm from './CadastroForm';

const FUNCIONARIO_FIELDS = [
    { name: 'nome', label: 'Nome Completo', required: true },
    { name: 'cpf', label: 'CPF', required: true },
    { name: 'cargo', label: 'Cargo', required: true },
    { name: 'departamento', label: 'Departamento', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'salario', label: 'Salário (R$)', type: 'number' },
];

function CadastroFuncionario() {
    const handleFuncionarioSubmit = (data) => {
        console.log('Dados do Funcionário Prontos para o Backend:', data);
    };
    
    return (
        <CadastroForm 
            title="Cadastro de Funcionário"
            fields={FUNCIONARIO_FIELDS}
            onSubmit={handleFuncionarioSubmit}
        />
    );
}

export default CadastroFuncionario;