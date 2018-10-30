import React, { Component } from 'react'
import { node, string, bool, oneOf } from 'prop-types'

import Popover from './Popover'
export default class PopoverWrapper extends Component {

    static propTypes = {
        children: node.isRequired,
        className: string,
        overlay: node,
        click: bool,
        hover: bool,
        placement: oneOf(["bottom", "bottom-left", "left", "top-left", "top", "top-right", "right", "bottom-right"]),
        isOpen: bool
    }

    state = {
        _isOpen: false,
        mouseOver: false
    }

    open = () => {
        this.setState({ _isOpen: true })
    }

    close = () => {
        this.setState({ _isOpen: false })
    }

    toggle = () => {
        this.setState(prev => ({ _isOpen: !prev._isOpen }))
    }

    _handleMouseEnter = () => {
        const { click = false, context = false } = this.props
        const hover = !click && !context
        this.setState({ mouseOver: true })
        if (hover) {
            setTimeout(() => {
                if (this.state.mouseOver) {
                    this.setState({ _isOpen: true })
                }
            }, 250)
        }
    }

    _handleMouseLeave = () => {
        const { click = false, context = false } = this.props
        const hover = !click && !context
        this.setState({ mouseOver: false })
        if (hover) {
            setTimeout(() => {
                if (!this.state.mouseOver) {
                    this.setState({ _isOpen: false })
                }
            }, 200)
        }
    }

    _handleBlur = () => {
        const { click = true } = this.props
        if (click) {
            this.setState({ _isOpen: false })
        }
    }

    _handleClick = () => {
        const { click = false } = this.props

        if (click) return this.toggle()
    }

    _handleContextMenu = e => {
        e.preventDefault()
        this.setState({ _isOpen: true })
    }


    render() {

        const {
            children,
            className = "",
            overlay = null,
            placement = "bottom",
            isOpen = null
        } = this.props

        const { _isOpen } = this.state

        return (
            <Popover
                isOpen={isOpen !== null ? isOpen : _isOpen}
                open={(e) => this.open(e)}
                close={(e) => this.close(e)}
                toggle={(e) => this.toggle(e)}
                _handleMouseEnter={(e) => this._handleMouseEnter(e)}
                _handleMouseLeave={(e) => this._handleMouseLeave(e)}
                _handleBlur={(e) => this._handleBlur(e)}
                _handleClick={(e) => this._handleClick(e)}
                _handleContextMenu={(e) => this._handleContextMenu(e)}
                placement={placement}
                overlay={overlay}
                className={className}
            >{children}</Popover>
        )
    }
}