import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import styles from "./Like.module.css";

const Like = () => {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <>
      <div onClick={() => setIsFilled(!isFilled)}>
        {isFilled ? (
          <AiFillLike className={styles.like}></AiFillLike>
        ) : (
          <AiOutlineLike className={styles.like}></AiOutlineLike>
        )}
      </div>
    </>
  );
};

export default Like;
