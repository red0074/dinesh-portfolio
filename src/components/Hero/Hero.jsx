import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/pic.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import teleDark from "../../assets/tele.webp";
import teleLight from "../../assets/tele-dark.svg";
import CV from "../../assets/Ponnuru-Dinesh-Venkata-Sai-Teja_FullStack.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const teleIcon = theme === "light" ? teleLight : teleDark;
  return (
    <>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img src={heroImg} className={styles.hero} alt="Profile picture" />
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>
          <h1>
            Dinesh
            <br />
            Ponnuru
          </h1>
          <h2>Frontend Developer</h2>
          <h2>Devops Practioner</h2>
          <h2>Cybersecurity Enthusiast</h2>
          <span>
            <a href="https://twitter.com/" target="_blank">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://t.me/dineshponnuru29" target="_blank">
              <img src={teleIcon} alt="telegram icon" />
            </a>
            <a href="https://github.com/red0074" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/dinesh-venkata-sai-teja-ponnuru-160991225/"
              target="_blank"
            >
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </span>
          <p className={styles.description}>
            Enthusiastic and quick-learning Computer Science engineering fresher
            with hands-on experience in full- stack development, database
            integration, and modern UI design through academic projects and
            personal work. Looking to kickstart my career as a software or web
            developer by contributing to real-world projects, learning from
            industry experts, and growing within a forward- thinking
            organization.
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
