import styled from 'styled-components'

// estilização da página principal com a lista de usuários e responsividade
export const Area = styled.div`
	flex: 1;

	min-width: 250px;
	border-radius: 8px;
	margin: 10px;
	background: linear-gradient(135deg, #3d3d43, #666699);
	padding: 20px;
	border: 1px solid rgba(0, 0, 0, .2);
	box-shadow: 0 1px 5px rgba(0, 0, 0, .15);

	display: flex;
	
`

export const Icon = styled.div`

	display: flex;
	align-items: center;
	margin-left: 10px;

	> i {
		color: ${({ iconColor }) => iconColor};
		font-size: 5em;
	}
`

export const UserBlock = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10px;
	width: 100%;
	border: 1px solid white;
	padding: 10px;
	border-radius: 4px;

	/* Resolution 1150x700 */
  	@media (max-width: 1150px) and (max-height: 700px) {
    	padding: 15px;
    	font-size: 0.9rem;
  	}
  
  	/* Resolution 1280x650 */
  	@media (max-width: 1280px) and (max-height: 650px) {
    	padding: 12px;
    	font-size: 0.8rem;
  	}
  
  	/* Resolution 1366x768 */
  	@media (max-width: 1366px) and (max-height: 768px) {
    	padding: 10px;
    	font-size: 0.8rem;
  	}
  
  	/* Resolution 1440x900 */
  	@media (max-width: 1440px) and (max-height: 900px) {
    	padding: 8px;
    	font-size: 0.7rem;
  	}
  
  	/* Resolution 1920x1000 */
  	@media (max-width: 1920px) and (max-height: 1000px) {
    	padding: 6px;
    	font-size: 0.6rem;
  	}
  
  	/* Resolution 600x700 */
  	@media (max-width: 600px) and (max-height: 700px) {
    	padding: 15px;
    	font-size: 0.9rem;
  	}
  
  	/* Resolution 800x700 */
  	@media (max-width: 800px) and (max-height: 700px) {
    	padding: 12px;
    	font-size: 0.8rem;
  	}
	
`

export const Info = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;

	:hover {
		cursor: default;
	}

`

export const Value = styled.span`
	${({ type }) => type === 'error' ? `
		font-size: 14px;
		color: red;
		opacity: .7;
	` :  `
		font-size: 30px;
	` }
`

export const Title = styled.span`
	opacity: .5;
`
