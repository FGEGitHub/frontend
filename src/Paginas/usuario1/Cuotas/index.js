


import Navbar from '../../../components/Navbar'
import  useUser from '../../../hooks/useUser'
import LotesCuotas from '../../../components/usuario1/LotesCuotas '





export default function Transferencias() {
    const usuario  = useUser().userContext
    console.log(usuario)

    return (
        <>
            <div className="App">


                <Navbar />
                <LotesCuotas
                cuil_cuit ={usuario.cuil_cuit} />
                

            </div>


        </>
    );

}