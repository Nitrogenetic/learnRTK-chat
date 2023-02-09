import { FC, memo } from "react";
import { RouteComponentProps } from "@reach/router";
import Albums from "./components/Albums";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Todo from "./components/Todo";
import Counter from "./components/Counter";
import PhotosRTK from "./components/PhotosRTK";
import UsersRTK from "./components/UsersRTK";
import CreateUserFormRTK from "./components/CreateUserFormRTK";

interface HomeProps extends RouteComponentProps {
  path: string;
}

const Home: FC<HomeProps> = () => {
  const props = {
    name: "John",
    hi() {
      console.log(this.name);
    },
  };
  const { hi } = props; //Ошибка: не передался this
  // const hi1 = hi.bind({ name: "Annie" });
  // hi1();

  return (
    <div className="p-10">
      {/* <div className="fixed top-0 right-0 flex flex-col space-y-20">
        <Counter />
        <Todo />
      </div> */}
      <UsersRTK />
      <CreateUserFormRTK />
      {/* <PhotosRTK /> */}
      {/* <Users /> */}
      {/* <Posts /> */}
      {/* <Albums /> */}
    </div>
  );
};

export default memo(Home);
