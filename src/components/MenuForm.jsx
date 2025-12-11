import IForumBg from '../assets/iforum_logo.png';
import './MenuForm.css';

const MenuForm = () => {
  
  const mainContentStyle = {
      backgroundImage: `url(${IForumBg})`
  };

  return (
    <div className="menu-container">
      
      {}
      {}
      {}
      <aside className="sidebar">
        <div className="project-title">
          {}
          <img src={IForumBg} alt="IFórum Logo" className="logo" />
          <h1>IFórum</h1>
        </div>
        
        <nav className="nav-menu">
          <ul>
            {}
            <li>
              <a href="#" className="nav-link">🏠 Início (Dashboard)</a>
            </li>

            {}
            <li>
              <div className="nav-heading">➕ Cadastro</div>
              <ul className="submenu-list">
                <li><a href="#/cadastro/aluno" className="submenu-link">Cadastrar Aluno</a></li>
                <li><a href="#/cadastro/coordenador" className="submenu-link">Cadastrar Coordenador</a></li>
                <li><a href="#/cadastro/funcionario" className="submenu-link">Cadastrar Funcionário</a></li>
              </ul>
            </li>

            {}
            <li>
              <a href="#/listagem" className="nav-link">📄 Listagem de Usuários</a>
            </li>

            {}
            <li>
              <a href="#/configuracoes" className="nav-link">⚙️ Configurações</a>
            </li>
            <li>
              <a href="#/sair" className="nav-link logout-link">🚪 Sair</a>
            </li>
          </ul>
        </nav>
      </aside>
      
      {}
      {}
      {}
      {}
      <main className="main-content" style={mainContentStyle}>
        <div className="welcome-section">
          <h2>Bem-vindo ao IFórum!</h2>
          <p>Utilize o menu lateral para gerenciar cadastros e visualizar a listagem de usuários do Instituto.</p>
        </div>
        
        {}
      </main>
      
    </div>
  );
};

export default MenuForm;
