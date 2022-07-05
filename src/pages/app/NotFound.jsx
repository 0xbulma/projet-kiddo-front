export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound__content">
        <div className="notfound__content-flex">
          {/* <span className="notfound__content--error">
            404
          </span>
          <span className="notfound__content--error-back hidden">
            404
          </span> */}
          <img src="404.svg" alt="404" className="notfound__content--img" />
          <span className="notfound__content--title">
            Désolé la page est introuvable
          </span>
        </div>
        <div className="notfound__content--link">
          <a href="/" className='notfound__content--link__text-link'>
            <img src="logo.svg" alt="kiddo logo" />
          </a>
        </div>
      </div>
    </section>
  )
}