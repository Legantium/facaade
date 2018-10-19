import React from 'react'
import { string, func, bool, node, oneOf, object, number } from 'prop-types'
import { getClassName } from '../../utils'

require('./TextInput.scss')

/**
 * @name Button
 * @desc button element
 * @example
 *      ->  <TextInput type="email" value="passedValue" onChange={e => passedValue = e.target.value} error="an error" />
 *      <-  <div class="TextInput">
 *              <input type="email" class="TextInput__native-input" value="passedValue" />
 *              <div class="TextInput__error">an error</div>
 *          </div>
 */

TextInput.propTypes = {
    disabled: bool,
    className: string,
    style: object,
    id: string,
    name: string,
    type: oneOf(["text", "number", "tel", "email", "password"]),
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
    optional: bool,
    disabled: bool,
    error: string,
    autoFocus: bool,
}

function TextInput({
    autoFocus = null,
    className = null,
    style = {},
    id = null,
    name = null,
    disabled = false,
    value = null,
    initialValue = null,
    placeholder = null,
    type = "text",
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
    optional = false,
    minLength = null,
    maxLength = null,
    error = null
}) {

    const classNamesArr = ["TextInput", className]

    return (
        <div className={getClassName(classNamesArr)}>
            <input
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
                disabled={disabled}
                value={value !== undefined ? value : initialValue || ""}
                placeholder={placeholder}
                name={name || id}
                type={type}
                style={style}
                required={!optional}
            />
            {!!error && <div className={getClassName(classNamesArr, "__error")}>{error}</div>}
        </div>
    )
}

export default TextInput