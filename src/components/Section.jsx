import React from 'react'
import styled from 'styled-components'

export const Section = (props) => {
    console.log(props)
    return (
        <Wrap bgImage={props.backgroundImg}>

            <ItemText>
                <h1>{ props.title }</h1>
                <p>{ props. description }</p>
            </ItemText>

            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        { props.leftBtnText }
                    </LeftButton>

                    {/* Si el boton derecho existe entonces lo muestras, pero si rightBtnText = nada entonces lo omites */}
                    { props.rightBtnText && 
                        <RightButton>
                            {props.rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>

        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: not-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    //Para poner el grupo de botones en direccion column cuando la pestaña es mas pequeña
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s; //En index css se especifica el movimiento
`

const Buttons = styled.div`

`