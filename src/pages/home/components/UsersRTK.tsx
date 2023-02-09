import { FC } from "react";
import { userAPI } from "../../../services/userServices";

interface UsersRTKProps {}

const UsersRTK: FC<UsersRTKProps> = () => {
  const { data: users, error, isLoading, refetch } = userAPI.useFetchUsersQuery(1000);
  const [deleteUser] = userAPI.useDeleteUserMutation();

  const handleRefetch = () => refetch();

  const handleDelete = (userId) => {
    deleteUser(userId);
  };

  return (
    <div>
      <button className="text-white bg-blue-400 px-15 py-5 rounded-5" onClick={handleRefetch}>
        Refetch
      </button>
      {isLoading && "Загрузка..."}
      {error && "Ошибка в запросе"}
      {/* создать компонент User, а так же избавиться от стрелочной функции */}
      {users?.map((user, index) => (
        <div key={user.id} className="flex space-x-10 mb-10">
          <span className="text-green-800 font-bold mb-5">{index + 1 + ") " + user.name}</span>
          <span className="text-green-800 font-bold mb-5">{user.email}</span>
          <button className="text-white bg-red-700 px-15 py-5 rounded-5" onClick={() => handleDelete(user.id)}>
            Delete user
          </button>
        </div>
      ))}
    </div>
  );
};

export default UsersRTK;
