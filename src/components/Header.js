import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd}) => {


  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onAdd}></Button>
    </header>
  )
}

Header.defaultProps = {
    title: 'Apna Bazar'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
// const headingStyle = {
//     color: 'blue', 
//     backgroundColor:'green'
// }


export default Header