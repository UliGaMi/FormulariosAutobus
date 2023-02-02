import {Link} from 'react-router-dom';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../atoms/Logo'
import '../../assets/styles/FormSignin.css';


function FormSignin() {
    const form = useRef();
    const navigate = useNavigate();
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        
        let uri = 'http://34.225.239.102/api/registrar/usuario';
        
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
               nombre: formData.get('nombre'),
               usuario: formData.get('usuario'),
               correo: formData.get('correo'),
               contrasenia: formData.get('contraseña'),
            })
        }

        fetch(uri, options)
        .then((response) => response.json())
        .then((data) => {
            alert(data.message)
            if(data.status == true)
            {
                navigate("/");
            }
        
        });
    

        
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
        </div>
     );
}

export default FormSignin;