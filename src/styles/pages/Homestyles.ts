import styled from 'styled-components'

export const HomeStyles = styled.div`
.container {
    height: 100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 2.5rem 2rem;
  
    display: flex;
    flex-direction: column;
  }

  .container section{
    height: 60vh;
    margin-top:7rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6.25rem;
      align-content: center;
  }
`

