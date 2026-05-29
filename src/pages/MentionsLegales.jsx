import "../styles/Mentions-legales.css"
import { Helmet } from "react-helmet";

function MentionsLegales() {
  return (
  <>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    <section className="mentions-section">
      <h1>Mentions légales</h1>
      <div className="mentions-line"></div>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">

          <h2 className="accordion-header">

            <button className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne" >
              Éditeur du site
            </button>

          </h2>

          <div id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample">


            <div className="accordion-body">

              <h3>John Doe</h3>
              <p>40 rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>10 20 30 40 50</p>
              <p>john.doe@gmail.com</p>

            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">

          <h2 className="accordion-header">

            <button className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" >
              Hébergeur
            </button>

          </h2>

          <div id="collapseTwo"
            className="accordion-collapse collapse "
            data-bs-parent="#accordionExample">


            <div className="accordion-body">

              <h3>alwaysdata</h3>
              <p>91 Rue du Faubourg Saint honoré, 75008 Paris </p>
              <p>69009 Lyon, France</p>
              <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer"> www.alwaysdata.com </a>

            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">

          <h2 className="accordion-header">

            <button className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree" >
              Crédit
            </button>

          </h2>

          <div id="collapseThree"
            className="accordion-collapse collapse "
            data-bs-parent="#accordionExample">


            <div className="accordion-body">

              <h3>Crédits</h3>
              <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer"> Centre Européen de formation  </a> </p>
              <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer">Pixabay </a></p>
              <p>Le favicon fourni de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noopener noreferrer"> John doe Icon erstellt von Freepik - Flaticon </a> </p>

            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  );
}


export default MentionsLegales;