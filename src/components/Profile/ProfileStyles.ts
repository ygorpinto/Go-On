import styled from 'styled-components'

export const ProfileStyles = styled.div`

.profileContainer{
    display:flex;
    align-items:center;
}

.profileContainer > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
}

.profileContainer > div {
    margin-left: 1.5rem;
}

.profileContainer div strong {
    font-size:1.5rem;
    font-weight: 600;
    color:${props=>props.theme.color.title};
}

.profileContainer div strong {
    font-size:1rem;
    margin-top:0.5rem;
}

.profileContainer div p img {
    margin-right: 0.5rem;
}
`