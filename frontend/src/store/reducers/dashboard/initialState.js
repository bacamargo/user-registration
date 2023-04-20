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
				subtitle: 'Outer Space'
			}, 
			{
				title: {
					text: 'System administration',
					icon: 'fa fa-user-secret'
				},
				subtitle: 'Users and registration info'
			}
		]
	},
	categorySelected: 0
}

export default initialState
