import "../styles/Home.css";
import aboutImage from "../assets/john-doe-about.jpg";

function Home() {
  return (
    <>

      <section className="hero-section">

        <h1>Bonjour, je suis John Doe</h1>

        <h2>Développeur web full stack</h2>

        <button className="hero-button">
          En savoir plus
        </button>

      </section>

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
                    className="progress-bar bg-danger"
                    style={{ width: "90%" }} ></div>

                </div>

                <li>CSS3 80%</li>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "80%" }}></div>
                </div>

                <li>JavaScript 70%</li>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "70%" }}></div>
                </div>
                
                <li>PHP 60%</li>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "60%" }}></div>
                </div>
                
                <li>React 50%</li>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "50%" }}></div>
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