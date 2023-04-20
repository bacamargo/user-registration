import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Area as AreaStyle, Icon as IconStyle, Info as InfoStyle, Title as TitleStyle, Value as ValueStyle } from './styles'


const Stat = ({ label, icon, color }) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setData(response.data)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])

  return (
    <AreaStyle>
      <IconStyle iconColor={color}>
        <i className={`fa ${icon}`}></i>
      </IconStyle>
      <InfoStyle>
        <TitleStyle>{label}</TitleStyle>
        {loading ? (
          <span><img src='../../../../../assets/images/loading.gif' alt='' /></span>
        ) : error ? (
          <ValueStyle type='string'>Request failed</ValueStyle>
        ) : (
          <ValueStyle type={typeof data}>{data}</ValueStyle>
        )}
      </InfoStyle>
    </AreaStyle>
  )
}

export default Stat