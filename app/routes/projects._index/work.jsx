
import { Button } from '~/components/button';
import { Image } from '~/components/image';
import { useLocation } from '@remix-run/react';
import {
  ProjectContainer,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectPageText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './work.module.css';

// Background Imports
import budBack from '~/assets/budHeroBack_lg.png';
import ultraBack from '~/assets/ultraHeroBack_lg.png';
import blsBack from '~/assets/blsHeroBack_lg.png';
import khBack from '~/assets/khHeroBack_lg.png';

// Placeholder Imports
import budImg from '~/assets/bud/bud_king.png';
import ultraImg from '~/assets/mulBackground.png';
import blsImg from '~/assets/blsPlace.png';
import khImg from '~/assets/khBackground.png';

// Video Imports
import budVid from '~/assets/bud/BeAKing-Teaser.mp4';
import khVid from '~/assets/khc/KHDR_Exp.mp4';

const linkLabel = 'View Project';

const heading = 'Featured Projects';
const description =
  'Four featured projects including: Bud Light Seltzer, Kraft Heinz, Michelob Ultra and Budweiser.';

export const meta = () => {
  return baseMeta({ heading, description, prefix: 'Projects' });
};

export const Projects = ({ id, sectionRef, ...rest }) => {
  const location = useLocation();


  const projects = [
    {
      key: 'ultra',
      title: 'Look of the Leader',
      vid: '',
      placeholder: ultraImg,
      imgBack: ultraBack,
      url: '/ultra',
      projDesc: "As the national strategy was being finalized, ULTRA noticed opportunities to address issues involving their visuals and trade at a regional level that could unleash true potential of the brand.",
      imgDesc: 'Fit experts on stage as panelists at Michelob Ultra FitFest',
      vidDesc: 'Diverse group of young women in Michelob Ultra fitness apparel, sittin on a couch laughing and smiling.'
    },
    {
      key: 'khdigital',
      title: 'Digital Revolution',
      vid: khVid,
      placeholder: khImg,
      imgBack: khBack,
      url: '/kh-digital',
      projDesc: "Serving 97% of households, Kraft Heinz began owning their position of defining the next era of food innovation. This thought process shifted the focus to developing an internal digital toolset to replace current platforms.",
      imgDesc: 'Bottles of Kraft Heinz products arranged in a diagonal repeating pattern.',
      vidDesc: 'Video of the letter "KH" transforming into the digital suite logo.'
    },
    {
      key: 'blseltzer',
      title: 'Bring Your Flavor',
      vid: '',
      placeholder: blsImg,
      imgBack: blsBack,
      url: '/blseltzer',
      projDesc: "We all have a unique flavor that we bring to the world. It should be championed and unapologetic. Now more than ever, being yourself is encouraged. Every interaction needs some flavor. Why not bring yours?",
      imgDesc: 'The core four flavors of Bud Light Seltzer among corresponding fruits.',
      vidDesc: 'Four diverse young women smiling and holding unique flavors of Bud Light Seltzer'
    },
    {
      key: 'budweiser',
      title: 'Be a King',
      vid: budVid,
      placeholder: budImg,
      imgBack: budBack,
      url: '/bud-king',
      projDesc: "Despite global success and widespread recognition, Budweiser had seen declining multicultural brand relevance and regional sales from its past leader Houston, TX. The brand's heritage messaging and national campaigns weren’t resonating locally.",
      imgDesc: 'Large billboard on the side of a building with Budweiser "Be A King" imagery',
      vidDesc: 'Houston Rapper Slim Thug performing at a local Budweiser event'
    },
  ];



  return (
    <div className=''
      id={id}
      ref={sectionRef}
    >
      {projects.map((item, key) => (
        <ProjectContainer key={key} >
          <ProjectSection
            backgroundOverlayOpacity={0.8}
            backgroundElement={
              <Image
                srcSet={`${item.imgBack} 1280w, ${item.imgBack} 2560w`}
                width={1280}
                height={900}
                placeholder={item.imgBack}
                alt={item.imgDesc}
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>{item.title}</ProjectSectionHeading>
                  <ProjectPageText>
                    {item.projDesc}
                  </ProjectPageText>
                  <Button
                    secondary
                    iconHoverShift
                    className={styles.linkButton}
                    icon="chevron-right"
                    href={location.pathname === '/' ? `./projects${item.url}` : `.${item.url}`}
                  >
                    {linkLabel}
                  </Button>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={`${item.vid} 1280w, ${item.vid} 2560w`}
                width={1280}
                height={800}
                placeholder={item.placeholder}
                alt={item.vidDesc}
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ProjectContainer>
      ))}
    </div>
  );
};
