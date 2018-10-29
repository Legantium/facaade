import { string, func, bool, node, oneOf, object, number } from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { getClassName } from '../../utils'

/**
 * @name Dropdown
 * @desc a wrapper for adding showing a node on hover, click or right-click
 * @class
 *      .Dropdown
 *      .Dropdown__trigger
 *      .Dropdown__overlay
 */

Dropdown.propTypes = {
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

function Dropdown({
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

    const classNamesArr = ["Dropdown", className]

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

            <span className={getClassName(classNamesArr, "__overlay", `at-${placement}`)}>
                {!!isOpen ? overlay : null}
            </span>
        </span>
    )
}

const styledDropdown = styled(Dropdown)`
    position: relative;
    z-index: 1;
    display: inline-block;

    .Dropdown__trigger {
        user-select: none;
        cursor: pointer;
    }

    .Dropdown__overlay {
        position: absolute;
        
        &.at-bottom {
            bottom: 0;
            right: 50%;
            transform: translateY(100%) translateX(50%);
        }

        &.at-bottom-right {
            bottom: 0;
            right: 0;
            transform: translateY(100%);
        }

        &.at-bottom-left {
            bottom: 0;
            left: 0;
            transform: translateY(100%);
        }

        &.at-top {
            top: 0;
            right: 50%;
            transform: translateY(-100%) translateX(50%);
        }

        &.at-top-right {
            top: 0;
            right: 0;
            transform: translateY(-100%);
        }

        &.at-top-left {
            top: 0;
            left: 0;
            transform: translateY(-100%);
        }
        
    }
`

export default styledDropdown