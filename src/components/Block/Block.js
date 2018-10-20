import React from 'react'
import { string, node, bool, number, oneOfType, oneOf, object } from 'prop-types'
import { getClassName } from '../../utils'
import { breakpoints } from '../../defaults/theme'
import styled from 'styled-components'

Block.propTypes = {

    children: node,
    className: string,
    id: string,
    style: object,
    as: string,
    block: bool,
    inline: bool,
    inlineBlock: bool,
    inlineFlex: bool,

    basis: string,
    width: string,
    height: string,
    align: oneOf(["flex-start", "center", "flex-end", "stretch"]),
    justify: oneOf(["flex-start", "flex-end", "center", "space-between", "space-around"]),
    grow: oneOfType([bool, number]),
    shrink: oneOfType([bool, number]),
    row: bool,
    column: bool,
    rowReverse: bool,
    columnReverse: bool,
    margin: oneOfType([number, string]),
    padding: oneOfType([number, string]),
    hide: bool,

    xs: oneOfType([number, bool]),
    xsBasis: string,
    xsWidth: string,
    xsHeight: string,
    xsAlign: oneOf(["flex-start", "center", "flex-end", "stretch"]),
    xsJustify: oneOf(["flex-start", "flex-end", "center", "space-between", "space-around"]),
    xsGrow: oneOfType([bool, number]),
    xsShrink: oneOfType([bool, number]),
    xsRow: bool,
    xsColumn: bool,
    xsRowReverse: bool,
    xsColumnReverse: bool,
    xsMargin: oneOfType([number, string]),
    xsPadding: oneOfType([number, string]),
    xsHide: bool,

    sm: oneOfType([number, bool]),
    smBasis: string,
    smWidth: string,
    smHeight: string,
    smAlign: oneOf(["flex-start", "center", "flex-end", "stretch"]),
    smJustify: oneOf(["flex-start", "flex-end", "center", "space-between", "space-around"]),
    smGrow: oneOfType([bool, number]),
    smShrink: oneOfType([bool, number]),
    smRow: bool,
    smColumn: bool,
    smRowReverse: bool,
    smColumnReverse: bool,
    smMargin: oneOfType([number, string]),
    smPadding: oneOfType([number, string]),
    smHide: bool,

    md: oneOfType([number, bool]),
    mdBasis: string,
    mdWidth: string,
    mdHeight: string,
    mdAlign: oneOf(["flex-start", "center", "flex-end", "stretch"]),
    mdJustify: oneOf(["flex-start", "flex-end", "center", "space-between", "space-around"]),
    mdGrow: oneOfType([bool, number]),
    mdShrink: oneOfType([bool, number]),
    mdRow: bool,
    mdColumn: bool,
    mdRowReverse: bool,
    mdColumnReverse: bool,
    mdMargin: oneOfType([number, string]),
    mdPadding: oneOfType([number, string]),
    mdHide: bool,

    lg: oneOfType([number, bool]),
    lgWidth: string,
    lgHeight: string,
    lgBasis: string,
    lgAlign: oneOf(["flex-start", "center", "flex-end", "stretch"]),
    lgJustify: oneOf(["flex-start", "flex-end", "center", "space-between", "space-around"]),
    lgGrow: oneOfType([bool, number]),
    lgShrink: oneOfType([bool, number]),
    lgRow: bool,
    lgColumn: bool,
    lgRowReverse: bool,
    lgColumnReverse: bool,
    lgMargin: oneOfType([number, string]),
    lgPadding: oneOfType([number, string]),
    lgHide: bool,

    xl: oneOfType([number, bool]),
    xlBasis: string,
    xlWidth: string,
    xlHeight: string,
    xlAlign: oneOf(["flex-start", "center", "flex-end", "stretch"]),
    xlJustify: oneOf(["flex-start", "flex-end", "center", "space-between", "space-around"]),
    xlGrow: oneOfType([bool, number]),
    xlShrink: oneOfType([bool, number]),
    xlRow: bool,
    xlColumn: bool,
    xlRowReverse: bool,
    xlColumnReverse: bool,
    xlMargin: oneOfType([number, string]),
    xlPadding: oneOfType([number, string]),
    xlHide: bool,

    xxl: oneOfType([number, bool]),
    xxlBasis: string,
    xxlWidth: string,
    xxlHeight: string,
    xxlAlign: oneOf(["flex-start", "center", "flex-end", "stretch"]),
    xxlJustify: oneOf(["flex-start", "flex-end", "center", "space-between", "space-around"]),
    xxlGrow: oneOfType([bool, number]),
    xxlShrink: oneOfType([bool, number]),
    xxlRow: bool,
    xxlColumn: bool,
    xxlRowReverse: bool,
    xxlColumnReverse: bool,
    xxlMargin: oneOfType([number, string]),
    xxlPadding: oneOfType([number, string]),
    xxlHide: bool,
}

