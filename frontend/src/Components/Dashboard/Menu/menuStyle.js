import styled from 'styled-components'

// estilização do menu
export const Area = styled.aside`
	grid-area: menu;
	background: linear-gradient(135deg, #0a0a0f, #1f1f2e);
	color: white;
	position: relative;

	display: flex;
	flex-flow: column wrap;

	> div {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		outline: none;

		> input {
			background: transparent;
			border: none;
			outline: none;
			text-align: center;
		}

		> ul {
			list-style: none;
			padding: 0;
			width: 100%;

			li {
				padding: 0;
				display: flex;

				:hover {
					background: rgba(255, 255, 255, .8);
					color: #222;
					cursor: pointer;
				}

				> div {
					margin-right: 5px;

					:hover {
						cursor: row-resize;
					}
				}
			}
		}
	}
`
