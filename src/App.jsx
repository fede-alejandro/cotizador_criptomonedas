/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import bitcoin from './img/bitcoin.png';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #FF6633;
    display: block;
    margin: 10px auto 0 auto;
  }
  `

const Contenedor = styled.div`
  max-width: 900px;
  max-height: 900px;
  margin: 0 auto;
  width: 90%;
  height:90%;
  
  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }`

const Imagen = styled.img`
  max-width: 300px;
  width:80%;
  margin: 100px auto 0 auto;
  display: block;
  border-radius: 40px;
  `
function App() {

  const [monedas, setMonedas] = useState({});
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {

      const cotizarCripto = async () => {
        setCargando(true)
        setCotizacion({})
        const { moneda, criptoMoneda } = monedas

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setCotizacion(resultado.DISPLAY[criptoMoneda][moneda])
        setCargando(false)
      }
      cotizarCripto(cotizacion)
    }
  }, [monedas])


  return (
    <Contenedor>
      <Imagen src={bitcoin} alt='Imagen criptomoneadas' />

      <div>
        <Heading>Cotización de criptomonedas</Heading>

        <Formulario setMonedas={setMonedas} />

        {cargando && <Spinner />}
        {cotizacion.PRICE && <Resultado cotizacion={cotizacion} />}
      </div>
    </Contenedor>
  )
}

export default App
