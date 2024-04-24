


export const HomeApp = () => {
    return (
        <>
            <section>
                <div className="container mt-5">
                    <h1 id="title">Quienes Confian en Nosotros</h1>
                </div>
                <div className="container mt-5">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/src/assets/img/Trabajo12.jpg" className="d-block w-100"  />
                            </div>
                            <div className="carousel-item">
                                <img src="/src/assets/img/Trabajo9.jpg" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="/src/assets/img/Trabajo10.jpg" className="d-block w-100" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

        </>

    );
}

