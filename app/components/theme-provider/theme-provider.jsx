
import { createContext, useContext } from 'react';
import { classes, media } from '~/utils/style';
import { themes, tokens } from './theme';

export const ThemeContext = createContext({});

export const ThemeProvider = ({
  theme = 'dark',
  children,
  className,
  as: Component = 'div',
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme,
      }}
    >
      {isRootProvider && children}
      {/* Nested providers need a div to override theme tokens */}
      {!isRootProvider && (
        <Component className={classes(className)} data-theme={theme} {...rest}>
          {children}
        </Component>
      )}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}

/**
 * Squeeze out spaces and newlines
 */
export function squish(styles) {
  return styles.replace(/\s\s+/g, ' ');
}

/**
 * Transform theme token objects into CSS custom property strings
 */
export function createThemeProperties(theme) {
  return squish(
    Object.keys(theme)
      .map(key => `--${key}: ${theme[key]};`)
      .join('\n\n')
  );
}

/**
 * Transform theme tokens into a React CSSProperties object
 */
export function createThemeStyleObject(theme) {
  let style = {};

  for (const key of Object.keys(theme)) {
    style[`--${key}`] = theme[key];
  }

  return style;
}

/**
 * Generate media queries for tokens
 */
export function createMediaTokenProperties() {
  return squish(
    Object.keys(media)
      .map(key => {
        return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
      })
      .join('\n')
  );
}

const layerStyles = squish(`
  @layer theme, base, components, layout;
`);

const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);

const fontStyles = squish(`
  @font-face {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    src: url('https://fonts.googleapis.com/css2?family=Poppins&display=swap') format('woff2');
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:ital@1&display=swap') format('woff2');
    font-display: swap;
    font-style: italic;
  }

  @font-face {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap') format('woff2');
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,500&display=swap') format('woff2');
    font-display: swap;
    font-style: italic;
  }

  @font-face {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap') format('woff2');
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,700&display=swap') format('woff2');
    font-display: swap;
    font-style: italic;
  }

  @font-face {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap') format('woff2');
    font-display: swap;
    font-style: normal;
  }
`);

export const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
