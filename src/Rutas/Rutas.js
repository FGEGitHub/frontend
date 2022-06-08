/* import NotFound from '../Paginas/Notfound'; */
import Login from '../Paginas/Login';
import Dashboard from '../Paginas/Usuario2/Dashboard';
import Lista from '../Paginas/Usuario2/Lista';
import Clientes from '../Paginas/Usuario2/MenuUsuario2';
import Lotes from '../Paginas/Usuario2/Lotes';

import NAvBar from "../components/Navbar";
import Usuario1 from "../Paginas/usuario1/menuusuario1";
///////////

//////////
const user = {} 


const Rutas = [
	 <NAvBar/> ,


	{path: '/login',
	 element: (<Login />)},
	{ path: '/lista', element: <Lista /> },
	{ path: '/usuario2/clientes', element: <Clientes /> },
	{ path: '/usuario2/lotes', element: <Lotes /> },
	{ path: '/usuario/menu', element: < Usuario1 /> },
	{ path: '/dashboard', element: <Dashboard /> },


	/*{	path: '/',	element: <NotFound />
		}, */

];

export default Rutas;