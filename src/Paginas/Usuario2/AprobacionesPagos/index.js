import * as React from 'react';
import  { useEffect, useState } from "react";

import BarraLAteral from '../../../components/MenuIzq2'
import { useNavigate } from "react-router-dom";
import TablaAprobacionesPagos from '../../../components/TablaAprobacionesPagos';

const drawerWidth = 240;

export default function MenuUsuario2() {
  const navigate = useNavigate();



  useEffect(() => {


  }, [])

  

  let path =''


  
  
  return (
 <BarraLAteral>
<TablaAprobacionesPagos/>
 </BarraLAteral>

  );
}