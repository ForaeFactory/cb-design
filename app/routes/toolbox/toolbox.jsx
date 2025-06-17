/* eslint-disable react/no-unescaped-entities */

import { Footer } from '~/components/footer';
import { List, ListItem } from '~/components/list';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './toolbox.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

const emphTool = 'var(--accent)';

const designTools = ["Photoshop", "Illustrator", "InDesign", "After Effects", "Premiere Pro"];

export const Toolbox = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectHeader
          title="Toolbox"
          description="In case you were wondering... Here is a comprehensive list of the top tools, skills and software I use."
        />

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Core Creative & Design</ProjectSectionHeading>

              <ProjectSectionText as="div">
                <List ordered>
                  <ListItem>
                    <span style={{ color: emphTool }}>Adobe Creative Suite</span> is the primary tool for
                    majority of my design work.
                  </ListItem>
                  <List>
                    {designTools.map((item, index) => (
                      <ListItem key={index}>{item}</ListItem>
                    ))}
                  </List>
                  <ListItem>
                    <span style={{ color: emphTool }}>Figma</span> is my preferred choice with regards to UI, prototypes and design systems, though I am familiar with <span style={{ color: emphTool }}>Sketch</span> and <span style={{ color: emphTool }}>Adobe XD</span>
                  </ListItem>
                  <ListItem>
                    For motion graphics, <span style={{ color: emphTool }}>Adobe After Effects</span>. As of now, I have not worked with an alternative.
                  </ListItem>
                  <ListItem>
                    In regards to 3D Modeling, I am most familiar with <span style={{ color: emphTool }}>Blender</span>. As of now, I don't have a strong enough use-case to invest for larger, more expensive options like 3DS or Maya.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List ordered>
                  <ListItem>
                    Programming Languages
                  </ListItem>
                  <List>
                    <ListItem><span style={{ color: emphTool }}>Javascript</span> was the first language I learned, which made it easy to begin working in <span style={{ color: emphTool }}>React</span>.</ListItem>
                    <ListItem>I learned <span style={{ color: emphTool }}>Python</span> as I got more fluent in data analysis, specifically Python libraries (<span style={{ color: emphTool }}>Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn</span>).</ListItem>
                    <ListItem><b>HTML & CSS:</b> I can use styled-component options like <span style={{ color: emphTool }}>Bootstrap</span> and <span style={{ color: emphTool }}>Tailwind</span>, but as of lately I've become partial to the use of <span style={{ color: emphTool }}>PostCSS</span></ListItem>
                  </List>
                  <ListItem>
                    Related Software
                  </ListItem>
                  <List>
                    <ListItem>Visual Studio Code</ListItem>
                    <ListItem>Jupyter</ListItem>
                    <ListItem>Tableau (working knowledge)</ListItem>
                    <ListItem>Github (working knowledge)</ListItem>
                  </List>
                  <ListItem>
                    Additional Software & Tools
                  </ListItem>
                  <List>
                    <ListItem>Asana</ListItem>
                    <ListItem>Google for Work</ListItem>
                    <ListItem>Microsoft Office</ListItem>
                    <ListItem>Keynote</ListItem>
                  </List>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </>
  );
};
