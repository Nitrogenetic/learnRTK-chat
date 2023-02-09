import { FC } from "react";
import { useForm } from "react-hook-form";
import { CreateUserType } from "../../../types/user";
import { userAPI } from "../../../services/userServices";
import cls from "classnames";

interface CreateUserFormRTKProps {
  className?: string;
}

const CreateUserFormRTK: FC<CreateUserFormRTKProps> = (props) => {
  const { className } = props;
  const { register, handleSubmit: submit } = useForm<CreateUserType>();
  const [createUser, { data, isLoading, isError }] = userAPI.useCreateUserMutation();

  const handleSubmit = submit((userForm) => createUser(userForm));

  return (
    <div className={"flex flex-col " + className}>
      {isError && "Ошибка при создании пользователя"}
      {/* вынести отдельный инпут */}
      <input
        placeholder="Name"
        className="bg-blue-100 w-250 p-3 rounded-5 border-blue-300 outline-blue-500 mb-15"
        {...register("name")}
        type="text"
      />
      <input
        placeholder="Email"
        className="bg-blue-100 w-250 p-3 rounded-5 border-blue-300 outline-blue-500 mb-20"
        {...register("email")}
        type="text"
      />
      <button
        className={cls("self-center bg-blue-400 text-white rounded-10 px-10 py-5", { "bg-gray-200": isLoading })}
        disabled={isLoading}
        onClick={handleSubmit}
      >
        Create User
      </button>
    </div>
  );
};

export default CreateUserFormRTK;
