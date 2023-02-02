import {useRef} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/FormProduct.css';
import Logo from '../atoms/Logo'

function FormProduct() {
    const form = useRef();
    
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        console.log(String(Math.floor(Math.random() * (9999 - 1000) + 1000)));
        
        let uri = 'http://34.225.239.102/api/autobus/register';
        
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
               clave: formData.get('clave'),
               placa: formData.get('placa'),
               numasientos: formData.get('asientos'),
               fecha: formData.get('fecha'),
               tipo: formData.get('tipo'),
               nombre: formData.get('chofer'),
               licencia:  String(Math.floor(Math.random() * (9999 - 1000) + 1000))
            })
        }

        fetch(uri, options)
        .then((response) => response.json())
        .then((data) => {alert(data.message)});
    

        
    }
    

    return ( 
        <div className="divFormReg">
            <Logo></Logo>
            <form ref={form} className="formReg">
            <label htmlFor="clave">Clave autobus:</label>
            <input id="clave" name='clave' type="text" />
            <label htmlFor="placa">Placa autobus:</label>
            <input id="placa" name='placa' type="text" />
            <label htmlFor="asientos">Número de asiento:</label>
            <input id="asientos" name='asientos' type="number" />
            <label htmlFor="fecha">Fecha de alta:</label>
            <input id="fecha" name='fecha' type="date" />
            <label htmlFor="chofer">Nombre chofer:</label>
            <input id="chofer" name='chofer' type="text" />
            <label>Tipo:</label>
            <select name='tipo'>
                <option value="Turismo">Turismo</option>
                <option value="Lujo">Lujo</option>
            </select>
            <button onClick={handlerClick}>Registrar</button>
            </form>
            <Link to={'/'}>Inicia sesión</Link>
            <Link to={'/signin'}>Registrate</Link>

        </div>
    );
}

export default FormProduct;