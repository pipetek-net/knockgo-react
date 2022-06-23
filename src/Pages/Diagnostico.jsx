import React from 'react';

function UpdateDeviceType() {
    var deviceType = document.getElementById('deviceType');
    var deviceBrand = document.getElementById('deviceBrand');
    var detailType = document.getElementById('detailType');
    var detailTypeText = document.getElementById('detailTypeText');

    if (deviceType.value === 'none') {
        deviceBrand.setAttribute('disabled', '');
        deviceBrand.innerHTML = '<option value="none">Selecciona una opcion...</option>'
        
        detailType.removeAttribute('value');
        detailTypeText.innerHTML = 'N/A';
        detailTypeText.className = 'text-secondary';
    }
    else {
        deviceBrand.removeAttribute('disabled');
        detailType.setAttribute('value', deviceType.value);
        detailTypeText.innerHTML = deviceType.value.charAt(0).toUpperCase() + deviceType.value.slice(1);
        detailTypeText.className = 'text-primary';

        switch(deviceType.value)
        {
            case 'computador':
                deviceBrand.innerHTML = '<option value="none">Selecciona una opcion...</option><option value="acer">Acer</option><option value="apple">Apple</option><option value="asus">Asus</option><option value="dell">Dell</option><option value="gear">Gear</option><option value="gigabyte">Gigabyte</option><option value="google">Google</option><option value="hp">HP</option><option value="huawei">Huawei</option><option value="lenovo">Lenovo</option><option value="microsoft">Microsoft</option><option value="msi">MSI</option><option value="samsung">Samsung</option><option value="toshiba">Toshiba</option>';
                break;
            case 'telefono':
                deviceBrand.innerHTML = '<option value="none">Selecciona una opcion...</option><option value="alcatel">Alcatel</option><option value="apple">Apple</option><option value="google">Google</option><option value="huawei">Huawei</option><option value="lg">LG</option><option value="motorola">Motorola</option><option value="nokia">Nokia</option><option value="oneplus">OnePlus</option><option value="oppo">Oppo</option><option value="samsung">Samsung</option><option value="Sony">Sony</option><option value="vivo">Vivo</option><option value="Xiaomi">Xiaomi</option><option value="zte">ZTE</option>';
                break;
        }
    }
    UpdateDeviceBrand();
}

function UpdateDeviceBrand() {
    var deviceType = document.getElementById('deviceType');
    var deviceBrand = document.getElementById('deviceBrand');
    var deviceCategory = document.getElementById('deviceCategory');
    var detailBrand = document.getElementById('detailBrand');
    var detailBrandText = document.getElementById('detailBrandText');

    var issuesBase = '<optgroup label="Problemas Generales"><option value="none">Selecciona una opcion...</option><option value="audio">Audio</option><option value="bateria">Bateria</option><option value="encendido">Encendido</option><option value="internet">Internet</option><option value="pantalla">Pantalla</option><option value="velocidad">Velocidad</option></optgroup>';
    var issuesType;
    var issuesBrand;

    if (deviceBrand.value === 'none') {
        deviceCategory.setAttribute('disabled', '');
        deviceCategory.innerHTML = '<option value="none">Selecciona una opcion...</option>'
        
        detailBrand.removeAttribute('value');
        detailBrandText.innerHTML = 'N/A';
    }
    else {
        deviceCategory.removeAttribute('disabled');
        detailBrand.setAttribute('value', deviceBrand.value);
        detailBrandText.innerHTML = deviceBrand.value.charAt(0).toUpperCase() + deviceBrand.value.slice(1);

        if (deviceType.value === 'computador') {
            issuesType = '<option value="temperatura">Temperatura</option>';
            switch (deviceBrand.value)
            {
                case 'apple':
                    issuesBrand = '<option value="actualizacion">Actualizacion</option>';
                    break;
                case 'google':
                    issuesBrand = '<option value="actualizacion">Actualizacion</option>';
                    break;
                default:
                    issuesBrand = '<option value="actualizacion">Actualizacion</option><option value="licencia">Licencia</option>';
                    break;
            }
        }
        else if (deviceType.value === 'telefono') {
            issuesType = '<option value="camara">Camara</option>';
            switch (deviceBrand.value)
            {
                case 'apple':
                    issuesBrand = '<option value="appstore">AppStore</option><option value="faceid">FaceID</option>';
                    break;
                case 'huawei':
                    issuesBrand = '<option value="appgallery">AppGallery</option><option value="YouTube">YouTube</option>'
                    break;
                case 'samsung':
                    issuesBrand = '<option value="knox">Knox</option><option value="playstore">PlayStore</option>'
                    break;
                default:
                    issuesBrand = '<option value="playstore">PlayStore</option>';
                    break;
            }
        }
        deviceCategory.innerHTML = issuesBase + '<optgroup label="Problemas Especificos">' + issuesType + issuesBrand + '</optgroup>';
    }
    UpdateDeviceCategory();
}

