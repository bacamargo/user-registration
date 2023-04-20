import styled from 'styled-components'

export const Area = styled.div`
	height: 100vh;

	display: grid;
	grid-template-rows: 60px 1fr;
	grid-template-columns: 1fr;
	grid-template-areas:
		'header'
		'content'
	;
`

export const Content = styled.div`
	grid-area: content;
	background: linear-gradient(135deg, #0a0a0f, #1f1f2e);
	
	display: flex;
	justify-content: center;
	align-items: center;

	> img {
		width: 100%;
	}
`

export const AreaLimit = styled.form`
	width: 100%;
	max-width: 400px;
	padding: 10px;
	border-radius: 10px;
	position: relative;
	background: linear-gradient(135deg, #3d3d43, #666699);
	color: #fff;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, .15);

	> span {
		opacity: .8;
		text-align: center;

		:hover {
			color: #0a0a0f;
			text-decoration: underline;
			opacity: 1;
			cursor: pointer;
		}
	}
`

export const Base = styled.div`
	display: flex;
	justify-content: flex-end;

	> button {
		margin: 0 5px;
	}
`
