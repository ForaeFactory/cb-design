/* eslint-disable react/no-unescaped-entities */

// Background Image Set
import budBack from '~/assets/budLarge.png';

// Header Image Set
import budHeader from '~/assets/bud/budCover.png';

// Concept Image Set
import budConcept1 from '~/assets/bud/budConcepts.png';
import budConcept2 from '~/assets/bud/BudConcept2.png';
import budConcept3 from '~/assets/bud/BudConcept3.png';
import budConcept4 from '~/assets/bud/BudConcept4.png';
import budConcept5 from '~/assets/bud/budConcept5.png';

// Culture Image Set
import budCulture1 from '~/assets/bud/BudCulture.png';
import budCulture2 from '~/assets/bud/BudCulture1.png';
import budCulture3 from '~/assets/bud/BudCulture2.png';
import budCulture4 from '~/assets/bud/BudCulture3.png';

// Video Content
import budVideo from '~/assets/bud/Bud_BeAKing-Teaser.mp4';

// Filler Content
import budFill1 from '~/assets/bud/BudFill1.png';
import budFill2 from '~/assets/bud/BudSplash.png';

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
import styles from './budking.module.css';
import { ImageCarousel } from '~/components/img-carousel/img-carousel';
import { useTheme } from '~/components/theme-provider';
import { ThemeProvider } from '~/components/theme-provider';

const conceptImages = [
  { key: 1, url: budConcept1, desc: "Billboard designs used as concepts" },
  { key: 2, url: budConcept2, desc: "Concept of convience store freezer design" },
  { key: 3, url: budConcept3, desc: "Concept experience layout for events" },
  { key: 4, url: budConcept4, desc: "Multiple Trade and POCM assets" },
  { key: 5, url: budConcept5, desc: "Continued Trade asset concepts" },
];

const cultureImages = [
  { key: 1, url: budCulture1, desc: "Bucket of Budweiser at the feet of a woman in stylish shoes" },
  { key: 2, url: budCulture2, desc: "Three african-american models drinking Budweiser" },
  { key: 3, url: budCulture3, desc: "Close-up shot of Budweiser in the hands of a man wearing diamond and gold jewelry" },
  { key: 4, url: budCulture4, desc: "Five african-american men walking with six pack of Budweiser in stylish suits" },
];

const title = 'Budweiser: Be a King';
const description =
  "Multicultural extension of Budweiser's national 'Be a King' campaign.";
const roles = ['Trade Marketing', 'Multicultural', 'Production | Streaming', 'Experiential'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const BudKing = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];


  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          src={budBack}
          srcSet={`${budBack} 1280w, ${budBack} 2560w`}
          width={1280}
          height={800}
          placeholder={budBack}
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
              srcSet={`${budHeader} 800w, ${budHeader} 1920w`}
              width={800}
              height={500}
              placeholder={budHeader}
              alt="The Budweiser Logo"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Background</ProjectSectionHeading>
            <ProjectSectionText>
              Budweiser, an American-style lager, was introduced in 1876 by Adolphus Busch.
              Budweiser is now positioned as “The King of Beers”—a classic American lager that represents
              tradition, pride, and authenticity. It’s rooted in values of hard work, camaraderie,
              and national pride, while increasingly evolving to stay relevant with younger, more
              diverse drinkers. Over the years, Budweiser has become one of the most recognizable beer
              brands in the world, with a rich history and a loyal following of fans.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectTextRow>
            <ProjectSectionHeading>The King of Trade</ProjectSectionHeading>
            <ProjectSectionText>
              The brand’s marketing efforts have often leaned on national, one-size-fits-all strategies
              that underdeliver in culturally specific experiences. At a macro level, we needed to develop trade assets that can scale and align with current initiatives.
              That was our focus when for the first portion of the project.
            </ProjectSectionText>
          </ProjectTextRow>
          <ImageCarousel images={conceptImages} />
        </ProjectSection>
        <ProjectImageSection padding="top">
          <Image
            className={styles.imageBackground}
            src={budFill2}
            placeholder={budFill2}
            alt="Budweiser bowties spread across the screen in a diagonal pattern."
          />
        </ProjectImageSection>
        <ProjectSection light>
          <ProjectTextRow>
            <ProjectSectionHeading>The King of Content</ProjectSectionHeading>
            <ProjectSectionText>
              With macro trade assets done, we switched focus to regional experiences and imagery.
              The goal was simple: Reconnect with Houston’s consumer base that was driving sales through culturally relevant storytelling and vibrant imagery.
            </ProjectSectionText>
          </ProjectTextRow>
          <ImageCarousel images={cultureImages} />
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${budBack} 1280w, ${budBack} 2560w`}
                width={1280}
                height={900}
                placeholder={budBack}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Motion design</ProjectSectionHeading>
                  <ProjectSectionText>
                    We built and hosted an event that celebrated our target consumer's culture in Houston.
                    The event included a Q&A session followed by a live concert by Slim Thug, a prominent name in Houston music.
                    We produced and live-streamed the event as well.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={`${budVideo} 1280w, ${budVideo} 2560w`}
                width={1280}
                height={800}
                placeholder={budHeader}
                alt="Concert event with headlining rapper, Slim Thug."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>


        <ProjectImageSection padding="top">
          <Image
            className={styles.imageBackground}
            src={budFill1}
            placeholder={budFill1}
            alt="Budweiser bottle on vivid red background."
          />
        </ProjectImageSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
