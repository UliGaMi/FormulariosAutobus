import {Link} from 'react-router-dom';
import Logo from '../atoms/Logo'
import '../../assets/styles/FormLogin.css';

function FormLogin() {
    return ( 
        <div className="divFormLn">
            <Logo></Logo>
            <form className="formLn">
            <label htmlFor="username">Nombre de usuario:</label>
            <input id="username" type="text" />
            <label htmlFor="password">Contraseña:</label>
            <input id="password" type="password" />
            <button>Iniciar sesión</button>
            </form>
            <Link to={'/signin'}>Registrate</Link>
            <Link to={'/product'}>Registra un autobus</Link>
        </div>
     );
}

export default FormLogin;