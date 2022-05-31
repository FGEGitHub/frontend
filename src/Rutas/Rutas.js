import NotFound from '../Paginas/Notfound';
import Login from '../Paginas/Login';
import Dashboard from '../Paginas/Dashboard';
import Lista from '../Paginas/Lista';


const user = {}


const Rutas = [

	{path: '/login',
	 element: (<Login />)},
	{ path: '/lista', element: <Lista /> },

	{ path: '/dashboard', element: <Dashboard /> },


	/* 	{	path: '/',	element: <NotFound />
		}, */
];

export default Rutas;