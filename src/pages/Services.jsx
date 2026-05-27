import "../styles/Services.css";
import servicesImage from "../assets/banner.jpg"

function Services() {
  return (

    <section className="services-section">
      <img src={servicesImage} alt="Banner" className="services-image" />

      <div className="container">

        <h1>Mon offre de services</h1>

        <p className="services-subtitle">
          Voici les prestations sur lesquelles je peux intervenir.
        </p>

        <div className="row">

          <div className="col-md-4 d-flex">

            <div className="card service-card">
              <i className="bi bi-pencil service-icon"></i>

              <h2>UX Design</h2>

              <p>
                L'UX Design est une discipline qui consiste à concevoir des produits ( sites Web, applcations mobiles, logiciels, objets connectés etc... )
                en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fuide et agréable possible.
              </p>

            </div>

          </div>

          <div className="col-md-4 d-flex">

            <div className="card service-card">
              <i className="bi bi-code-slash service-icon"></i>

              <h2>Développement web</h2>

              <p>
                Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation
                (HTML , CSS, JavaScript, PHP etc..) et des frameworks ( Bootstrap, React, Angular etc...)
              </p>

            </div>

          </div>

          <div className="col-md-4 d-flex">

            <div className="card service-card">
              <i className="bi bi-search service-icon"></i>

              <h2>Référencement</h2>

              <p>
                Le référencement naturel ( SEO ) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche
                ( Google, Bing, Yahoo, etc. ). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;