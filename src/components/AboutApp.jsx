

export const AboutApp = () => {
  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div id="imgAbout" className="rounded float-start" ></div>
          </div>
          <div className="col-md-6 ">
            <h1 id="title">SOBRE NOSOTROS</h1>
            <p id="stitlesP">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita nulla quod, dolorum ipsa qui a
              vero animi magnam veritatis voluptatibus eligendi debitis eos vitae vel suscipit molestias at quis
              laboriosam?
            </p>
            <p id="stitlesP">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero nisi, iste perferendis
              ab facilis amet unde necessitatibus magni ducimus nihil non aperiam, nulla quos? Ad sapiente quos ex saepe
              quod dignissimos laborum, exercitationem cum! Dolores exercitationem optio facere ipsa quam laboriosam, ea
              fugiat vel hic quae voluptate, eius deserunt.</p>
          </div>
        </div>
        <div className="container mt-5 row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 ">
                            <img src="/src/assets/img/Trabajo1.jpg" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="/src/assets/img/Trabajo2.jpg" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="/src/assets/img/Trabajo4.jpg" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    </section>
  );
}