function UpdateDeviceCategory() {
    var deviceCategory = document.getElementById('deviceCategory');
    var detailCategory = document.getElementById('detailCategory');
    var detailCategoryText = document.getElementById('detailCategoryText');

    if (deviceCategory.value === 'none') {
        detailCategory.removeAttribute('value');
        detailCategoryText.innerHTML = 'N/A';
    }
    else {
        deviceCategory.removeAttribute('disabled');
        detailCategory.setAttribute('value', deviceCategory.value);
        detailCategoryText.innerHTML = deviceCategory.value.charAt(0).toUpperCase() + deviceCategory.value.slice(1);
    }
}

function UpdateDeviceOther() {
    var deviceOther = document.getElementById('deviceOther');
    var detailOther = document.getElementById('detailOther');
    var detailOtherText = document.getElementById('detailOtherText');

    if (deviceOther.value === '') {
        detailOther.removeAttribute('value');
        detailOtherText.innerHTML = 'N/A';
    }
    else {
        detailOther.setAttribute('value', deviceOther.value);
        detailOtherText.innerHTML = deviceOther.value;
    }
}

function Diagnostico() {
    return(
        <>
            <main>
                <div className="container my-5">
                    <h1 className="mb-4 pb-3 border-bottom border-dark border-1">Diagnostico, <strong>¡es gratis!</strong></h1>
                    <div className="row">
                        <div className="col-8">
                            <form action="" method="get">
                                <div className="mb-3">
                                    <label htmlFor="deviceType">¿Con que tipo de dispositivo esta teniendo problemas?</label>
                                    <select id="deviceType" className="form-select" name="deviceType" onChange={UpdateDeviceType}>
                                        <option value="none">Selecciona una opcion...</option>
                                        <option value="computador">Computador</option>
                                        <option value="telefono">Telefono</option>
                                    </select>
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">¿Que marca es el dispositivo?</label>
                                    <select id="deviceBrand" className="form-select" name="deviceBrand" onChange={UpdateDeviceBrand} disabled>
                                        <option value="none">Selecciona una opcion...</option>
                                    </select>
                                </div>
                                <div className="my-3">
                                    <label htmlFor="deviceCategory">¿Que tipo de problema tiene?</label>
                                    <select id="deviceCategory" className="form-select" name="deviceCategory" onChange={UpdateDeviceCategory} disabled>
                                        <option value="none">Selecciona una opcion...</option>
                                    </select>
                                </div>
                                <div className="my-3">
                                    <label htmlFor="deviceOther">Si desea agregar mas informacion, porfavor escribala aqui:</label>
                                    <textarea id="deviceOther" className="form-control w-100 h-25" name="deviceOther" onChange={UpdateDeviceOther}></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="col-4 d-flex flex-column justify-content-between p-3 border border-1 border-grey rounded-3 bg-dark bg-opacity-10">
                            <div>
                                <div className="mb-4">
                                    <h2 className="mb-0">Detalle</h2>
                                    <data>
                                        <option id="detailType">Tipo: <em id="detailTypeText" className="text-secondary">N/A</em></option>
                                        <option id="detailBrand">Marca: <em id="detailBrandText" className="text-secondary">N/A</em></option>
                                        <option id="detailCategory">Categoria: <em id="detailCategoryText" className="text-secondary">N/A</em></option>
                                        <option id="detailOther">Notas: <em id="detailOtherText" className="text-secondary">N/A</em></option>
                                    </data>
                                </div>
                                <div>
                                    <div className="my-4">
                                        <h3 className="mb-0 fs-5">Posibles soluciones:</h3>
                                        <ol>
                                            <li>Similique quaerat assumenda ea nemo asperiores eos fuga ratione quis quisquam modi...</li>
                                            <li>Placeat commodi, libero sequi vitae natus dolorem? Magnam aspernatur reiciendis culpa...</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <h3 className="mb-0 fs-5">¿Necesitas ayuda?</h3>
                                <p>No hay problema, ¡ayudar es nuestro negocio!</p>
                                <div className="text-center fs-6 mb-2 lh-sm">
                                    <h4 className="mb-0">Precio estimado:</h4>
                                    <span className="fs-2">$55.500</span>
                                </div>
                                <button type="submit" className="btn btn-primary fs-3">¡Contratanos!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Diagnostico;