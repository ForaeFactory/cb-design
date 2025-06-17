import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="53"
      viewBox="0 0 48 53"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M6.8,6.43v15.39c3.62-8.59,12.01-14.64,21.93-13.97,7.74.52,12.65,4.23,12.26,10.02-.14,2.1-.96,3.86-2.18,5.11,4.23-2.01,6.56-5.44,6.56-10.62C45.36,3.01,37.68,0,24.42,0H0v.53c4.8,0,6.32,1.83,6.8,5.9Z" />
          <path d="M33.77,24.98c-.05,0-.11,0-.16,0-.63-.04-1.26-.18-1.85-.42-3.12-1.26-3.64-5.37-1.24-7.73.88-.87,1.65-2.14,1.76-3.86.17-2.57-1.05-4.38-3.45-4.54-5.74-.39-10.13,9.09-10.65,16.81-.53,7.94,2.8,12.19,8.19,12.69,6.97,0,10.32-2.58,11.54-3.84.13-.13.36,0,.3.18-3.57,10.74-13.21,12.3-20.23,11.78-5.05-.34-8.99-2.8-11.18-6.8v6.91c-.48,4.06-2,6.03-6.8,6.03v.53h14.98s9.07,0,9.07,0c14.16,0,23.95-3.09,23.95-14.76,0-7.67-5.26-11.65-14.23-12.98Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});

