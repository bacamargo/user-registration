import { createGlobalStyle } from 'styled-components'

// definição do estilo global da aplicação
const Global = createGlobalStyle`
	* {
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
	}
	
	body {
		margin: 0;
	}
`

export default Global
