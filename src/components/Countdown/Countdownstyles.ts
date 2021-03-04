import styled from 'styled-components'

export const CountdownStyles = styled.div`
.countdownContainer{
    display:flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color:${props=>props.theme.color.title};
}

.countdownContainer > div {
    flex:1;

    display:flex;
    align-items: center;
    justify-content: space-evenly;

    background:${props=>props.theme.color.white};
    box-shadow: 0 0 60px rgba(0,0,0,0.05);
    border-radius: 5px;
    font-size:8.5rem;
    text-align: center;
}

.countdownContainer > div span {
    flex:1;
}

.countdownContainer > div span:first-child{
    border-right: 1px solid #f0f1f3;
}

.countdownContainer > div span:first-child{
    border-left: 1px solid #f0f1f3;
}

.countdownContainer > span {
    font-size: 6.25rem;
    margin:0 0.5rem;
}

.countdownButton{
    width:100%;
    height: 5rem;

    margin-top:2rem;

    display:flex;
    align-items: center;
    justify-content: center;

    border:0;
    border-radius: 5px;

    background: ${props=>props.theme.color.blue};
    color:${props=>props.theme.color.white};

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 0.2s;

}

.countdownButton:not(:disabled):hover{
    background:${props=>props.theme.color.blueDark};
}

.countdownButtonActive{
    background:${props=>props.theme.color.white};
    color:${props=>props.theme.color.title};
}

.countdownButtonActive:not(:disabled):hover{
    color:${props=>props.theme.color.white};
    background:${props=>props.theme.color.red};
}

.countdownButton:disabled{
    background:${props=>props.theme.color.white};
    color:${props=>props.theme.color.text};
    cursor: not-allowed;
}
`