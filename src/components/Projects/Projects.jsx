import styles from "./ProjectsStyles.module.css";
import clone from "../../assets/clone.jpg";
import responsive from "../../assets/responsive.jpg";
import chat from "../../assets/chat.png";
import todo from "../../assets/todo.png";
import tictactoe from "../../assets/tictactoe.jpg";
import rockpaper from "../../assets/rockpapersc.jpeg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.card}>
          <img src={clone} alt="Amazon Clone" />
          <div className={styles.cardContent}>
            <h3>Amazon</h3>
            <p>Web Page clone using html and css</p>
            <div className={styles.buttonContainer}>
              <a
                href="https://amazonwebpageclone.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.animatedButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className={styles.text}>Live</span>
                <span className={styles.circle}></span>
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr1}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/red0074/amazon-clone.git"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.animatedButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className={styles.text}>Code</span>
                <span className={styles.circle}></span>
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr1}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src={responsive} alt="Netflix Clone" />
          <div className={styles.cardContent}>
            <h3>Netflix</h3>
            <p>WebPage clone using html and css with responsiveness</p>
            <div className={styles.buttonContainer}>
              <a
                href="https://netflixwebpageclone.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.animatedButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className={styles.text}>Live</span>
                <span className={styles.circle}></span>
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr1}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/red0074/netflix.git"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.animatedButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className={styles.text}>Code</span>
                <span className={styles.circle}></span>
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr1}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src={chat} alt="Chatter" />
          <div className={styles.cardContent}>
            <h3>Chatter</h3>
            <p>
              Chatting application with Flutter and database with Firestorage
              and hosted using Firebase
            </p>
            <div className={styles.buttonContainer}>
              <a
                href="https://chatapp-2afaa.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.animatedButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className={styles.text}>Live</span>
                <span className={styles.circle}></span>
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr1}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/red0074/chatapp.git"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.animatedButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className={styles.text}>Code</span>
                <span className={styles.circle}></span>
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr1}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src={todo} alt="ToDo-Striker" />
          <div className={styles.cardContent}>
            <h3>ToDo-Striker</h3>
            <p>
              Flutter Todolist android application with local storage called
              hive
            </p>
            <div className={styles.buttonContainer}>
              <a
                href="https://jumpshare.com/s/jD4f4v9bXSzU7rtQ71nj"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.animatedButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className={styles.text}>Live</span>
                <span className={styles.circle}></span>
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr1}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/red0074/todo-app.git"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.animatedButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className={styles.text}>Code</span>
                <span className={styles.circle}></span>
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr1}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src={tictactoe} alt="Tic Tac Toe" />
          <div className={styles.cardContent}>
            <h3>Tic Tac Toe</h3>
            <p>A Simple JavaScript game application</p>
            <div className={styles.buttonContainer}>
              <a
                href="https://tic-tac-toe-red9tx.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.animatedButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className={styles.text}>Live</span>
                <span className={styles.circle}></span>
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr1}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/red0074/tic-tac-toe.git"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.animatedButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className={styles.text}>Code</span>
                <span className={styles.circle}></span>
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr1}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src={rockpaper} alt="Tic Tac Toe" />
          <div className={styles.cardContent}>
            <h3>Rock Paper Scissor</h3>
            <p>A Simple JavaScript game application with js function</p>
            <div className={styles.buttonContainer}>
              <a
                href="https://rock-papaer-scissor-red9tx.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.animatedButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className={styles.text}>Live</span>
                <span className={styles.circle}></span>
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr1}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/red0074/rock-paper-scissor"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.animatedButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className={styles.text}>Code</span>
                <span className={styles.circle}></span>
                <svg
                  viewBox="0 0 24 24"
                  className={styles.arr1}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
