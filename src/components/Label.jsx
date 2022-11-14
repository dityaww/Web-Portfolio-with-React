import React from 'react'
import PropTypes from "prop-types"

function Label(props) {
  return (
    <>
        <div className={props.style}>
            <p>{props.name}</p>
        </div>
    </>
  )
}

Label.propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
}

export default Label