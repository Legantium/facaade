import React from 'react'

import { string, func, bool, node, oneOf, object } from 'prop-types'

require('./Button.scss')

/**
 * @name Button
 * @desc button element
 * @example
 *      -> <Button className="my-button">My Button</Button>
 *      <- <button class="Button my-button">My Button</button>
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
    style: object,
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
    style = null,
    children
}) {

    className = [
        "Button",
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
            type,
            style,
        },
        children
    )
}

export default Button