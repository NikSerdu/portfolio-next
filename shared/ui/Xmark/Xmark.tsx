import { FC, HTMLAttributes } from "react";

type TypeProps = {} & HTMLAttributes<HTMLDivElement>;

const Xmark: FC<TypeProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <div className="absolute  w-16 h-4 dark:bg-white bg-black rotate-45"></div>
      <div className="absolute  w-16 h-4 dark:bg-white bg-black -rotate-45"></div>
    </div>
  );
};

export default Xmark;
