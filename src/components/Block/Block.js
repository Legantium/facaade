import React from 'react'
import { string, node, bool, number, oneOfType, oneOf } from 'prop-types'

import './Block.scss'

Block.propTypes = {
    pane: bool,
    item: bool,
    children: node,
    className: string,
    grow: oneOfType([bool, number]),
    shrink: oneOfType([bool, number]),
    xs: oneOfType([bool, number]),
    sm: oneOfType([bool, number]),
    md: oneOfType([bool, number]),
    lg: oneOfType([bool, number]),
    xl: oneOfType([bool, number]),
    xxl: oneOfType([bool, number]),
    align: oneOf(["flex-start", "center", "flex-end", "stretch"]),
    justify: oneOf(["flex-start", "flex-end", "center", "space-between", "space-around"]),
    direction: oneOf(["column", "row", "column-reverse", "row-reverse"]),
    vertical: bool,
    wrap: bool,
    padding: oneOfType([string, bool]),
    margin: oneOfType([string, bool]),
    as: string
}

function Block({
    as = "div",
    children = null,
    style = {},
    className = "",
    grow = null,
    shrink = null,
    xs = null,
    sm = null,
    md = null,
    lg = null,
    xl = null,
    xxl = null,
    align = null,
    direction = null,
    vertical = false,
    justify = null,
    padding = null,
    margin = null,
    wrap = false,
    id = null,

}) {

    grow = grow === true ? 1 : grow
    shrink = shrink === true ? 1 : shrink
    direction = vertical === true ? "column" : direction

    xs = xs === true ? 16 : xs
    sm = sm === true ? 16 : sm
    md = md === true ? 16 : md
    lg = lg === true ? 16 : lg
    xl = xl === true ? 16 : xl
    xxl = xxl === true ? 16 : xxl

    xs = xs === 0 ? null : xs
    sm = sm === 0 ? null : sm
    md = md === 0 ? null : md
    lg = lg === 0 ? null : lg
    xl = xl === 0 ? null : xl
    xxl = xxl === 0 ? null : xxl

    const computedClassName = [
        "Block",
        !!xs && `xs-${xs}`,
        !!sm && `sm-${sm}`,
        !!md && `md-${md}`,
        !!lg && `lg-${lg}`,
        !!xl && `xl-${xl}`,
        !!xxl && `xl-${xl}`,
        xs === 0 && `hide-xs`,
        sm === 0 && `hide-sm`,
        md === 0 && `hide-md`,
        lg === 0 && `hide-lg`,
        xl === 0 && `hide-xl`,
        xxl === 0 && `hide-xxl`,
        className
    ].filter(c => !!c).join(" ")

    const computedStyle = {
        flexGrow: grow,
        flexShrink: shrink,
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap ? "wrap" : null,
        margin,
        padding,
        ...style,
    }

    return React.createElement(as, {
        id,
        className: computedClassName,
        style: computedStyle
    }, children)
}

export default Block