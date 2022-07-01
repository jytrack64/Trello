import React from 'react'
// import { useSelector } from 'react-redux'

export default function Todo({ content }) {
  // let state = useSelector((state) => (state.data));

  return (
    <li className="todoBox">
      <span>{content}</span>
    </li>
  )
}
