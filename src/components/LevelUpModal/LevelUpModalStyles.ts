import styled from 'styled-components'

export const LevelUpModalStyles = styled.div`
.overlay {
    background: rgba(242,243,245,0.8);
    position:fixed;
    top:0;
    bottom:0;
    left: 0;
    right: 0;

    display:flex;
    justify-content: center;
    align-items: center;
}

.container{
    background:${props=>props.theme.color.white};
    width:100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0,0,0,0.05);
    text-align: center;
    position: relative;
}

.container header{
    font-size: 8.75rem;
    font-weight: 600;
    color:${props=>props.theme.color.blue};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
}

.container strong{
    font-size: 2.25rem;
    color: ${props=>props.theme.color.title};

}

.container strong{
    font-size: 1.25rem;
    color: ${props=>props.theme.color.text};
    margin-top: 0.25;
}

.container button{
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: none;
    border: 0;
    font-size: 0px;
}
`