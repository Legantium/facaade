import React from 'react'
import {
    string,
    func,
    bool,
    node,
    oneOf,
} from 'prop-types'

import './Button.scss'

/**
 * @name Button
 * @desc button element
 */

Button.propTypes = {
    as: string,
    onClick: func,
    onFocus: func,
    onBlur: func,
    onMouseIn: func,
    onMouseOut: func,
    onMouseOver: func,
    disabled: bool,
    className: string,
    id: string,
    name: string,
    type: oneOf(["button", "reset", "submit"]),
    value: string,
    children: node
}

function Button({
    as = "button",
    autoFocus = null,
    onClick = null,
    onFocus = null,
    onBlur = null,
    onMouseIn = null,
    onMouseOver = null,
    onMouseOut = null,
    disabled = null,
    className = "",
    id = null,
    name = null,
    type = null,
    children
}) {

    className = [
        "button",
        className
    ].join(" ").trim()

    return React.createElement(
        as,
        {
            autoFocus,
            id,
            className,
            onClick,
            onFocus,
            onBlur,
            onMouseIn,
            onMouseOver,
            onMouseOut,
            disabled,
            name,
            type
        },
        children
    )
}

export default Button