import CadastroForm from './CadastroForm';

const ALUNO_FIELDS = [
    { name: 'nome', label: 'Nome Completo', required: true },
    { name: 'matricula', label: 'Matrícula', required: true },
    { name: 'curso', label: 'Curso', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'telefone', label: 'Telefone', type: 'tel' },
    { name: 'dataNascimento', label: 'Data de Nascimento', type: 'date' },
];

function CadastroAluno() {
    const handleAlunoSubmit = (data) => {
        console.log('Dados do Aluno Prontos para o Backend:', data);
    };
    
    return (
        <CadastroForm 
            title="Cadastro de Aluno"
            fields={ALUNO_FIELDS}
            onSubmit={handleAlunoSubmit}
        />
    );
}

export default CadastroAluno;