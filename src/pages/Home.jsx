import { useEffect, useState } from "react";
import "../styles/Home.css";
import aboutImage from "../assets/john-doe-about.jpg";
import { FaUser, FaMapMarkerAlt, FaBook, FaUsers } from "react-icons/fa";


function Home() {
  const [githubUser, setGithubUser] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((response) => response.json())
      .then((data) => {
        setGithubUser(data);
      });
  }, []);
  return (
    <>


      <section className="hero-section">

        <h1>Bonjour, je suis John Doe</h1>

        <h2>Développeur web full stack</h2>

        <button
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#githubModal"
        >
          En savoir plus
        </button>


      </section>

      <div
        className="modal fade"
        id="githubModal"
        tabIndex="-1">

        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">

              <h5 className="modal-title"> Mon profil GitHub </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>

            </div>
            <div className="modal-body">

              {githubUser && (

                <div className="row">
                  <div className="col-md-6 row align-items-center">

                    <img
                      src={githubUser.avatar_url}
                      alt={githubUser.name}
                      className="img-fluid rounded  github-avatar" />

                  </div>
                  <div className="col-md-6">

                    <h3> <FaUser /> {githubUser.name}</h3>
                    <hr />
                    <p><FaMapMarkerAlt /> {githubUser.location}</p>
                    <hr />
                    <p> <FaBook /> Repositories : {githubUser.public_repos}</p>
                    <hr />
                    <p> <FaUsers /> Followers : {githubUser.followers}</p>
                    <hr />
                    <p> <FaUsers /> Following : {githubUser.following}</p>

                  </div>
                </div>

              )}

            </div>
            <div className="modal-footer">

              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="about-section">

        <div className="container">
          <div className="row">
            <div className="col-md-6">

              <h2>À propos</h2>
              <img src={aboutImage} alt="John Doe" className="about-image" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Optio, necessitatibus consectetur tempore perferendis
                nostrum ex delectus reiciendis impedit aut iure enim
                placeat? Natus, neque at?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Optio, necessitatibus consectetur tempore perferend!is
                nostrum ex delectus reiciendis impedit aut iure enim
                placeat? Natus, neque at?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Optio, necessitatibus consectetur tempore perferendis
                nostrum ex delectus reiciendis impedit aut iure enim
                placeat? Natus, neque at?
              </p>

            </div>
            <div className="col-md-6">

              <h2>Mes Compétences</h2>

              <ul>

                <li>HTML5 90%</li>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger" style={{ width: "90%" }} ></div>

                </div>

                <li>CSS3 80%</li>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"  style={{ width: "80%" }}></div>
                </div>

                <li>JavaScript 70%</li>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning" style={{ width: "70%" }}></div>
                </div>

                <li>PHP 60%</li>
                <div className="progress">
                  <div
                    className="progress-bar bg-success" style={{ width: "60%" }}></div>
                </div>

                <li>React 50%</li>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary" style={{ width: "50%" }}></div>

                </div>
              </ul>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}

export default Home;