import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '~/components/img-carousel/img-carousel.module.css';



function ArrowLeft() {
    return (
        <svg fill="currentColor" width="18" height="42" viewBox="0 0 18 42">
            <path d="M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z" />
        </svg>
    );
}

function ArrowRight() {
    return (
        <svg fill="currentColor" width="18" height="42" viewBox="0 0 18 42">
            <path d="M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z" />
        </svg>
    );
}


const slideVariants = {
    hiddenRight: {
        x: "100%",
        opacity: 0,
    },
    hiddenLeft: {
        x: "-100%",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.5,
        },
    },
};



export const ImageCarousel = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('left');

    const handleNext = () => {
        setDirection('right');
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };
    const handlePrevious = () => {
        setDirection('left');
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };
    const navClick = (index) => {
        setDirection(index > currentIndex ? 'right' : 'left');
        setCurrentIndex(index);
        console.log(currentIndex);
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div className={styles.carousel}>
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <AnimatePresence>
                        <motion.img
                            className={styles.placeholder}
                            key={images[currentIndex].key}
                            src={images[currentIndex].url}
                            alt={images.desc}
                            variants={slideVariants}
                            initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
                            animate='visible'
                            exit='exit'
                        />
                    </AnimatePresence>
                </div>
                <button
                    className={styles.button}
                    data-prev={true}
                    aria-label="Previous slide"
                    onClick={() => handlePrevious()}
                >
                    <ArrowLeft />
                </button>
                <button
                    className={styles.button}
                    data-next={true}
                    aria-label="Next slide"
                    onClick={() => handleNext()}
                >
                    <ArrowRight />
                </button>
            </div>
            <div className={styles.nav}>

                {images.map((image, index) => (
                    <button
                        className={styles.navButton}
                        key={image.alt}
                        onClick={() => navClick(index)}
                        aria-label={`Jump to slide ${index + 1}`}
                        aria-pressed={index === currentIndex}
                    />
                ))}

            </div>
        </div>
    );
};

{/* <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button onClick={() => prevImage()}></button>
              <image />
              <button onClick={() => nextImage()></button>

              */}
