import React from 'react'
import classes from './Button.scss'
const Button = props => {
  const cls = ['btn']
  if (props.additionalClasses) {
    props.additionalClasses.forEach(item => {
      cls.push(item)
    })
  }
  console.log(cls)
  return (
    <button className={cls.join(' ')}> </button>
  )
}
export default Button