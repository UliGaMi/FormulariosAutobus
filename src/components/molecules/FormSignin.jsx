import {Link} from 'react-router-dom';
import {useRef} from 'react';
import Logo from '../atoms/Logo'
import '../../assets/styles/FormSignin.css';


function FormSignin() {
    const form = useRef();
    
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        console.log();
        
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
        <div className='divFormSn'>
            <Logo></Logo>
            <form ref={form} className="formSn">
            <label htmlFor="name">Nombre:</label>
            <input id="name" name='nombre' type="text" />
            <label htmlFor="username">Nombre de usuario:</label>
            <input id="username" name='usuario' type="text" />
            <label htmlFor="email">Correo:</label>
            <input id="email" name='correo' type="email" />
            <label htmlFor="password">Contraseña:</label>
            <input id="password" name='contraseña' type="password" />
            <button onClick={handlerClick}>Registrarse</button>
            </form>
            <Link to={'/'}>Inicia sesión</Link>
            <Link to={'/product'}>Registra un autobus</Link>
        </div>
     );
}

export default FormSignin;