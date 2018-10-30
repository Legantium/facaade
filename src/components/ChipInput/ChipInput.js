import { string, func, bool, node, oneOf, object, number, array } from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { getClassName } from '../../utils'

/**
 * @name ChipInput
 * @desc input for entering chips
 * @example
 *      ->  <ChipInput onChange={chips => console.log(chips)} error="we need more chips" label="fill it in">
 *      <-  <div class="ChipInput">
 *              <label class="ChipInput__label">fill it in</label>
 *              <div class="ChipInput__faux-input">
 *                  <div class="ChipInput__chip-container"></div>
 *                  <input type="text" defaultValue="" class="ChipInput__native-text-input"/>
 *              </div>
 *              <div class="ChipInput__error">we need more chips</div>
 *          </div>
 */

ChipInput.propTypes = {
    disabled: bool,
    className: string,
    style: object,
    id: string,
    children: array,
    name: string,
    label: string,
    inlineLabel: string,
    onAdd: func,
    onRemove: func,
    placeholder: string,
    onFocus: func,
    onBlur: func,
    optional: bool,
    error: string,
    autoFocus: bool,
}

function ChipInput({
    disabled = null,
    className = null,
    style = {},
    id = null,
    label = null,
    inlineLabel = null,
    onAdd = (value) => { console.log("adding " + value) },
    onRemove = (_id) => { console.log("removing " + _id) },
    placeholder = null,
    onFocus = null,
    onBlur = null,
    optional = false,
    minLength = null,
    maxLength = null,
    error = null,
    children = null,
    autoFocus = null
}) {

    const classNamesArr = ["ChipInput", className]

    const _handleKeyPress = function (e) {
        if ([",", "Enter", " "].includes(e.key)) {
            e.preventDefault()
            const value = e.target.value.trim()
            if (value === "") return null

            !!onAdd && onAdd(value)
            e.target.value = ""
        }
    }

    const _handleBlur = function (e) {
        !!onAdd && onAdd(e.target.value)
    }

    const _handleFocus = function () {

    }

    return (
        <div className={getClassName(classNamesArr)}>
            {(!!label || !!inlineLabel) && <label className={getClassName(classNamesArr, "__label")}>{(!!label && label) || (!!inlineLabel && inlineLabel)}</label>}
            <a className={getClassName(classNamesArr, "__faux-input")}>
                <div className={getClassName(classNamesArr, "__chip-container")}>
                    {React.Children.map(children, child => child.props.onRemove = onRemove)}
                </div>

                <input
                    autoFocus={autoFocus}
                    id={id}
                    disabled={disabled}
                    className={getClassName(classNamesArr, "__native-text-input")}
                    style={style}
                    required={!optional}
                    placeholder={placeholder}
                    onFocus={_handleFocus}
                    onBlur={_handleBlur}
                    onKeyDown={_handleKeyPress}
                />
            </a>
            {!!error && <div className={getClassName(classNamesArr, "__error")}>{error}</div>}
        </div>
    )
}

const StyledChipInput = styled(ChipInput)`
    
    label {
        ${({ label }) => !!label ? "display: block" : null}
    }

    input {
        display: inline-block;
        &:focus { outline: none;}
    }

    .ChipInput__chip-container {
        display: inline-block;
        padding-right: 4px;
    }

    
`

export default StyledChipInput