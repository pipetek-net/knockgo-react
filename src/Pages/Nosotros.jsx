import React from 'react';
import portraitNormal from '../img/portrait.png';

function Nosotros() {
    return(
        <>
        <main>
            <div className="container my-5">
                <h3 className="text-center">Ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem impedit quaerat sit veritatis totam qui exercitationem maiores veniam ipsum iste non minima obcaecati numquam ea, magnam nemo labore ut vel.</p>
            </div>
            <div style={{backgroundColor: "#f0f0f0"}}>
                <div className="container">
                    <div className="d-flex align-items-center gap-5 py-5">
                    <img src={portraitNormal} alt="" srcset="" />
                        <div>
                            <h3>Lorem</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsum consequuntur? Minima, beatae sit! Aliquam consequuntur architecto earum eum dolorem tempore nihil repellat. Sint expedita recusandae quo debitis nostrum officiis?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{backgroundColor: "#e8e8e8"}}>
                <div className="container">
                    <div className="d-flex align-items-center gap-5 py-5">
                        <div>
                            <h3>Dolor</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident libero iusto nulla nemo harum alias dolor quod? Dolorum magnam consectetur odio explicabo hic illum vitae necessitatibus voluptatibus nihil numquam.</p>
                        </div>
                        <img src={portraitNormal} alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: "#e0e0e0"}}>
                <div className="container">
                    <div className="d-flex align-items-center gap-5 py-5">
                        <img src={portraitNormal} alt="" srcset="" />
                        <div>
                            <h3>Amet</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi totam libero, ipsum eum placeat? Autem eum exercitationem aut totam ad, ratione cum. Necessitatibus ducimus aliquid accusantium culpa maxime tempora.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{backgroundColor: "#d8d8d8"}}>
                <div className="container">
                    <div className="d-flex align-items-center gap-5 py-5">
                        <div>
                            <h3>Consectetur</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci laboriosam obcaecati quis illum soluta possimus ipsum iusto odit, quod harum. Rerum necessitatibus esse cum, explicabo doloribus fugit possimus facilis! Vel.</p>
                        </div>
                       <img src={portraitNormal} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Nosotros;