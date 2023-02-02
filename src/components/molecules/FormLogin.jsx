import {Link} from 'react-router-dom';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../atoms/Logo'
import '../../assets/styles/FormLogin.css';

function FormLogin() {
    const form = useRef();
    const navigate = useNavigate();
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        
        let uri = 'http://34.225.239.102/api/iniciar';
        
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
               usuario: formData.get('usuario'),
               contrasenia: formData.get('contraseña')
            })
        }

        fetch(uri, options)
        .then((response) => response.json())
        .then((data) => {
            alert(data.message);
            if(data.status == true)
            {
                navigate("/product");
            }
        });
    

        
    }




    return ( 
        <div className="divFormLn">
            <Logo></Logo>
            <form ref={form} className="formLn">
            <label htmlFor="username">Nombre de usuario:</label>
            <input id="username" name='usuario' type="text" />
            <label htmlFor="password">Contraseña:</label>
            <input id="password" name='contraseña' type="password" />
            <button onClick={handlerClick}>Iniciar sesión</button>
            </form>
            <Link to={'/signin'}>Registrate</Link>
        </div>
     );
}

export default FormLogin;