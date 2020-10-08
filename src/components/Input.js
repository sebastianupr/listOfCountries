import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.label`
  display: inline-flex;
  background: white;
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, .05);
  border-radius: 5px;
  padding: 0 2rem;
  i{
    margin-right: 1em;
    color: #C4C4C4;
  }
  input{
    flex:1;
    height: 48px;
    line-height: 48px;
    border:none;
    font-size: .9em;
    outline: 0;
    &::-webkit-input-placeholder {
      color: #C4C4C4;
    }
  }
`

export default function Input({searchCountry}) {
  return (
    <InputStyled>
    <i class="fas fa-search"></i>
      <input 
        placeholder="Search a country"
        type="text" 
        onChange={e=>searchCountry(e.target.value)}
      />
    </InputStyled>
  )
}
