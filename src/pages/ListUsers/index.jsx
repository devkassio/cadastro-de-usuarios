import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import Trash from "../../assets/trash.svg";

import {
  ContainerUsers,
  CardUsers,
  TrashIcon,
  Title,
  AvatarUser,
  Container,
} from "./styles";

function ListUsers() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  // Toda vez que a tela carrega, o useEffect é executado

  // useEffect(() => {
  //     async function fetchUsers() {
  //         const response = await api.get("/usuarios");
  //         console.log(response.data);
  //     }

  // Toda vez que uma determinada variável mudar, o useEffect é executado
  // }, [variável]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data); // users = data;
    }

    getUsers();
  }, []);

  async function deleteUser(id) {
    await api.delete(`/usuarios/${id}`);
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public?${user.id}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon
              src={Trash}
              onClick={() => deleteUser(user.id)}
              alt="icone-lixo"
            />
          </CardUsers>
        ))}
      </ContainerUsers>
      <Button type="button" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
