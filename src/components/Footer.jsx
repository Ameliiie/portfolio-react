import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">

            <h3>John Doe</h3>

            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>

            <div className="social-icons">

              <a href="https://github.com/github-john-doe" target="_blank" rel="nofollow noopener noreferrer" >
                <i className="bi bi-github"></i></a>

              <a href="https://twitter.com/johndoe" target="_blank" rel="nofollow noopener noreferrer">
                <i className="bi bi-twitter"></i> </a>

              <a href="https://linkedin.com/in/john-doe" target="_blank" rel="nofollow noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>

            </div>

          </div>

          <div className="col-md-4">

            <h3>Liens utiles</h3>

            <p><Link to="/">Accueil</Link></p>
            <p><Link to="/services">Services</Link></p>
            <p><Link to="/portfolio">Portfolio</Link></p>
            <p><Link to="/contact">Me contacter</Link></p>
            <p><Link to="/mentions-legales">Mentions légales</Link></p>

          </div>

          <div className="col-md-4">

            <h3>Mes dernières réalisations</h3>

            <p><Link to="/portfolio">Fresh Food</Link></p>
            <p><Link to="/portfolio">Restaurant Akira</Link></p>
            <p><Link to="/portfolio">Espace bien-être</Link></p>
            <p><Link to="/portfolio">SEO</Link></p>
            <p><Link to="/portfolio">Création d'une API</Link></p>
            <p><Link to="/portfolio">Maquette d'un site</Link></p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;