function Block({
    children = null,
    className = null,
    id = null,
    style = {},
    as = "div"
}) {

    const classNameArr = [
        className,
    ]

    return React.createElement(as,
        {
            id,
            className: getClassName(classNameArr),
            style
        },
        children)
}

const styledBlock = styled(Block)`
    display: ${({ block, inline, inlineBlock, inlineFlex }) => (!!block && "block") || (!!inlineBlock && "inline-block") || (!!inline && "inline") || (!!inlineFlex && "inline-flex") || "flex"}
    display: ${({ hide, xsHide }) => !!xsHide && !!hide && "none" || null};
    flex-basis: ${ ({ xsBasis, xs, basis }) => (xs === true ? "100%" : !!xs && xs * 100 / 16 + "%") || xsBasis || basis || null};
    width: ${ ({ xsWidth, xs, width }) => (xs === true ? "100%" : !!xs && xs * 100 / 16 + "%") || xsWidth || width || null};
    height: ${ ({ xsHeight, height }) => xsHeight || height || null};
    align-items: ${ ({ align, xsAlign }) => xsAlign || align || null};
    justify-content: ${ ({ xsJustify, justify }) => xsJustify || justify || null};
    flex-grow: ${ ({ xsGrow, grow }) => xsGrow || grow || null};
    flex-shrink: ${ ({ xsShrink, shrink }) => xsShrink || shrink || null};
    flex-direction: ${ ({ row, column, rowReverse, columnReverse, xsRow, xsColumn, xsRowReverse, xsColumnReverse }) => (!!xsRow && "row") || (!!row && "row") || (!!xsColumn && "column") || (!!column && "column") || (!!xsRowReverse && "row-reverse") || (!!rowReverse && "row-reverse") || (!!xsColumnReverse && "row-reverse") || (!!columnReverse && "row-reverse") || null};
    margin: ${ ({ xsMargin, margin }) => xsMargin || margin || null};
    padding: ${ ({ xsPadding, padding }) => xsPadding || padding || null};

        @media all and (min-width: ${breakpoints.xs}) {
            display: ${({ xsHide, xs, xsBasis }) => !!xsHide ? "none" : (!!xs || !!xsBasis) ? "flex" : null};
            flex-basis: ${ ({ xsBasis, xs }) => (xs === true ? "100%" : !!xs && xs * 100 / 16 + "%") || xsBasis || null};
            width: ${ ({ xsWidth, xs }) => (xs === true ? "100%" : !!xs && xs * 100 / 16 + "%") || xsWidth || null};
            height: ${ ({ xsHeight }) => xsHeight || null};
            align-items: ${ ({ xsAlign }) => xsAlign || null};
            justify-content: ${ ({ xsJustify }) => xsJustify || null};
            flex-grow: ${ ({ xsGrow }) => xsGrow || null};
            flex-shrink: ${ ({ xsShrink }) => xsShrink || null};
            flex-direction: ${ ({ xsRow, xsColumn, xsRowReverse, xsColumnReverse }) => (!!xsRow && "row") || (!!xsColumn && "column") || (!!xsRowReverse && "row-reverse") || (!!xsColumnReverse && "row-reverse") || null};
            margin: ${ ({ xsMargin }) => xsMargin || null};
            padding: ${ ({ xsPadding }) => xsPadding || null};
        }

    @media all and (min-width: ${breakpoints.sm}) {
        display: ${({ smHide, sm, smBasis }) => !!smHide ? "none" : (!!sm || !!smBasis) ? "flex" : null};
        flex-basis: ${ ({ smBasis, sm }) => (sm === true ? "100%" : !!sm && sm * 100 / 16 + "%") || smBasis || null};
        width: ${ ({ smWidth, sm }) => (sm === true ? "100%" : !!sm && sm * 100 / 16 + "%") || smWidth || null};
        height: ${ ({ smHeight }) => smHeight || null};
        align-items: ${ ({ smAlign }) => smAlign || null};
        justify-content: ${ ({ smJustify }) => smJustify || null};
        flex-grow: ${ ({ smGrow }) => smGrow || null};
        flex-shrink: ${ ({ smShrink }) => smShrink || null};
        flex-direction: ${ ({ smRow, smColumn, smRowReverse, smColumnReverse }) => (!!smRow && "row") || (!!smColumn && "column") || (!!smRowReverse && "row-reverse") || (!!smColumnReverse && "row-reverse") || null};
        margin: ${ ({ smMargin }) => smMargin || null};
        padding: ${ ({ smPadding }) => smPadding || null};
    }

    @media all and (min-width: ${breakpoints.md}) {
        display: ${({ mdHide, md, mdBasis }) => !!mdHide ? "none" : !!md || !!mdBasis ? "flex" : null};
        flex-basis: ${ ({ mdBasis, md }) => (md === true ? "100%" : !!md && md * 100 / 16 + "%") || mdBasis || null};
        width: ${ ({ mdWidth, md }) => (md === true ? "100%" : !!md && md * 100 / 16 + "%") || mdWidth || null};
        height: ${ ({ mdHeight }) => mdHeight || null};
        align-items: ${ ({ mdAlign }) => mdAlign || null};
        justify-content: ${ ({ mdJustify }) => mdJustify || null};
        flex-grow: ${ ({ mdGrow }) => mdGrow || null};
        flex-shrink: ${ ({ mdShrink }) => mdShrink || null};
        flex-direction: ${ ({ mdRow, mdColumn, mdRowReverse, mdColumnReverse }) => (!!mdRow && "row") || (!!mdColumn && "column") || (!!mdRowReverse && "row-reverse") || (!!mdColumnReverse && "row-reverse") || null};
        margin: ${ ({ mdMargin }) => mdMargin || null};
        padding: ${ ({ mdPadding }) => mdPadding || null};
    }

    @media all and (min-width: ${breakpoints.lg}) {
        display: ${({ lgHide, lg, lgBasis }) => !!lgHide ? "none" : (!!lg || !!lgBasis) ? "flex" : null};
        flex-basis: ${ ({ lgBasis, lg }) => (lg === true ? "100%" : !!lg && lg * 100 / 16 + "%") || lgBasis || null};
        width: ${ ({ lgWidth, lg }) => (lg === true ? "100%" : !!lg && lg * 100 / 16 + "%") || lgWidth || null};
        height: ${ ({ lgHeight }) => lgHeight || null};
        align-items: ${ ({ lgAlign }) => lgAlign || null};
        justify-content: ${ ({ lgJustify }) => lgJustify || null};
        flex-grow: ${ ({ lgGrow }) => lgGrow || null};
        flex-shrink: ${ ({ lgShrink }) => lgShrink || null};
        flex-direction: ${ ({ lgRow, lgColumn, lgRowReverse, lgColumnReverse }) => (!!lgRow && "row") || (!!lgColumn && "column") || (!!lgRowReverse && "row-reverse") || (!!lgColumnReverse && "row-reverse") || null};
        margin: ${ ({ lgMargin }) => lgMargin || null};
        padding: ${ ({ lgPadding }) => lgPadding || null};
    }

    @media all and (min-width: ${breakpoints.xl}) {
        display: ${({ xlHide, xl, xlBasis }) => !!xlHide ? "none" : (!!xl || !!xlBasis) ? "flex" : null};
        flex-basis: ${ ({ xlBasis, xl }) => (xl === true ? "100%" : !!xl && xl * 100 / 16 + "%") || xlBasis || null};
        width: ${ ({ xlWidth, xl }) => (xl === true ? "100%" : !!xl && xl * 100 / 16 + "%") || xlWidth || null};
        height: ${ ({ xlHeight }) => xlHeight || null};
        align-items: ${ ({ xlAlign }) => xlAlign || null};
        justify-content: ${ ({ xlJustify }) => xlJustify || null};
        flex-grow: ${ ({ xlGrow }) => xlGrow || null};
        flex-shrink: ${ ({ xlShrink }) => xlShrink || null};
        flex-direction: ${ ({ xlRow, xlColumn, xlRowReverse, xlColumnReverse }) => (!!xlRow && "row") || (!!xlColumn && "column") || (!!xlRowReverse && "row-reverse") || (!!xlColumnReverse && "row-reverse") || null};
        margin: ${ ({ xlMargin }) => xlMargin || null};
        padding: ${ ({ xlPadding }) => xlPadding || null};
    }

    @media all and (min-width: ${breakpoints.xxl}) {
        display: ${({ xxlHide, xxl, xxlBasis }) => !!xxlHide ? "none" : (!!xxl || !!xxlBasis) ? "flex" : null};
        flex-basis: ${ ({ xxlBasis, xxl }) => (xxl === true ? "100%" : !!xxl && xxl * 100 / 16 + "%") || xxlBasis || null};
        width: ${ ({ xxlWidth, xxl }) => (xxl === true ? "100%" : !!xxl && xxl * 100 / 16 + "%") || xxlWidth || null};
        height: ${ ({ xxlHeight }) => xxlHeight || null};
        align-items: ${ ({ xxlAlign }) => xxlAlign || null};
        justify-content: ${ ({ xxlJustify }) => xxlJustify || null};
        flex-grow: ${ ({ xxlGrow }) => xxlGrow || null};
        flex-shrink: ${ ({ xxlShrink }) => xxlShrink || null};
        flex-direction: ${ ({ xxlRow, xxlColumn, xxlRowReverse, xxlColumnReverse }) => (!!xxlRow && "row") || (!!xxlColumn && "column") || (!!xxlRowReverse && "row-reverse") || (!!xxlColumnReverse && "row-reverse") || null};
        margin: ${ ({ xxlMargin }) => xxlMargin || null};
        padding: ${ ({ xxlPadding }) => xxlPadding || null};
    }
`

export default styledBlock