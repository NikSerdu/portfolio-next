"use client";
import cn from "clsx";
import { motion } from "framer-motion";
import { FC, InputHTMLAttributes, useId } from "react";
import styles from "./Checkbox.module.scss";
type TypeProps = {
  isChecked: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: FC<TypeProps> = ({ isChecked, ...rest }) => {
  const checkboxId = useId();
  return (
    <>
      <label htmlFor={checkboxId}>
        <input
          type="checkbox"
          id={checkboxId}
          className={styles.input}
          defaultChecked={isChecked}
          {...rest}
        />
        <div className={cn(styles.custom_input)}>
          <motion.div
            className={styles.custom_input__toggler}
            initial={{ x: isChecked ? "29px" : 0 }}
            animate={{ x: isChecked ? "29px" : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          ></motion.div>
        </div>
      </label>
    </>
  );
};

export default Checkbox;
