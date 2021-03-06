import styled from 'styled-components'

export const CompleteChallangesStyles = styled.div`

.completedChallangesContainer{
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin:0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #d7d8da;

    font-weight: 500;
}

.completedChallangesContainer span:first-child {
  font-size: 1.25rem;
}

.completedChallangesContainer span:last-child {
    font-size: 1.5rem;
  }

`