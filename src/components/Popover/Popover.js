import { string, func, bool, node, oneOf, object, number } from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { getClassName } from '../../utils'

/**
 * @name Popover
 * @desc a wrapper for adding showing a node on hover, click or right-click
 * @class
 *      .Popover
 *      .Popover__trigger
 *      .Popover__overlay
 */

Popover.propTypes = {
    className: string,
    placement: oneOf(["top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"]),
    isOpen: bool,
    overlay: node,
    _handleBlur: func,
    _handleClick: func,
    _handleContextMenu: func,
    _handleMouseEnter: func,
    _handleOverlayClick: func,
    _handleMouseLeave: func
}

function Popover({
    className = null,
    placement = null,
    isOpen = false,
    overlay = null,
    _handleBlur = null,
    _handleClick = null,
    _handleOverlayClick = null,
    _handleContextMenu = null,
    _handleMouseEnter = null,
    _handleMouseLeave = null,
    children = null
}) {

    const classNamesArr = ["Popover", className]

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

           {!!isOpen && (
                <div 
                    className={getClassName(classNamesArr, "__overlay", `at-${placement}`)}
                    onClickCapture={_handleOverlayClick}
                >
                    {overlay}
                </div>)}
        </span>
    )
}

const styledPopover = styled(Popover)`
    position: ${ ({ isOpen }) => isOpen ? "relative;" : null};
    z-index: ${ ({ isOpen }) => isOpen ? "1" : null};

    display: inline-block;

    .Popover__trigger {
        user-select: none;
        cursor: pointer;
    }

    .Popover__overlay {
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

export default styledPopover