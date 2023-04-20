import React from 'react'
import {
	ButtonGroup, Button  
} from 'reactstrap'

const Admin = ({ search, value }) =>
	<ButtonGroup size="sm">
	  <Button onClick={() => search(0)}>All</Button>
	  <Button onClick={() => search(1)}>Common</Button>
	  <Button onClick={() => search(2)}>Admins</Button>
	</ButtonGroup>

export default Admin
