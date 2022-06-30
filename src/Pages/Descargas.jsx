import React from "react";

function Descargas() {
  return (
    <>
    <main>
        <div className="container my-5">
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <h2>Servicio Remoto</h2>
                        <p>Nuestro servicio se basa en reparación remota (por internet) de dispositivos. Para esto es necesario que el cliente descargue el software que utilizamos en Knock&Go.</p>
                    </div>
                    <div className="row">
                        <h2>Descargas</h2>
                        <div className="d-flex justify-content-between">
                            <div className="flex-grow-1 d-flex flex-column align-items-center">
                                <h4 className="text-center"><i className="fa-brands fa-windows fst-normal"></i> Windows</h4>
                                <a href="https://download.anydesk.com/AnyDesk.exe" className="btn btn-primary w-50" download>Descargar</a>
                            </div>
                            <div className="flex-grow-1 d-flex flex-column align-items-center border-start border-end">
                                <h4 className="text-center"><i className="fa-brands fa-apple fst-normal"></i> MacOS</h4>
                                <a href="https://download.anydesk.com/anydesk.dmg" className="btn btn-primary w-50" download>Descargar</a>
                            </div>
                            <div className="flex-grow-1 d-flex flex-column align-items-center">
                                <h4 className="text-center"><i className="fa-brands fa-linux fst-normal"></i> Linux</h4>
                                <a href="https://download.anydesk.com/linux/anydesk_6.2.0-1_amd64.deb" className="btn btn-primary w-50" download>Descargar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 border-start">
                    <div className="ms-3">
                        <h2>Links</h2>
                        <ul className="list-unstyled">
                            <li><a href="#">Instalación Windows.pdf</a></li>
                            <li><a href="#">Instalación MacOS.pdf</a></li>
                            <li><a href="#">Instalación Linux.pdf</a></li>
                            <hr className="mt-2 mb-1" />
                            <li><a href="#">Proceso de Conexión.pdf</a></li>
                            <li><a href="#">Política de Privacidad.pdf</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  );
}

export default Descargas;
