import { useEffect, useState } from "react";
import DenunciaForm from "./components/DenunciaForm";
import DenunciaList from "./components/DenunciaList";
import LoginForm from "./components/LoginForm";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [currentUser, setCurrentUser] = useState(null); 
  const [users, setUsers] = useState([]);
  const [denuncias, setDenuncias] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [message, setMessage] = useState("");
  const [activeForm, setActiveForm] = useState("users");

  const API_BASE_URL = "http://localhost:8081/api";

  const fetchData = async (endpoint, setter) => {
    try {
      const res = await fetch(`${API_BASE_URL}/${endpoint}`);
      if (!res.ok) throw new Error(`Erro ao buscar ${endpoint}.`);
      const data = await res.json();
      setter(data);
    } catch (error) {
      setMessage(error.message);
    }
  };

  useEffect(() => {
    fetchData("users", setUsers);
    fetchData("denuncias", setDenuncias);
  }, []);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setMessage(`Bem-vindo, ${user.name}!`);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setMessage("Você saiu do sistema.");
  };

  // ----------------------------------------------------
  // Revised Functions for CRUD operations
  // ----------------------------------------------------

  const handleItemAdded = (item, type) => {
    if (type === "user") {
      setUsers((prev) => [...prev, item]);
    } else if (type === "denuncia") {
      setDenuncias((prev) => [...prev, item]);
    }
    setEditingItem(null);
  };

  const handleItemUpdated = (updatedItem, type) => {
    if (type === "user") {
      setUsers((prev) => 
        prev.map((user) => (user.id === updatedItem.id ? updatedItem : user))
      );
    } else if (type === "denuncia") {
      setDenuncias((prev) => 
        prev.map((denuncia) => (denuncia.id === updatedItem.id ? updatedItem : denuncia))
      );
    }
    setEditingItem(null);
    setMessage(`${type.charAt(0).toUpperCase() + type.slice(1)} atualizado com sucesso!`);
  };

  const handleDelete = async (id, endpoint) => {
    try {
      const res = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error(`Erro ao excluir o item.`);

      if (endpoint === "users") {
        setUsers((prev) => prev.filter((user) => user.id !== id));
      } else if (endpoint === "denuncias") {
        setDenuncias((prev) => prev.filter((denuncia) => denuncia.id !== id));
      }

      setMessage("Item excluído com sucesso!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>CRUD com React + Vite</h1>
      {message && <p>{message}</p>}

      {!currentUser ? (
        <LoginForm 
          onLoginSuccess={handleLoginSuccess}
          onCadastroSuccess={(user) => {
            handleLoginSuccess(user);
            setMessage("Cadastro e login realizados com sucesso!");
          }}
        />
      ) : (
        <>
          <p>Logado como: {currentUser.name}</p>
          <button onClick={handleLogout}>Sair</button>
          <hr />
          <div>
            <button onClick={() => setActiveForm("users")}>Gerenciar Usuários</button>
            <button onClick={() => setActiveForm("denuncias")}>Gerenciar Denúncias</button>
          </div>
          <hr />
          {activeForm === "users" && (
            <>
              <h2>Gerenciar Usuários</h2>
              <UserForm
                onItemAdded={(item) => handleItemAdded(item, "user")}
                onItemUpdated={(item) => handleItemUpdated(item, "user")}
                editingUser={editingItem}
              />
              <UserList
                users={users}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            </>
          )}

          {activeForm === "denuncias" && (
            <>
              <h2>Gerenciar Denúncias</h2>
              <DenunciaForm
                users={users}
                onItemAdded={(item) => handleItemAdded(item, "denuncia")}
                onItemUpdated={(item) => handleItemUpdated(item, "denuncia")}
                editingDenuncia={editingItem}
              />
              <DenunciaList
                denuncias={denuncias}
                onDelete={(id) => handleDelete(id, "denuncias")}
                onEdit={handleEdit}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
