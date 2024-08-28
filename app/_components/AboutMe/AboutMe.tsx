import { FC } from "react";
import styles from "./AboutMe.module.scss";
import Link from "next/link";
import Button from "@/shared/ui/Button/Button";

const AboutMe: FC = () => {
  return (
    <section id="about-me" className={styles["about-me"]}>
      <div className="container flex justify-between">
        <div className={styles["img-block"]}>
          <img
            src="about-img.png"
            alt="About me img"
            className={styles["main-img"]}
          />
          <img src="bubble.png" alt="Bubble img" className={styles.bubble} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2 className="">
              About <br /> me
            </h2>
            <img src="arrow-right.png" alt="Right arrow" />
          </div>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              provident sunt ullam vel perferendis vero excepturi aliquid quia,
              ut inventore sequi ducimus cum quam accusantium, ad unde quaerat!
              Repellendus, minus. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit.
            </p>
            <Link href={"#contact"}>
              <Button className="mt-6">Contact me</Button>
            </Link>
          </div>
        </div>
      </div>
      <img src="points.png" alt="Points img" className={styles["points"]} />
    </section>
  );
};

export default AboutMe;
