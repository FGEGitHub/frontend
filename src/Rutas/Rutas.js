import NotFound from '../Paginas/Notfound';
import Login from '../Paginas/Login';
import Dashboard from '../Paginas/Dashboard';
import Lista from '../Paginas/Lista';
import Menu2 from '../Paginas/Menu2';


const user = {}


const Rutas = [

	{path: '/login',
	 element: (<Login />)},
	{ path: '/lista', element: <Lista /> },
	{ path: '/menu2', element: <Menu2 /> },

	{ path: '/dashboard', element: <Dashboard /> },


	/* 	{	path: '/',	element: <NotFound />
		}, */
];

export default Rutas;