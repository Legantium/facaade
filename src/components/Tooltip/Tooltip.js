import { string, func, bool, node, oneOf, object, number } from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { getClassName } from '../../utils'

/**
 * @name Tooltip
 * @desc a wrapper for adding showing a node on hover, click or right-click
 * @class
 *      .Tooltip
 *      .Tooltip__trigger
 *      .Tooltip__overlay
 */

Tooltip.propTypes = {
    className: string,
    placement: oneOf(["top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"]),
    isOpen: bool,
    overlay: node,
    _handleBlur: func,
    _handleClick: func,
    _handleContextMenu: func,
    _handleMouseEnter: func,
    _handleMouseLeave: func
}

function Tooltip({
    className = null,
    placement = null,
    isOpen = false,
    overlay = null,
    _handleBlur = null,
    _handleClick = null,
    _handleContextMenu = null,
    _handleMouseEnter = null,
    _handleMouseLeave = null,
    children = null
}) {

    const classNamesArr = ["Tooltip", className]

    return (
        <span
            className={getClassName(classNamesArr)}
            onMouseLeave={_handleMouseLeave}
            onBlur={_handleBlur}
            tabIndex={0}
        >

            <span className={getClassName(classNamesArr, "__trigger")}
                onMouseEnter={_handleMouseEnter}
                onClick={_handleClick}
                onContextMenu={_handleContextMenu}
            >
                {children}
            </span>

            {!!isOpen && <span className={getClassName(classNamesArr, "__overlay", `at-${placement}`)}>
                {overlay}
            </span>}
        </span>
    )
}

const styledTooltip = styled(Tooltip)`
    position: relative;
    z-index: 1;
    display: inline-block;

    .Tooltip__trigger {
        user-select: none;
        cursor: pointer;
    }

    .Tooltip__overlay {
        position: absolute;
        
        ${({ placement }) => {
            switch (placement) {

                case "bottom-right":
                return `
                    bottom: 0;
                    right: 0;
                    transform: translateY(100%);    
                `

                case "bottom-left":
                return `
                    bottom: 0;
                    left: 0;
                    transform: translateY(100%);
                `

                case "top":
                return `
                    top: 0;
                    right: 50%;
                    transform: translateY(-100%) translateX(50%);
                `

                case "top-right":
                return `
                    top: 0;
                    right: 0;
                    transform: translateY(-100%);    
                `

                case "top-left":
                return `
                    top: 0;
                    right: 0;
                    transform: translateY(-100%);
                `
                default : // "bottom"
                return `
                    bottom: 0;
                    right: 50%;
                    transform: translateY(100%) translateX(50%);
                `
            }
        }}
        
    }
`

export default styledTooltip