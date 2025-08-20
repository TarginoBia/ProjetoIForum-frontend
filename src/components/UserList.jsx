function UserList({ users, onDelete, onEdit }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
          <button onClick={() => onDelete(user.id)}>Excluir</button>
          <button onClick={() => onEdit(user)}>Editar</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
