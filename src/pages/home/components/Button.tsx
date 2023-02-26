import { FunctionComponent, PropsWithChildren } from "react";
import cls from "classnames";

interface ButtonProps extends HTMLButtonElement {
  theme: "light" | "dark";
}

const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({ theme, children, ...rest }) => {
  return (
    <button
      className={cls("", { "bg-white color-black": theme === "light", "bg-black color-red": theme === "dark" })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
