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

              <i className="bi bi-github"></i>

              <i className="bi bi-twitter"></i>

              <i className="bi bi-linkedin"></i>

            </div>

          </div>

          <div className="col-md-4">

            <h3>Liens utiles</h3>

            <p>Accueil</p>

            <p>Services</p>

            <p>Portfolio</p>

            <p>Me contacter</p>

            <p>Mentions légales</p>

          </div>

          <div className="col-md-4">

            <h3>Mes dernières réalisations</h3>

            <p>Fresh Food</p>

            <p>Restaurant Akira</p>

            <p>Espace bien-être</p>

            <p>SEO</p>

            <p>Création d'une API</p>

            <p>Maquette d’un site</p>

          </div>

        </div>

      </div>

    </footer>

  );
}

export default Footer;