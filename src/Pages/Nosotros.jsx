import React from 'react';
import portraitNormal from '../img/portrait.png';

function Nosotros() {
    return(
        <>
            <main>
            <div className="container my-5">
                <h3 className="text-center">Visión</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ex eaque blanditiis aliquam! Beatae aperiam voluptas totam perferendis ab harum incidunt quo aspernatur labore nostrum, suscipit quis corporis rem commodi.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati omnis expedita quo ratione error minus id laudantium, placeat dolore optio exercitationem provident sequi. Maxime nisi dicta est, voluptas officia optio.</p>

                <h3 className="text-center">Misión</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corrupti harum dignissimos tenetur voluptatibus animi quibusdam quidem laboriosam facilis, eum dolorum nobis quos iusto cum repellat? Ipsum excepturi magnam quod?</p>

                <h3 className="text-center">Nuestra historia</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <div className="d-flex justify-content-between my-5">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={portraitNormal} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sebastián Gonzalez</h5>
                            <h3 className="card-text">CEO</h3>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corrupti harum dignissimos tenetur voluptatibus animi quibusdam quidem laboriosam facilis, eum dolorum nobis quos iusto cum repellat? Ipsum excepturi magnam quod?</p>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={portraitNormal} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Bastian Román</h5>
                            <h3 className='card-text'>CEO</h3>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corrupti harum dignissimos tenetur voluptatibus animi quibusdam quidem laboriosam facilis, eum dolorum nobis quos iusto cum repellat? Ipsum excepturi magnam quod?</p>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={portraitNormal} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Joaquín French</h5>
                            <h3 className='card-text'>CEO</h3>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corrupti harum dignissimos tenetur voluptatibus animi quibusdam quidem laboriosam facilis, eum dolorum nobis quos iusto cum repellat? Ipsum excepturi magnam quod?</p>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={portraitNormal} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Giovanni Panini</h5>
                            <h3 className='card-text'>CEO</h3>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corrupti harum dignissimos tenetur voluptatibus animi quibusdam quidem laboriosam facilis, eum dolorum nobis quos iusto cum repellat? Ipsum excepturi magnam quod?</p>
                        </div>
                    </div>
                </div>
            </div>

            </main>
        </>
    )
}

export default Nosotros;