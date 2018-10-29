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
    chips: array,
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
    onAdd = () => { },
    onRemove = (_id) => { console.log("removing " + _id) },
    chips = [],
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

    const handleKeyDown = function (e) {
        // [",", "Enter", " "].includes(e.key) ? onAdd(e.target.value) : null
        [",", "Enter", " "].includes(e.key) ? console.log("adding one") : null
    }

    const handleBlur = function (e) {
        onAdd(e.target.value)
    }

    const handleFocus = function () {

    }

    return (
        <div className={getClassName(classNamesArr)}>
            {(!!label || !!inlineLabel) && <label className={getClassName(classNamesArr, "__label")}>{(!!label && label) || (!!inlineLabel && inlineLabel)}</label>}
            <a className={getClassName(classNamesArr, "__faux-input")}>
                <div className={getClassName(classNamesArr, "__chip-container")}>
                    {React.Children.map(children, child => child.props.onRemove = onRemove)}
                    <span>Item 1</span>
                </div>

                <input
                    autoFocus={autoFocus}
                    id={id}
                    disabled={disabled}
                    className={getClassName(classNamesArr, "__native-text-input")}
                    style={style}
                    required={!optional}
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
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