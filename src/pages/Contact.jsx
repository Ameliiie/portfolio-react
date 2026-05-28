import "../styles/Contact.css"

function Contact() {
  return (
    <section className="contact-section">

      <div className="container">

        <h1>Contact</h1>

        <p className="contact-subtitle">
          Pour me contacter en vue d’un entretien ou d’une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <div className="contact-line">

        </div>

        <div className="contact-box">

          <div className="row">

            <div className="col-md-6">

              <h2>Formulaire de contact</h2>

              <form>

                <div className="mb-3">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre nom" />

                </div>
                <div className="mb-3">

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Votre adresse email" />

                </div>
                <div className="mb-3">

                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Votre numéro de téléphone" />

                </div>

                <div className="mb-3">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sujet" />

                </div>
                <div className="mb-3">

                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Votre message"></textarea>

                </div>
                <button className="btn btn-primary">Envoyer</button>

              </form>
            </div>
            <div className="col-md-6">

              <h2>Mes coordonnées</h2>
              <h3>John Doe</h3>

              <p>
                <i className="bi bi-geo-alt "></i>
                 40 Rue Laure Diebold</p>
              <p>
                <i className="bi bi-geo-alt "></i>
                69009 Lyon, France</p>
              <p> 
                <i className="bi bi-telephone "></i>
                 10 20 30 40 50</p>
              <p>   
                <i className="bi bi-envelope "></i>
                 john.doe@gmail.com</p>

              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.630306413567!2d4.796526776885973!3d45.77859877108093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1779983763555!5m2!1sfr!2sfr"
                width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


            </div>
          </div>
        </div>
      </div>

    </section>

  );
}
export default Contact;