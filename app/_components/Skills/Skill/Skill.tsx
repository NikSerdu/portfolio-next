import { FC, ReactNode } from "react";
import styles from "./Skill.module.scss";

type TypeProps = {
  name: string;
  icon: ReactNode;
};

const Skill: FC<TypeProps> = ({ icon, name }) => {
  return (
    <div className={styles.skill}>
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default Skill;
