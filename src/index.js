import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Layout/Header';

function MainContent() {
    return (
        <>
            <main>
                <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./img/placeholder.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Diagnostico</h2>
                                <p>Realiza un auto-diagnostico en la sección de "Diagnostico", ¡es gratis!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/placeholder.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Descargas</h2>
                                <p>¡Puedes descargar los programas que utilizamos en la sección de "Descargas"!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/placeholder.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>¿Todavía lo estas pensando...?</h2>
                                <p>Puedes leer sobre nuestros valores, misión y mas en la sección de "Nosotros"</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="container my-5">
                    <h3 className="text-center">Lorem</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ex eaque blanditiis aliquam! Beatae aperiam voluptas totam perferendis ab harum incidunt quo aspernatur labore nostrum, suscipit quis corporis rem commodi.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati omnis expedita quo ratione error minus id laudantium, placeat dolore optio exercitationem provident sequi. Maxime nisi dicta est, voluptas officia optio.</p>

                    <h3 className="text-center">Dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corrupti harum dignissimos tenetur voluptatibus animi quibusdam quidem laboriosam facilis, eum dolorum nobis quos iusto cum repellat? Ipsum excepturi magnam quod?</p>

                    <div className="d-flex justify-content-between my-5">
                        <div className="card" style={{width: "18rem"}}>
                            <img src="./img/portrait.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">John Doe</h5>
                                <p className="card-text">Se demoran un poco en dar el servicio pero una vez con el técnico ahi, todo bien!</p>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="./img/portrait.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Juan Pablo</h5>
                                <p className="card-text">Muy weno.</p>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="./img/portrait-french.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Pierre le Baguette</h5>
                                <p className="card-text">Ooh la la, baise moi je suis fatigué!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

function Webpage() {
    return (
        <>
            <Header />
            <MainContent />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Webpage />);