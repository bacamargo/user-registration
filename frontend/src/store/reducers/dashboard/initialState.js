const initialState = {
	menu: true,
	user: null,
	titles: {
		index: 0,
		lables: [
			{
				title: {
					text: 'Home',
					icon: 'fa fa-rocket'
				},
				subtitle: 'List of Users. To update or remove users, you need to be admin.'
			}, 
			{
				title: {
					text: 'System administration',
					icon: 'fa fa-user-secret'
				},
				subtitle: 'Users and registration info. You can edit to update a user or delete it.'
			}
		]
	},
	categorySelected: 0
}

export default initialState
