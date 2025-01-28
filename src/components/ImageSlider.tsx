import { useState, type ReactNode } from "react";
import styles from "@/styles/ImageSlider.module.css";

type Props = {
  children: ReactNode;
  totalImages: number;
};

export const ImageSlider = ({ children, totalImages }: Props) => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [isTransition, setIsTransition] = useState(false);

  const toPrev = () => {
    if (currentNumber !== 0) {
      setIsTransition(true);
      setCurrentNumber(currentNumber - 1);
    }
  };
  const toNext = () => {
    if (currentNumber !== totalImages - 1) {
      setIsTransition(true);
      setCurrentNumber(currentNumber + 1);
    }
  };
  const resetImage = () => {
    if (currentNumber === 0) {
      setIsTransition(false);
      setCurrentNumber(totalImages - 2);
    }
    if (currentNumber === totalImages - 1) {
      setIsTransition(false);
      setCurrentNumber(1);
    }
  };

  return (
    <div className={styles.slider}>
      <div
        onTransitionEnd={resetImage}
        style={{
          transform: `translateX(${-1 * currentNumber * 100}%)`,
          transition: `${isTransition && "transform 0.5s"}`,
        }}
        className={styles.image_block}
      >
        {children}
      </div>
      <div className={styles.slider_navigation}>
        {/* prev */}
        <button onClick={toPrev} className={styles.prev}>
          PREV
        </button>
        {/* indicator */}
        <div className={styles.indicator_wrapper}>
          {Array.from({ length: totalImages - 2 }, (_, index) => (
            <span
              onClick={() => {
                setIsTransition(false);
                setCurrentNumber(index + 1);
              }}
              key={index}
              className={`${styles.indicator} ${
                currentNumber === index + 1 && styles.current
              }`}
            ></span>
          ))}
        </div>
        {/* next */}
        <button onClick={toNext} className={styles.next}>
          NEXT
        </button>
      </div>
    </div>
  );
};
