/* eslint-disable react/no-unescaped-entities */



// Background Images
import mulBackground from '~/assets/mulBackground.png';

// Header Image Set
import mulHero from '~/assets/ultra/muPlace.png';
import mulBottle1 from '~/assets/ultra/mulBottle1_2.png';
import mulBottle2 from '~/assets/ultra/mulBottle2_2.png';

// Filler and Closing Content Images
import mulClose from '~/assets/ultra/mulclose.png';
import mulFill1 from '~/assets/ultra/mulFill1.png';
import mulFill2 from '~/assets/ultra/mulPGFill.png';
import mulFill3 from '~/assets/ultra/mulFill3.png';

// Experiential Carousel Set
import mulExp1 from '~/assets/ultra/mulExp1.png';
import mulExp2 from '~/assets/ultra/mulExp2.png';
import mulExp3 from '~/assets/ultra/mulExp3.png';
import mulExp4 from '~/assets/ultra/mulExp4.png';
import mulExp5 from '~/assets/ultra/mulExp5.png';
import mulExp6 from '~/assets/ultra/mulExp6.png';
import mulExp7 from '~/assets/ultra/mulExp7.png';
import mulExp8 from '~/assets/ultra/mulExp8_1.png';
import mulExp9 from '~/assets/ultra/mulExp9.png';
import mulExp10 from '~/assets/ultra/mulExp10.png';

// Trade Carousel Set
import mulTrade1 from '~/assets/ultra/mulTrade1_1.png';
import mulTrade2 from '~/assets/ultra/mulTrade2.png';
import mulTrade3 from '~/assets/ultra/mulTrade3_1.png';
import mulTrade4 from '~/assets/ultra/mulTrade4_1.png';
import mulTrade5 from '~/assets/ultra/mulTrade5.png';


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
import styles from './ultra.module.css';
import { ImageCarousel } from '~/components/img-carousel/img-carousel';


const expCarousel = [
  { key: 2, url: mulExp2, desc: "Young woman and man conversing while enjoying Bud Light Seltzer" },
  { key: 3, url: mulExp3, desc: "Multicultural group laughing on a rooftop patio" },
  { key: 4, url: mulExp4, desc: "Multicultural group enjoying Bud Light Seltzer on a rooftop patio" },
  { key: 5, url: mulExp5, desc: "Young adults dancing and partying" },
  { key: 6, url: mulExp6, desc: "Four young woman posing looking fierce with different flavors of Bud Light Seltzer" },
  { key: 7, url: mulExp7, desc: "Four young women enjoying Bud Light Seltzer at modern city bar" },
  { key: 8, url: mulExp8, desc: "Young woman smiling and giving a cheers with Bud Light Seltzer" },
  { key: 9, url: mulExp9, desc: "Young woman smiling and giving a cheers with Bud Light Seltzer" },
  { key: 10, url: mulExp10, desc: "Young woman smiling and giving a cheers with Bud Light Seltzer" },
];

const tradeCarousel = [
  { key: 2, url: mulTrade2, desc: "Three seperate designs of how to use the carb/cal count for Ultra graphics." },
  { key: 3, url: mulTrade3, desc: "Examples of the new aesthetic being used across billboards and activations." },
  { key: 4, url: mulTrade4, desc: "Apparel mockups that will be used for sell and promotional giveaways" },
  { key: 5, url: mulTrade5, desc: "The Michelob Ultra Van wrap that will be implemented at launch" },
];

const title = 'Michelob Ultra: Look of the Leader';
const description =
  "Enhance the premium aesthetic of Michelob Ultra through trade and experiential.";
