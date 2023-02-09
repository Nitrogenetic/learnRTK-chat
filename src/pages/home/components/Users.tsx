import { FC, useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../../../hooks/redux";
import { fetchUsers } from "../../../store/actionCreators/users";

interface UsersProps {}

const Users: FC<UsersProps> = () => {
  const dispatch = useTypedDispatch();

  const { users, isLoading, error } = useTypedSelector((store) => store.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {isLoading && "Загрузка..."}
      {error && error}
      {users.map((user) => (
        <div key={user.id}>
          <span className="text-green-800">{user.email}</span>
        </div>
      ))}
    </div>
  );
};

export default Users;
