import React from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap'

// recebe um grupo de entradas, com id, placeholder, valor de pesquisa e o valor relativos ao usuário
const DropUp = ({ id, placeholder, search, value }) =>
	<InputGroup>
    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
    <Input id={ id }
     	value={ value }
    	placeholder={ placeholder }
    	onChange={ ({ target }) => search(target.value)} />
   </InputGroup>

export default DropUp