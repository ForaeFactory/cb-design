/* eslint-disable react/no-unescaped-entities */
import profileImgLarge from '~/assets/profileImageR.png';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profileImageS.png';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="In a Nutshell..." start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      For 15 years, I've been the creative force behind bold identities and impactful campaigns
      for everyone from global giants like Bud Light and Kraft Heinz to agile startups and private equity-backed ventures.
      My journey from accounting to launching national ad campaigns and building my own agency has been anything but linear.
      Every step has been driven by a relentless pursuit of meaningful results and creative innovation.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm a firm believer in learning by doing. My self-taught path in design, marketing, and entrepreneurship
      wasn't just about acquiring <Link href="/toolbox">technical skills</Link>; it forged a creative resilience and a knack for turning big
      ideas into tangible outcomes. Whether I'm crafting a brand from scratch, advising on high-stakes creative
      strategy, or storytelling through film and music, I bring a unique blend of <b>vision, empathy, and an unwavering
        commitment to craft.</b> For me, great design is more than just aesthetics—it's strategic, intentional, and
      transformative. Ultimately, I'm here to build things that endure.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Get in Touch
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
