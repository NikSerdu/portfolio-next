"use client";
import cn from "clsx";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
type TypeProps = {} & PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

const Button: FC<TypeProps> = ({ className, ...rest }) => {
  return <button className={cn(styles.button, className)} {...rest}></button>;
};

export default Button;
