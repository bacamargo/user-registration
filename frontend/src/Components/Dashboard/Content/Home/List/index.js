import React from 'react'

import { Area as AreaStyle, Icon as IconStyle, Info as InfoStyle, Title as TitleStyle, Value as ValueStyle, UserBlock } from './styles'


const List = ({ error, label, color, icon, users }) => {
  const userBlock = (user) => {
    return (
      <UserBlock key={user.id}>
        <IconStyle iconColor={color}>
          <i className={`fa ${icon}`}></i>
        </IconStyle>
        <InfoStyle>
          <ValueStyle>
            ID: {user.id}
          </ValueStyle>
          <ValueStyle>
            Name: {user.name}
          </ValueStyle>
          <ValueStyle>
            Email: {user.email}
          </ValueStyle>
          <ValueStyle>
            Admin? {user.admin ? 'Yes' : 'No'}
          </ValueStyle>
        </InfoStyle>
      </UserBlock>
    )
  }

  return (
    <AreaStyle>
      <InfoStyle>
        <TitleStyle>{label}</TitleStyle>
        {!users ? (
          <span><img src='../../../../../assets/images/loading.gif' alt='' /></span>
        ) : error ? (
          <ValueStyle type='error'>Request failed</ValueStyle>
        ) : (
          users.map(user => {
            return userBlock(user);
          })
        )}
      </InfoStyle>
    </AreaStyle>
  )
}

export default List