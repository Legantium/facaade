import { string, func, bool, node, oneOf, object, number } from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import _Textarea from 'react-autosize-textarea'
import { getClassName } from '../../utils'

/**
 * @name Textarea
 * @desc textarea element
 * @class
 *      .Textarea
 *      .Textarea__label
 *      .Textarea__native-input
 *      .Textarea__error
 * @example
 *      ->  <Textarea value="passedValue" onChange={e => passedValue = e.target.value} error="an error" label="fill it in"/>
 *      <-  <textarea class="Textarea">
 *              <label class-"Textarea__label">Fill it in</label>
 *              <input type="email" class="TextInput__native-input" value="passedValue" />
 *              <div class="TextInput__error">an error</div>
 *          </textarea>
 */

Textarea.propTypes = {
    disabled: bool,
    className: string,
    style: object,
    id: string,
    name: string,
    label: string,
    inlineLabel: string,
    value: string,
    initialValue: string,
    placeholder: string,
    children: node,
    onClick: func,
    onFocus: func,
    onBlur: func,
    onMouseIn: func,
    onMouseOut: func,
    onMouseOver: func,
    onKeyPress: func,
    onKeyDown: func,
    onKeyUp: func,
    onResize: func,
    optional: bool,
    disabled: bool,
    error: string,
    autoFocus: bool,
}

function Textarea({
    autoFocus = null,
    className = null,
    style = {},
    id = null,
    name = null,
    label = null,
    inlineLabel = null,
    disabled = false,
    value = null,
    initialValue = null,
    placeholder = null,
    onClick = null,
    onChange = null,
    onFocus = null,
    onBlur = null,
    onMouseIn = null,
    onMouseOut = null,
    onMouseOver = null,
    onKeyPress = null,
    onKeyDown = null,
    onKeyUp = null,
    onResize = null,
    optional = false,
    minLength = null,
    maxLength = null,
    error = null
}) {

    if (value === null) { throw new Error("No value passed to Textarea. Where no value is available, pass an empty string") }
    if (onChange === null) { throw new Error("No change handler passed to Textarea.") }

    const classNamesArr = ["Textarea", className]

    return (
        <div className={getClassName(classNamesArr, null, disabled && "is-disabled")}>
            {(!!label || !!inlineLabel) && <label className={getClassName(classNamesArr, "__label")}>{label}</label>}
            <_Textarea
                autoFocus={autoFocus}
                id={id}
                className={getClassName(classNamesArr, "__native-input")}
                onClick={onClick}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onMouseIn={onMouseIn}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                onKeyPress={onKeyPress}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onResize={onResize}
                disabled={disabled}
                value={value !== undefined ? value : initialValue || ""}
                placeholder={placeholder}
                name={name || id}
                style={style}
                required={!optional}
            />
            {!!error && <div className={getClassName(classNamesArr, "__error")}>{error}</div>}
        </div>
    )
}

const styledTextarea = styled(Textarea)`
    
    label {
        ${({ label }) => !!label ? "display: block" : null}
    }
    
`

export default styledTextarea