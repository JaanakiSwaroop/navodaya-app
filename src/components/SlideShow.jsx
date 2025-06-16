function SlideShow() {
  return (
    <div id="carouselExampleControls" className="carousel slide mb-4" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 rounded" src="./images/img1.jpeg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 rounded" src="./images/img2.jpeg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 rounded" src="./images/img3.jpeg" alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default SlideShow;
