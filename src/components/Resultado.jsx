/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from '@emotion/styled';

const Cotizacion = styled.div`
color: #fff;
font-family: 'Lato', sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top: 30px;
border-bottom: 2px solid #FFF;
`

const Texto = styled.p`
font-size: 18px;
display:flex;
justify-content: space-between;
align-content: end;

span{font-weight: 700};
`

const Precio = styled.p`
font-size: 24px;
display:flex;
justify-content: space-between;
align-content: end;

span{margin-left:7rem; font-weight: 700};
`

const Imagen = styled.img`
display: block;
width: 120px;
`

const Resultado = ({ cotizacion }) => {

    const {
        PRICE,
        HIGHDAY,
        LOWDAY,
        CHANGEPCT24HOUR,
        IMAGEURL,
        LASTUPDATE
    } = cotizacion

    return (
        <Cotizacion>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='Imagen cripto' />
            <div>
                <Precio>Precio:<span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día:<span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día:<span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 h: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última actualización:  <span>{LASTUPDATE}</span></Texto>
            </div>
        </Cotizacion>
    )
}

export default Resultado
