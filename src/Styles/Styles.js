import styled from 'styled-components'

export const Button = styled.button`
  	border: 0;
    background-color: var(--white);
    color: var(--black);
  ${({ size }) => size !== 'small' ? `
      padding: 7px 35px;
      i{
        margin-right: 5px
      }
      border-radius: 6px;
      box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.10);
    `
    : `
      margin: 1px 5px;
      border-radius: 3px;
      box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.07);
    `
  }
`
