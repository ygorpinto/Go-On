import styled from 'styled-components'

export const ScreenLogStyles = styled.div`

.signInContainer{
    
    height:100vh;
    width:auto;
    
    display:flex;
    align-items:center;
    justify-content:center;
}

.signIn{
    height:30vh;
    width:30%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    box-shadow:5px 5px rgba(0,0,0,0.05);
    backdrop-filter:blur(5px);
    border-radius:1rem;
    background:${props=>props.theme.color.darkGray}
}

    button {
        margin-top:2rem;
        height:2rem;
        width:6rem;
        border:none;
        border-radius:5px;
        background:${props=>props.theme.color.black};
        color:${props=>props.theme.color.text};
    }

}

.signOut{
    button {
        position:absolute;
        margin-left:1%;
        margin-top:1%;
        height:0.3rem;
        width:2rem;
        border:none;
        border-radius:5px;
        background:none;
        color:${props=>props.theme.color.text};
    }
}
`