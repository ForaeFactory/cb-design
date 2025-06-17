
// Background Images
import blsBackgroundLarge from '~/assets/blseltzer/BLS_Photos-Fill.png';
import blsBackgroundPlaceholder from '~/assets/blseltzer/BLS_Photos-Fill.png';
import blsBackground from '~/assets/blseltzer/BLS_Photos-Fill.png';
// Seltzer Cans
import seltzerCanLarge from '~/assets/blseltzer/SeltzerLarge.png';
import seltzerCanSmall from '~/assets/blseltzer/SeltzerSmall.png';
import seltzerCanLarge2 from '~/assets/blseltzer/Seltzer2Large.png';
import seltzerCanSmall2 from '~/assets/blseltzer/Seltzer2Small.png';
// Main Content Image Set 1
import bls1 from '~/assets/blseltzer/carousel/blsImage1s.png';
import bls2 from '~/assets/blseltzer/carousel/blsImage2s.png';
import bls3 from '~/assets/blseltzer/carousel/blsImage3s.png';
import bls4 from '~/assets/blseltzer/carousel/blsImage4s.png';
import bls5 from '~/assets/blseltzer/carousel/blsImage5s.png';
import bls6 from '~/assets/blseltzer/carousel/blsImage6s.png';
import bls7 from '~/assets/blseltzer/carousel/blsImage7s.png';
import bls8 from '~/assets/blseltzer/carousel/blsImage8s.png';
// Main Content Image Set 2
import blsFiller from '~/assets/blseltzer/BLS_Fill2.png';
import blsAct1 from '~/assets/blseltzer/carousel/BLS_OOH1.png';
import blsAct2 from '~/assets/blseltzer/carousel/blsImageTrade.png';
import blsAct3 from '~/assets/blseltzer/carousel/blsImagePosty.png';
import blsFiller2 from '~/assets/blseltzer/carousel/BLS_Close.png';

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
import styles from './blseltzer.module.css';
import { ImageCarousel } from '~/components/img-carousel/img-carousel';


const images = [
  { key: 1, url: bls1, desc: "Four young women enjoying Bud Light Seltzer" },
  { key: 2, url: bls2, desc: "Young woman and man conversing while enjoying Bud Light Seltzer" },
  { key: 3, url: bls3, desc: "Multicultural group laughing on a rooftop patio" },
  { key: 4, url: bls4, desc: "Multicultural group enjoying Bud Light Seltzer on a rooftop patio" },
  { key: 5, url: bls5, desc: "Young adults dancing and partying" },
  { key: 6, url: bls6, desc: "Four young woman posing looking fierce with different flavors of Bud Light Seltzer" },
  { key: 7, url: bls7, desc: "Four young women enjoying Bud Light Seltzer at modern city bar" },
  { key: 8, url: bls8, desc: "Young woman smiling and giving a cheers with Bud Light Seltzer" },
];

const images2 = [
  { key: 1, url: blsAct1, desc: "Four young women enjoying Bud Light Seltzer" },
  { key: 2, url: blsAct2, desc: "Young woman and man conversing while enjoying Bud Light Seltzer" },
  { key: 3, url: blsAct3, desc: "Multicultural group laughing on a rooftop patio" },
];

const title = 'Bud Light Seltzer: Bring Your Flavor';
const description =
  "This project was the multicultural campaign launch of Bud Light's Seltzer extension.";
const roles = ['Campaign Strategy', 'Multicultural', 'Photography', 'Art Direction'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const BLSeltzer = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.blselzter}>
        <ProjectBackground
          src={blsBackground}
          srcSet={`${blsBackground} 1280w, ${blsBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={blsBackgroundPlaceholder}
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
              srcSet={`${blsBackground} 800w, ${blsBackground} 1920w`}
              width={800}
              height={500}
              placeholder={blsBackground}
              alt="The Bud Light Seltzer Brand logo."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>The Introduction</ProjectSectionHeading>
              <ProjectSectionText>
                Despite triple digit growth with Bon & Viv, Anheuser-Busch had fallen behind in the seltzer category.
                To compensate, they threw all their brewing power and their biggest brand into the category
                to create...
              </ProjectSectionText>
              <ProjectSectionText>
                Bud Light Seltzer: An easy-drinking hard seltzer with a hint of delicious fruit flavor.
                We make spiked seltzer the same way we make beer - with a superior process made to deliver refreshing taste.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${seltzerCanSmall2} 350w, ${seltzerCanLarge2} 700w`}
                width={350}
                height={750}
                placeholder={seltzerCanLarge2}
                alt="The black cherry Seltzer flavor."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${seltzerCanSmall} 350w, ${seltzerCanLarge} 700w`}
                width={350}
                height={750}
                placeholder={seltzerCanLarge}
                alt="The mango Seltzer flavor."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectTextRow>
            <ProjectSectionHeading>Full Flavor Content</ProjectSectionHeading>
            <ProjectSectionText>
              Bud Light Seltzer entered the market as a challenger brand. Recognizing the parent brand,
              Bud Light lacked cultural texture or relevance to diverse young adults, they sought to flip
              the script with a targeted regional launch in Dallas—a city rich in cultural identity, music, art, and entrepreneurial energy.
              First step was casting and producing a vibrant, multicultural photoshoot in Dallas, Texas.
            </ProjectSectionText>
          </ProjectTextRow>
          <ImageCarousel images={images} />
        </ProjectSection>
        <ProjectImageSection padding="top">
          <Image
            className={styles.imageBackground}
            src={blsFiller}
            placeholder={blsFiller}
            alt="The four flavors of Bud Light Seltzer: Black Cherry, Lime, Strawberry and Mango."
          />
        </ProjectImageSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Adding Some Flavor to Trade</ProjectSectionHeading>
            <ProjectSectionText>
              <b>Core Messaging: </b>
              We all have a unique flavor that we bring to the world. It should be championed and unapologetic.
              Now more than ever, being yourself is encouraged. Every interaction needs some flavor. Why not bring yours?
            </ProjectSectionText>
          </ProjectTextRow>
          <ImageCarousel images={images2} />
        </ProjectSection>
        <ProjectImageSection padding="top">
          <Image
            className={styles.imageBackground}
            src={blsFiller2}
            placeholder={blsFiller2}
            alt="Four young adults jumping with excitement with Seltzer for the Many in a large font"
          />
        </ProjectImageSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
