import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // 1. Estado de edição

  useEffect(() => {
    fetch("http://localhost:8081/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Erro ao buscar usuários:", err));
  }, []);

  const handleUserAdded = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };
  
  const handleUserUpdated = (updatedUser) => {
    setUsers((prev) => 
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
  };
  
  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = async (id) => {
  try {
    const response = await fetch(`http://localhost:8081/api/users/${id}`, { 
      method: "DELETE",
    });

    if (response.status === 204) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
      setMessage("Usuário excluído com sucesso!");
    } else {
      throw new Error("Erro ao excluir usuário.");
    }

  } catch (err) {
    console.error(err);
    setMessage("Erro ao excluir usuário.");
  }
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>CRUD com React + Vite</h1>
      <UserForm 
        onUserAdded={handleUserAdded} 
        onUserUpdated={handleUserUpdated}
        editingUser={editingUser}
      />
      <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;