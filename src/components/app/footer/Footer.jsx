import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

import './_footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <small className="small">
        2022 <FontAwesomeIcon icon={faCopyright} /> <span className="icon">Kiddo App</span>
      </small>
    </footer>
  )
}