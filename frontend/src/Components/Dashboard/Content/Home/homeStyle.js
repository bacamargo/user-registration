import styled from 'styled-components'

// configurações da área principal e responsividade para várias resoluções de tela
export const AreaStats = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	width: 100%;

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
