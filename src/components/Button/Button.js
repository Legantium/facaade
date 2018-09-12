import React from 'react'
import { string, node, func } from 'prop-types'

import './Button.scss'

Button.propTypes = {
    as: string,
    id: string,
    children: node,
    onClick: func,
    className: string,
}

function Button({
    id = null,
    as = "button",
    children,
    onClick = null,
    className = "",

}) {

    className = [
        "button",
        className
    ].join(" ").trim()

    return React.createElement(
        as,
        {
            id,
            className,
            onClick,
        },
        children
    )
}

export default Button