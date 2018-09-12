import React from 'react'
import { node } from 'prop-types'

Button.propTypes = {
    children: node
}

function Button({
    children
}) {
    return (
        <button>{children}</button>
    )
}

export default Button