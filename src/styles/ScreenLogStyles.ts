import styled from 'styled-components'

export const ScreenLogStyles = styled.div`

.signInContainer{
    
    background-image: url("/ngDdte.jpg");

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
    background:rgba(0,0,0,0.25);
}

    h1{
        font-family: 'Montserrat', sans-serif;
        font-size:1.3rem;
    }

    p{
        font-family: 'Montserrat', sans-serif;
        margin-top:1rem;
        font-size:0.9rem;
    }

    button {
        font-family: 'Montserrat', sans-serif;
        display:flex;
        justify-content:space-around;
        align-items:center;
        margin-top:1rem;
        height:2rem;
        width:6rem;
        border:none;
        border-radius:5px;
        background:${props=>props.theme.color.black};
        color:${props=>props.theme.color.text};

        img{
            max-width:20%;
        }
    }

}

.signOut{
    button {
        position:absolute;
        margin-left:1%;
        margin-top:1.5%;
        height:0.3rem;
        width:2rem;
        border:none;
        border-radius:5px;
        background:none;
        color:${props=>props.theme.color.text};

        img {
            min-width:1.5rem;
        }
    }
}
`