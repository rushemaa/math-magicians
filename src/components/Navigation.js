import { Link } from 'react-router-dom';
import '../css/Nav.css';

export default function Navigation() {
  return (
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
