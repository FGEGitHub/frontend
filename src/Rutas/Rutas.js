/* import NotFound from '../Paginas/Notfound'; */
import Login from '../Paginas/Login';
import DetalleCliente from '../Paginas/Usuario2/DetalleCliente';
import Lista from '../Paginas/Usuario2/Lista';
import Clientes from '../Paginas/Usuario2/MenuUsuario2';
import Lotes from '../Paginas/Usuario2/Lotes';
import Agregarcuotas from '../Paginas/Usuario2/AgregarCuotas';
import NAvBar from "../components/Navbar";
import Usuario1 from "../Paginas/usuario1/menuusuario1";
import Aprobaciones from "../Paginas/Aprobaciones"
/////////// Probando usecontxt


//////////



const Rutas = [
	 <NAvBar/> ,


	{path: '/login',element: (<Login />)},
	{ path: '/lista', element: <Lista /> },
	{ path: '/usuario2/clientes', element: <Clientes /> },
	{ path: '/usuario2/lotes', element: <Lotes /> },
	{ path: '/usuario/menu', element: < Usuario1 /> },
	{ path: '/usuario2/detallecliente/:cuil_cuit', element: <DetalleCliente /> },
	{ path: '/usuario2/agregarcuotas/:id', element: <Agregarcuotas /> },
	{ path: '/usuario2/aprobaciones', element: <Aprobaciones /> },


	/*{	path: '/',	element: <NotFound />
		}, */

];

export default Rutas;