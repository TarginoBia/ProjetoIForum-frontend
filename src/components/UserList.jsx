
function UserList({ users, userType, onDelete, onEdit }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Lista de Usuários ({userType})</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => onDelete(user.id, userType)}>Excluir</button>
            <button onClick={() => onEdit(user)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;