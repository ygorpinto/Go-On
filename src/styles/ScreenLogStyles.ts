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
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    button {
        height:2rem;
        width:6rem;
        border:none;
        border-radius:5px;
        background:${props=>props.theme.color.blueDark};
        color:${props=>props.theme.color.text};
    }

}

.signOut{

}
`