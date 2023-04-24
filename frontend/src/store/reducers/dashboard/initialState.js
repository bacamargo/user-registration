// configurações para a página principal e a página de admin

const getIndex = () => {
	const path = window.location.pathname;
	switch (path) {
		case "/dashboard/home":
			return 0;
		case "/dashboard/admin":
			return 1;
		default:
			return 0;
	}
}

const initialState = {
	menu: true,
	user: null,
	titles: {
		index: getIndex(),
		lables: [
			{
				title: {
					text: 'Home',
					icon: 'fa fa-rocket'
				},
				subtitle: 'Welcome. Here you can see the list of users registered on this platform. You can update or delete a user only if you are an admin.'
			}, 
			{
				title: {
					text: 'System administration',
					icon: 'fa fa-user-secret'
				},
				subtitle: 'This is the admin page. You can edit or remove a user from the platform. To register a new one, please create an account first in the signup page.'
			}
		]
	},
	categorySelected: 0
}

export default initialState
