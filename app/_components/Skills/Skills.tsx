import { FC } from "react";
import { data } from "./data";
import Skill from "./Skill/Skill";
import styles from "./Skills.module.scss";
const Skills: FC = () => {
  return (
    <section id="skills" className="container">
      <div className={styles.title}>
        <h2>My skills</h2>
        <img src="arrow-left.png" alt="Arrow to left" />
      </div>
      <div className={styles["skills-block"]}>
        {data.map((item) => (
          <Skill icon={item.icon} name={item.name} key={item.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
