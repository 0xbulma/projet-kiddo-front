import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="footer">
      <small className="small">
        2022 <FontAwesomeIcon icon={faCopyright} /> <span className="icon">VOD Player</span>
      </small>
    </footer>
  )
}