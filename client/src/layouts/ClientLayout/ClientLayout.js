import React from 'react'
import "./ClientLayout.css"

export function ClientLayout(props) {
    const {children} = props;
  return (
    <div>
      <p>Client Layout</p>
      
      {children}
    </div>
  )
}
