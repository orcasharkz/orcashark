import styles from "@/styles/ImageModal.module.css";
import { useEffect, useState } from "react";

export const ImageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<HTMLImageElement[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const allImages = document.querySelectorAll<HTMLImageElement>("#content img");
    if (!allImages) {
      return;
    }
    allImages.forEach((image, index) => {
      image.addEventListener("click", () => {
        clickableImage(allImages, index);
      });
    });
    return () => {
      allImages.forEach((image, index) => {
        image.removeEventListener("click", () => {
          clickableImage(allImages, index);
        });
      });
    };
  }, [isOpen]);

  const clickableImage = (images: NodeListOf<HTMLImageElement>, index: number) => {
    setIsOpen(true);
    setImages(Array.from(images));
    setCurrentIndex(index);
  };

  if (!images) {
    return;
  }

  const toPrev = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const toNext = () => {
    if (currentIndex !== images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentImageSrc = images[currentIndex].src;
  const currentImageAlt = images[currentIndex].alt;

  return (
    isOpen && (
      <div className={`${styles.modal} js_open`}>
        <header className={styles.header}>
          <div className={styles.header_inner}>
            {/* image count */}
            <div className={styles.count}>
              {`image ${currentIndex + 1} / ${images.length}`}
            </div>
            {/* prev */}
            <button
              onClick={toPrev}
              className={`${styles.prev} ${currentIndex === 0 && styles.none}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 -960 960 960"
                width="28px"
                fill="#ffffff"
                className={`${styles.svg} ${currentIndex === 0 && styles.none}`}
              >
                <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
              </svg>
            </button>
            {/* next */}
            <button
              onClick={toNext}
              className={`${styles.next} ${
                currentIndex === images.length - 1 && styles.none
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 -960 960 960"
                width="28px"
                fill="#ffffff"
                className={`${styles.svg} ${
                  currentIndex === images.length - 1 && styles.none
                }`}
              >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
              </svg>
            </button>
            {/* close */}
            <button onClick={() => setIsOpen(false)} className={styles.close}>
              <span className={styles.line1}></span>
              <span className={styles.line2}></span>
            </button>
          </div>
        </header>

        <div onClick={() => setIsOpen(false)} className={styles.image_block}>
          <img
            src={currentImageSrc}
            alt={currentImageAlt}
            width={"100%"}
            height={"100%"}
            className={styles.image}
            key={currentImageSrc}
          />
        </div>
      </div>
    )
  );
};
