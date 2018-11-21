import React from 'react'
import { string, func, bool, node, oneOf, object, number } from 'prop-types'
import { getClassName } from '../../utils';

/**
 * @name Button
 * @desc button element
 * @class .Button
 * @example
 *      -> <Button className="my-button">My Button</Button>
 *      <- <button class="Button my-button">My Button</button>
 */

Button.propTypes = {
    id: string,
    as: string,
    style: object,
    className: string,
    disabled: bool,
    children: node,
    type: oneOf(["button", "reset", "submit"]),
    value: string,
    tooltip: node,
    autoFocus: bool,

    onClick: func,
    onBlur: func,
    onHover: func,
    onFocus: func,
    onMouseIn: func,
    onMouseOver: func,
    onMouseOut: func,
}

function Button({
    as = "button",
    autoFocus = null,
    onClick = null,
    onFocus = null,
    onBlur = null,
    onHover = null,
    onMouseIn = null,
    onMouseOver = null,
    onMouseOut = null,
    disabled = null,
    className = "",
    id = null,
    name = null,
    type = null,
    style = {},
    children
}) {

    return (
        <button
            autoFocus={autoFocus}
            id={id}
            className={getClassName(["Button", className], null, disabled && "is-disabled")}
            onClick={(e) => !disabled ? onClick(e) : null}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseIn={onMouseIn}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            disabled={disabled}
            name={name}
            type={type}
            style={style}
        >
            {children}
        </button>
    )
}

export default Button