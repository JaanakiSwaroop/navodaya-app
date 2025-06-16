import './ListGroup.css'; // Import the CSS file

function ListGroup() {
  return (
    <div className="navbar-custom">
      <div className="navbar-brand">Navodaya Kalyana Mandapam</div>
      <ul className="navbar-links">
        <li><a href="#info">Info</a></li>
        <li><a href="#location">Location</a></li>
      </ul>
    </div>
  );
}

export default ListGroup;
