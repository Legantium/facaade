import React from 'react'
import Color from 'color'
import { string, func, bool, node, oneOf, object } from 'prop-types'
import styled from 'styled-components'
import { colors, breakpoints } from '../../defaults/theme'
import { getClassName } from '../../utils';

/**
 * @name Button
 * @desc button element
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
    color: string,

    onClick: func,
    onBlur: func,
    onHover: func,
    onFocus: func,
    onMouseIn: func,
    onMouseOver: func,
    onMouseOut: func,
    
    flat: bool,
    muted: bool,
    outline: bool,
    compact: func,
    pill: bool,
    rounded: string,
    padding: func,
    size: func,

    xsFlat: bool,
    xsMuted: bool,
    xsOutline: bool,
    xsCompact: func,
    xsPadding: func,
    xsSize: func,

    smFlat: bool,
    smMuted: bool,
    smOutline: bool,
    smCompact: func,
    smPadding: func,
    smSize: func,

    mdFlat: bool,
    mdMuted: bool,
    mdOutline: bool,
    mdCompact: func,
    mdPadding: func,
    mdSize: func,

    lgFlat: bool,
    lgMuted: bool,
    lgOutline: bool,
    lgCompact: func,
    lgPadding: func,
    lgSize: func,

    xlFlat: bool,
    xlMuted: bool,
    xlOutline: bool,
    xlCompact: func,
    xlPadding: func,
    xlSize: func,

    xxlFlat: bool,
    xxlMuted: bool,
    xxlOutline: bool,
    xxlCompact: func,
    xxlPadding: func,
    xxlSize: func,
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
            className={getClassName(className)}
            onClick={onClick}
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

const StyledButton = styled(Button)`

    font-size: ${({ size }) => size !== null ? size : "14px" };
    padding: ${({ compact }) => !!compact ? "0.5em 1em" : "1em 2em"};
    background: ${colors.accent};

    border: none;
    color: #fff;
    cursor: pointer;
    border-radius: ${({ rounded = null }) => (rounded === true ? "2em" : rounded)};
    font-weight: 500;


    @media all and (min-width: ${breakpoints.xs}) {

    }

    @media all and (min-width: ${breakpoints.sm}) {
        
    }

    @media all and (min-width: ${breakpoints.md}) {
        
    }

    @media all and (min-width: ${breakpoints.lg}) {
        
    }

    @media all and (min-width: ${breakpoints.xl}) {
        
    }

    @media all and (min-width: ${breakpoints.xxl}) {
        
    }

`

export default StyledButton