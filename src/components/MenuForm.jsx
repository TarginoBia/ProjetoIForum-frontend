import React from 'react';
import { FaHome, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa'; 
import './DashboardLayout.css'; 

const navItems = [
    { name: 'Início', icon: <FaHome />, path: '/home' },
    { name: 'Usuários', icon: <FaUsers />, path: '/users' },
    { name: 'Configurações', icon: <FaCog />, path: '/settings' },
];

function DashboardLayout({ children }) {
    
    const handleNavigation = (path) => {
        console.log(`Navegando para: ${path}`);
    };

    const handleLogout = () => {
        console.log("Usuário deslogado.");
    };

    return (
        <div className="layout-container">
            {}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h3>App Dashboard</h3>
                </div>
                
                <nav className="sidebar-nav">
                    <ul>
                        {navItems.map((item) => (
                            <li 
                                key={item.name} 
                                className={item.name === 'Início' ? 'nav-item active' : 'nav-item'} 
                                onClick={() => handleNavigation(item.path)}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-text">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </nav>

                {}
                <div className="sidebar-footer">
                    <button onClick={handleLogout} className="logout-button">
                        <span className="nav-icon"><FaSignOutAlt /></span>
                        Sair
                    </button>
                </div>
            </aside>

            {}
            <main className="main-content">
                {}
                <header className="main-header">
                    <h1>Bem-vindo ao Dashboard!</h1>
                </header>
                
                <div className="page-content">
                    {}
                    {children ? children : (
                        <p>Seu conteúdo principal será renderizado aqui.</p>
                    )}
                </div>
            </main>
        </div>
    );
}

export default DashboardLayout;