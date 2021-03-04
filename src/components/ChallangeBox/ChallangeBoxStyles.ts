import styled from 'styled-components'

export const ChallangeBoxStyles = styled.div`
.challangeBoxContainer{
    height: 100%;

    background:${props=>props.theme.color.white};
    border-radius: 5px;
    box-shadow: 0 0 68px rgba(0,0,0,0.05);
    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.challangeNotActive{
    display:flex;
    flex-direction: column;
    align-items: center;
}

.challangeNotActive strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
}

.challangeNotActive p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top:3rem;
}

.challangeNotActive img {
    margin-bottom: 1rem;
}

.challangeActive {
    height: 100%;

    display: flex;
    flex-direction: column;
}

.challangeActive header {
    display: flex;
    justify-content: center;
    color:var(--blue);
    font-weight: 600;
    font-size:1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: ${props => props.theme.color.grayLine};
}

.challangeActive main {
    flex:1;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.challangeActive main strong{
    font-size: 2rem;
    font-weight: 600;
    color:${props=>props.theme.color.title};
    margin: 1.5rem 0 1rem;
}

.challangeActive main p{
    line-height: 1.5;
}

.challangeActive footer {
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:1rem;
}

.challangeActive footer button {
    height: 3rem;

    display:flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    color:${props=>props.theme.color.white};

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.3s;
}

.challangeActive footer button.challangeFailedButton{
    background:${props=>props.theme.color.red};
}

.challangeActive footer button.challangeSucceededButton{
background:${props=>props.theme.color.green};
}

.challangeActive footer button:hover {
filter:brightness(0.9);
}

`