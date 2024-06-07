import styles from "./ProjectsStyles.module.css";
import clone from "../../assets/clone.jpg";
import responsive from "../../assets/responsive.jpg";
import chat from "../../assets/chat.png";
import todo from "../../assets/todo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={clone}
          link="https://github.com/red0074/amazon-clone.git"
          h3="Amazon"
          p="Clone Web-Page"
        />
        <ProjectCard
          src={responsive}
          link="https://github.com/red0074/netflix.git"
          h3="Netflix"
          p="Responsive Clone WebPage"
        />
        <ProjectCard
          src={chat}
          link="https://github.com/red0074/chatapp.git"
          h3="Chatter"
          p="Flutter&Firebase Android App"
        />
        <ProjectCard
          src={todo}
          link="https://github.com/red0074/todo-app.git"
          h3="ToDo-Striker"
          p="Flutter Todo app "
        />
      </div>
    </section>
  );
}

export default Projects;
