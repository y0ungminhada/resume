import { contact, introductions, profile, projects } from "./data";
import {
  ContactSection,
  FeaturedProjects,
  IntroSection,
  LinkButton,
  PageHero,
  PageShell,
} from "./components";
import picture from "../asset/picture.png";

export default function Home() {
  return (
    <PageShell>
      <PageHero
        title={`${profile.name}`}
        subtitle={`${profile.title}`}
        description={profile.headline}
        image={picture.src}
        imageAlt={`${profile.name}'s profile picture`}
        imageVariant="portrait"
        actions={
          <>
            <LinkButton href="/resume" variant="secondary">
              View Resume
            </LinkButton>
            <LinkButton href="/portfolio" variant="secondary">
              View Projects
            </LinkButton>
            {/* <LinkButton href="/aboutme" variant="secondary">
              About Me
            </LinkButton> */}
          </>
        }
      />
      {/* <FeaturedProjects projects={projects} />
      <IntroSection introductions={introductions} /> */}
      <ContactSection contact={contact} />
    </PageShell>
  );
}
