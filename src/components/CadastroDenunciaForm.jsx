import CadastroForm from './CadastroForm';

const DENUNCIA_FIELDS = [
    { name: 'titulo', label: 'Título da Denúncia', required: true },
    { name: 'descricao', label: 'Descrição Detalhada', type: 'textarea', required: true },
    { name: 'setor', label: 'Setor Envolvido', required: true },
    { name: 'dataOcorrencia', label: 'Data da Ocorrência', type: 'date' },
];


function CadastroDenuncia() {
    const [descricao, setDescricao] = React.useState('');
    const [denunciaData, setDenunciaData] = React.useState({});

    const DENUNCIA_SIMPLE_FIELDS = [
        { name: 'titulo', label: 'Título da Denúncia', required: true },
        { name: 'setor', label: 'Setor Envolvido', required: true },
        { name: 'dataOcorrencia', label: 'Data da Ocorrência', type: 'date' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalData = { ...denunciaData, descricao };
        console.log('Dados da Denúncia Prontos para o Backend:', finalData);
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="cadastro-form">
                <h2>Cadastro de Denúncia</h2>
                
                {}
                <CadastroForm
                    title=""
                    fields={DENUNCIA_SIMPLE_FIELDS}
                    onSubmit={() => {}}
                />
                
                {}
                <div className="form-group">
                    <label htmlFor="descricao">Descrição Detalhada:</label>
                    <textarea
                        id="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Descreva detalhadamente a denúncia..."
                        required
                        className="input-field"
                        rows="5"
                    />
                </div>
                
                <button type="submit" className="submit-button">
                    Registrar Denúncia
                </button>
            </form>
        </div>
    );
}

export default CadastroDenuncia;