const roles = ['Brand Strategy', 'Trade Marketing', 'Production', 'Experiential'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Ultra = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.blselzter}>
        <ProjectBackground
          src={mulBackground}
          srcSet={`${mulBackground} 1280w, ${mulBackground} 2560w`}
          width={1280}
          height={800}
          placeholder={mulBackground}
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
              srcSet={`${mulHero} 800w, ${mulHero} 1920w`}
              width={800}
              height={500}
              placeholder={mulHero}
              alt="The Michelob Ultra Brand Logo."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>The Introduction</ProjectSectionHeading>
              <ProjectSectionText>
                As the national strategy was being finalized, ULTRA noticed opportunities to address issues involving their visuals and processes that could unleash the true potential of the brand.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${mulBottle2} 350w, ${mulBottle2} 700w`}
                width={350}
                height={750}
                placeholder={mulBottle2}
                alt="The new designed Ultra bottle."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${mulBottle1} 350w, ${mulBottle1} 700w`}
                width={350}
                height={750}
                placeholder={mulBottle1}
                alt="The old design of the Ultra bottle."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Clear Straightforward Benefits</ProjectSectionHeading>
              <ProjectSectionText>
                To fortify ULTRA's position as the 'Look of the Leader,' our execution centers
                on a clean brand re-envisioning across all lifestyle and trade touchpoints.
                This demands optimizing and simplifying the product story to ensure maximum impact
                and crystal-clear messaging. A key pillar of our approach will be to articulate
                the direct benefits to the consumer, this will be achieved through direct, easy-to-understand language and an intentional use of whitespace that
                maintains the brand's established premium visual identity and tone."
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              srcSet={`${mulTrade1} 1280w, ${mulTrade1} 2560w`}
              width={1280}
              height={900}
              placeholder={mulTrade1}
              alt="Image of the artboard used to designed the new ULTRA aesthetic."
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectTextRow>
            <ProjectSectionHeading>Scaling Across Trade Assets</ProjectSectionHeading>
            <ProjectSectionText>
              A problem we heard about often form users was that it was difficult to
              find images they had previously seen or worked on. To solve this we added
              a new tab that lists all previously annotated slides. In addition, we
              added the ability to favorite slides, so if users find an interesting
              slide they want to annotate later, they can easily save it to their
              account.
            </ProjectSectionText>
          </ProjectTextRow>
          <ImageCarousel images={tradeCarousel} />
        </ProjectSection>
        <ProjectImageSection padding="top">
          <Image
            className={styles.imageBackground}
            src={mulFill2}
            placeholder={mulFill2}
            alt="Large image of Michelob Ultra Pure Gold levaraging the clean updated aesthetic established for the ULTRA brand family"
          />
        </ProjectImageSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Changing the Narrative</ProjectSectionHeading>
              <ProjectSectionText>
                Consuming beer can often seem at odds with an active, healthy lifestyle. To continue shifting this paradigm,
                our strategy involved designing and building an engaging, fitness-oriented experience.
                This initiative focused on creating physical touchpoints that seamlessly
                integrate the brand into active living.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              srcSet={`${mulExp1} 1280w, ${mulExp1} 2560w`}
              width={1280}
              height={900}
              placeholder={mulExp1}
              alt="Fitness experts on stage at a Q&A panel during ULTRA FitFest."
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Crafting the ULTRA Experience</ProjectSectionHeading>
            <ProjectSectionText>
              Like the brand, ULTRA FitFest was built on community, offering
              workouts and training sessions led by relatable trainers, influencers and celebrities,
              By focusing on participation, positive reinforcement, and real-world activation. We aimed to
              weave the brand into the narrative of health, moderation, and an active,
              social lifestyle, demonstrating that enjoying a beer doesn't mean compromising your well-being.
            </ProjectSectionText>
          </ProjectTextRow>
          <ImageCarousel images={expCarousel} />
        </ProjectSection>
        <ProjectImageSection padding="top">
          <Image
            className={styles.imageBackground}
            src={mulFill3}
            placeholder={mulFill3}
            alt="Well-known soccer players circling the camera with smiles on their faces wearing Michelob Ultra apparel."
          />
        </ProjectImageSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
