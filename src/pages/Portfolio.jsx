import "../styles/Portfolio.css";
import portfolioBanner from "../assets/banner.jpg";
import portfolioFresh from "../assets/portfolio/fresh-food.jpg"
import portfolioAkira from "../assets/portfolio/restaurant-japonais.jpg"
import portfolioBienEtre from "../assets/portfolio/espace-bien-etre.jpg"
import portfolioSeo from "../assets/portfolio/seo.jpg"
import portfolioApi from "../assets/portfolio/screens.jpg"
import portfolioMaquette from "../assets/portfolio/coder.jpg"
function Portfolio() {
  return (

    <section className="portfolio-section">

      <img
        src={portfolioBanner}
        alt="Banner"
        className="portfolio-image"/>

      <div className="container">

        <h1>Portfolio</h1>

        <p className="portfolio-subtitle">
          Voici quelques-unes de mes réalisations.</p>

        <div className="container">
          <div className="row g-4">
            <div className="col-md-4 d-flex">
              <div className="card portfolio-card">

                <img
                  src={portfolioFresh} alt="Fresh Food" className="card-img-top"/>

                <div className="card-body">

                  <h2>Fresh Food</h2>
                  <p>Site de vente de produits frais en ligne</p>

                  <button className="btn btn-primary"> Voir le site </button>

                </div>
              </div>
            </div>
           <div className="col-md-4 d-flex">
              <div className="card portfolio-card">

                <img src={portfolioAkira} alt="Restaurant Akira" className="card-img-top"/>

                <div className="card-body">

                  <h2>Restaurant Akira</h2>

                  <p> Site de vente de produits frais en ligne </p>

                  <button className="btn btn-primary"> Voir le site </button>

                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="card portfolio-card">

                <img src={portfolioBienEtre} alt="Espace bien-être"className="card-img-top" />

                <div className="card-body">

                  <h2>Espace bien-être</h2>
                  <p>Site de vente de produits frais en ligne</p>

                  <button className="btn btn-primary">Voir le site </button>

                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="card portfolio-card">

                <img src={portfolioSeo} alt="SEO" className="card-img-top"/>

                <div className="card-body">

                  <h2>SEO</h2>

                  <p> Amélioration du référencement d’un site e-commerce </p>

                  <button className="btn btn-primary"> Voir le site</button>

                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="card portfolio-card">

                <img src={portfolioApi} alt="Création API" className="card-img-top" />

                <div className="card-body">

                  <h2>Création d'une API</h2>

                  <p> Création d’une API RESTFULL publique </p>

                  <button className="btn btn-primary">Voir le site </button>

                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="card portfolio-card">

                <img src={portfolioMaquette} alt="Maquette site web" className="card-img-top"/>

                <div className="card-body">

                  <h2>Maquette d'un site web</h2>

                  <p> Création du prototype d’un site</p>

                  <button className="btn btn-primary"> Voir le site</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Portfolio;