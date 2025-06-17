/* eslint-disable react/no-unescaped-entities */

// Background Images
import khBackgroundLarge from '~/assets/khBackLarge.png';
import khMain from '~/assets/khMainImage.png';

// Dark/Light Image Set
import imageSprComponentsDarkLarge from '~/assets/khc/khIconsDark2.png';
import imageSprComponentsDarkPlaceholder from '~/assets/khc/khIconsDark2.png';
import imageSprComponentsDark from '~/assets/khc/khIconsDark.png';
import imageSprComponentsLightLarge from '~/assets/khc/khIconsLight.png';
import imageSprComponentsLightPlaceholder from '~/assets/khc/khIconsLight.png';
import imageSprComponentsLight from '~/assets/khc/khIconsLight.png';

// Main Content Image Set 1
import khc1 from '~/assets/khc/carousel1/khCarousel1.png';
import khc2 from '~/assets/khc/carousel1/khCarousel2.png';
import khc3 from '~/assets/khc/carousel1/khCarousel3.png';
import khc4 from '~/assets/khc/carousel1/khCarousel4.png';
import khc5 from '~/assets/khc/carousel1/khCarousel5.png';
import khc6 from '~/assets/khc/carousel1/khCarousel6.png';
import khc7 from '~/assets/khc/carousel1/khClose.png';

// Main Content Image Set 2
import khVideo from '~/assets/khc/KHDR_Exp.mp4';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
  ProjectImageSection,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './khdigital.module.css';
import { ImageCarousel } from '~/components/img-carousel/img-carousel';
import { useTheme } from '~/components/theme-provider';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider } from '~/components/theme-provider';


const images = [
  { key: 1, url: khc1, desc: "Describing the overall situation, core challenges and goals" },
  { key: 2, url: khc2, desc: "Initial research of how the current suite of tools stacks up against companies innovating in the digital space" },
  { key: 3, url: khc3, desc: "Quotes from stakeholders and employees that show pain points with the current suite of tools" },
  { key: 4, url: khc4, desc: "The approach to the naming criteria to build consistency" },
  { key: 5, url: khc5, desc: "The results of applying the naming criteria." },
  { key: 6, url: khc6, desc: "Snapshot of the design process" },
];

const title = 'KraftHeinz: Digital Revolution';
const description =
  "Building the initial suite of tools that lay the foundation for Kraft Heinz's digital transformation initiative aimed at modernizing and enhancing its digital footprint";
const roles = ['User Experience Research', 'Digital Design', 'Motion Graphics', 'Figma'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const KHDigital = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          src={khBackgroundLarge}
          srcSet={`${khBackgroundLarge} 1280w, ${khBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={khBackgroundLarge}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${khMain} 800w, ${khMain} 1920w`}
              width={800}
              height={500}
              placeholder={khMain}
              alt="The Kraft Heinz Digital Revolution Logo."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Background</ProjectSectionHeading>
            <ProjectSectionText>
              In a world that’s focused on the future, Kraft Heinz’s 150-year legacy is our
              differentiator - we’re steeped in history, but we’re at an inflection point.
              We might not be a tech company, or be building the next leading software product,
              but we are commited to transforming the food industry. With bold thinking and
              unprecedented passion, we can make a meaningful difference to what people eat.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectTextRow>
            <ProjectSectionHeading>Understanding the Current State</ProjectSectionHeading>
            <ProjectSectionText>

            </ProjectSectionText>
          </ProjectTextRow>
          <ImageCarousel images={images} />
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${khBackgroundLarge} 1280w, ${khBackgroundLarge} 2560w`}
                width={1280}
                height={900}
                placeholder={khBackgroundLarge}
                alt="Group of young adults having fun while snacking on various Kraft Heinz products."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Design in Motion</ProjectSectionHeading>
                  <ProjectSectionText>
                    The animation was a simple, straightforward way to visualize for future audiences.
                    It encapsulated the design process in a way that showed the fun nature of the brand, while also
                    allowing key stakeholders to get a glimpse of the new design being used in a way similar
                    to that of many other brands in the digital landscape.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={`${khVideo} 1280w, ${khVideo} 2560w`}
                width={1280}
                height={800}
                placeholder={khc6}
                alt="Snapshots of how the brand interacts with light and dark themes."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection dark={!isDark}>

          <Image
            key={theme}
            srcSet={
              isDark
                ? `${imageSprComponentsDark} 1024w, ${imageSprComponentsDarkLarge} 2048w`
                : `${imageSprComponentsLight} 1024w, ${imageSprComponentsLightLarge} 2048w`
            }
            width={1024}
            hright={800}
            placeholder={
              isDark
                ? imageSprComponentsDarkPlaceholder
                : imageSprComponentsLightPlaceholder
            }
            alt={`A set of ${theme} themed components for the KH design suite`}
            sizes="100vw"
          />
          <ProjectTextRow>
            <SegmentedControl
              currentIndex={themes.indexOf(theme)}
              onChange={handleThemeChange}
            >
              <SegmentedControlOption>Dark theme</SegmentedControlOption>
              <SegmentedControlOption>Light theme</SegmentedControlOption>
            </SegmentedControl>
          </ProjectTextRow>
          <ProjectTextRow>
            <ProjectSectionHeading>The Re-Designed Digital Suite</ProjectSectionHeading>
            <ProjectSectionText>
              The overall thought process was: How do we "fill the gaps" KraftHeinz is experiencing to complete the picture?
              With that in mind, the new designs were built from the concept of Tangram Puzzles. Knowing we have the necessary resources, let's leverage
              the basic shapes extracted from the whitespace within KH to build a minimal, yet fun icon set that's consistent
              with the brand. The color choices were chosen as variants of the existing identity to impart a more "delicious" look and feel.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectImageSection padding="top">
          <Image
            className={styles.imageBackground}
            src={khc7}
            placeholder={khc7}
            alt="Kraft Heinz Insights Suite"
          />
        </ProjectImageSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
