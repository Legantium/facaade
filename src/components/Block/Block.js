import React from 'react'
import { string, node, bool, number, oneOfType, oneOf, object } from 'prop-types'
import { getClassName } from '../../utils'
import { breakpoints } from '../../defaults/theme'
import styled from 'styled-components'

/**
 * @name Block
 * @desc generic element used to build up structure/layouts
 * @class .Block
 * @example
 *      -> <Block as="section" className="my-section">Content here</Block>
 *      <- <section class="Block my-section">Content here</section>
 */

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
    spacing: number,
    hide: bool,
    wrap: bool,
    noWrap: bool,

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
    xsSpacing: oneOfType([number, string]),
    xsHide: bool,
    xsWrap: bool,
    xsNowrap: bool,

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
    smSpacing: oneOfType([number, string]),
    smHide: bool,
    smWrap: bool,
    smNowrap: bool,

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
    mdSpacing: oneOfType([number, string]),
    mdHide: bool,
    mdWrap: bool,
    mdNowrap: bool,

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
    lgSpacing: oneOfType([number, string]),
    lgHide: bool,
    lgWrap: bool,
    lgNowrap: bool,

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
    xlSpacing: oneOfType([number, string]),
    xlHide: bool,
    xlWrap: bool,
    xlNowrap: bool,

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
    xxlSpacing: oneOfType([number, string]),
    xxlHide: bool,
    xxlWrap: bool,
    xxlNowrap: bool,
}

function Block({
    children = null,
    className = null,
    id = null,
    style = {},
    as = "div"
}) {

    const classNameArr = [
        "Block",
        className
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
    flex-wrap: ${({ wrap, noWrap, xsWrap, xsNowrap }) => (!!wrap && "wrap") || (!!xsWrap && "wrap") || (!!noWrap && "nowrap") || (!!xsNowrap && "nowrap") || null};
    width: ${ ({ xsWidth, xs, width }) => (xs === true ? "100%" : !!xs && xs * 100 / 16 + "%") || xsWidth || width || null};
    height: ${ ({ xsHeight, height }) => xsHeight || height || null};
    align-items: ${ ({ align, xsAlign }) => xsAlign || align || null};
    justify-content: ${ ({ xsJustify, justify }) => xsJustify || justify || null};
    flex-grow: ${ ({ xsGrow, grow }) => (xsGrow === true && 1) || xsGrow || (grow === true && 1) || grow || null};
    flex-shrink: ${ ({ xsShrink, shrink }) => (xsShrink === true && 1) || xsShrink || (shrink === true && 1) || shrink || null};
    flex-direction: ${ ({ row, column, rowReverse, columnReverse, xsRow, xsColumn, xsRowReverse, xsColumnReverse }) => (!!xsRow && "row") || (!!row && "row") || (!!xsColumn && "column") || (!!column && "column") || (!!xsRowReverse && "row-reverse") || (!!rowReverse && "row-reverse") || (!!xsColumnReverse && "row-reverse") || (!!columnReverse && "row-reverse") || null};
    padding: ${ ({ xsPadding, padding }) => (!!xsPadding && xsPadding + "px") || (!!padding && padding + "px") || null};
    
    ${({ spacing, compact }) => !!spacing && `
        > * { margin: ${spacing / 2}px; }    
        ${!!compact && `margin: -${spacing / 2}px;` || ""}
    `}

    @media all and (min-width: ${breakpoints.xs}) {
        display: ${({ xsHide, xs, xsBasis }) => !!xsHide ? "none" : (!!xs || !!xsBasis) ? "flex" : null};
        flex-basis: ${ ({ xsBasis, xs }) => (xs === true ? "100%" : !!xs && xs * 100 / 16 + "%") || xsBasis || null};
        flex-wrap: ${({ xsWrap, xsNowrap }) => (!!xsWrap && "wrap") || (!!xsNowrap && "nowrap") || null};
        width: ${ ({ xsWidth, xs }) => (xs === true ? "100%" : !!xs && xs * 100 / 16 + "%") || xsWidth || null};
        height: ${ ({ xsHeight }) => xsHeight || null};
        align-items: ${ ({ xsAlign }) => xsAlign || null};
        justify-content: ${ ({ xsJustify }) => xsJustify || null};
        flex-grow: ${ ({ xsGrow }) => (xsGrow === true && 1) || xsGrow || null};
        flex-shrink: ${ ({ xsShrink }) => (xsShrink === true && 1) || xsShrink || null};
        flex-direction: ${ ({ xsRow, xsColumn, xsRowReverse, xsColumnReverse }) => (!!xsRow && "row") || (!!xsColumn && "column") || (!!xsRowReverse && "row-reverse") || (!!xsColumnReverse && "row-reverse") || null};
        padding: ${ ({ xsPadding = null }) => (xsPadding !== null && xsPadding + "px") || null};
        ${({ xsSpacing = null, xsCompact, xsNoCompact }) => xsSpacing !== null && `
            > * { margin: ${xsSpacing / 2}px; }    
            ${!!xsCompact && `margin: -${xsSpacing / 2}px; max-width: calc(100% - ${xsSpacing / 2}px)` || ""}
            ${!!xsNoCompact && "margin: inherit" || ""}
        `}
    }

    @media all and (min-width: ${breakpoints.sm}) {
        display: ${({ smHide, sm, smBasis }) => !!smHide ? "none" : (!!sm || !!smBasis) ? "flex" : null};
        flex-basis: ${ ({ smBasis, sm }) => (sm === true ? "100%" : !!sm && sm * 100 / 16 + "%") || smBasis || null};
        flex-wrap: ${({ smWrap, smNowrap }) => (!!smWrap && "wrap") || (!!smNowrap && "nowrap") || null};
        width: ${ ({ smWidth, sm }) => (sm === true ? "100%" : !!sm && sm * 100 / 16 + "%") || smWidth || null};
        height: ${ ({ smHeight }) => smHeight || null};
        align-items: ${ ({ smAlign }) => smAlign || null};
        justify-content: ${ ({ smJustify }) => smJustify || null};
        flex-grow: ${ ({ smGrow }) => (smGrow === true && 1) || smGrow || null};
        flex-shrink: ${ ({ smShrink }) => (smShrink === true && 1) || smShrink || null};
        flex-direction: ${ ({ smRow, smColumn, smRowReverse, smColumnReverse }) => (!!smRow && "row") || (!!smColumn && "column") || (!!smRowReverse && "row-reverse") || (!!smColumnReverse && "row-reverse") || null};
        padding: ${ ({ smPadding = null }) => (smPadding !== null && smPadding + "px") || null};
        ${({ smSpacing = null, smCompact, smNoCompact }) => smSpacing !== null && `
            > * { margin: ${smSpacing / 2}px; }    
            ${!!smCompact && `margin: -${smSpacing / 2}px; max-width: calc(100% - ${smSpacing / 2}px)` || ""}
            ${!!smNoCompact && "margin: inherit" || ""}
        `}
    }

    @media all and (min-width: ${breakpoints.md}) {
        display: ${({ mdHide, md, mdBasis }) => !!mdHide ? "none" : !!md || !!mdBasis ? "flex" : null};
        flex-basis: ${ ({ mdBasis, md }) => (md === true ? "100%" : !!md && md * 100 / 16 + "%") || mdBasis || null};
        flex-wrap: ${({ mdWrap, mdNowrap }) => (!!mdWrap && "wrap") || (!!mdNowrap && "nowrap") || null};
        width: ${ ({ mdWidth, md }) => (md === true ? "100%" : !!md && md * 100 / 16 + "%") || mdWidth || null};
        height: ${ ({ mdHeight }) => mdHeight || null};
        align-items: ${ ({ mdAlign }) => mdAlign || null};
        justify-content: ${ ({ mdJustify }) => mdJustify || null};
        flex-grow: ${ ({ mdGrow }) => (mdGrow === true && 1) || mdGrow || null};
        flex-shrink: ${ ({ mdShrink }) => (mdShrink === true && 1) || mdShrink || null};
        flex-direction: ${ ({ mdRow, mdColumn, mdRowReverse, mdColumnReverse }) => (!!mdRow && "row") || (!!mdColumn && "column") || (!!mdRowReverse && "row-reverse") || (!!mdColumnReverse && "row-reverse") || null};
        padding: ${ ({ mdPadding = null }) => (mdPadding !== null && mdPadding + "px") || null};
        ${({ mdSpacing = null, mdCompact, mdNoCompact }) => mdSpacing !== null && `
            > * { margin: ${mdSpacing / 2}px; }    
            ${!!mdCompact && `margin: -${mdSpacing / 2}px; max-width: calc(100% - ${mdSpacing / 2}px)` || ""}
            ${!!mdNoCompact && "margin: inherit" || ""}
        `}
    }

    @media all and (min-width: ${breakpoints.lg}) {
        display: ${({ lgHide, lg, lgBasis }) => !!lgHide ? "none" : (!!lg || !!lgBasis) ? "flex" : null};
        flex-basis: ${ ({ lgBasis, lg }) => (lg === true ? "100%" : !!lg && lg * 100 / 16 + "%") || lgBasis || null};
        flex-wrap: ${({ lgWrap, lgNowrap }) => (!!lgWrap && "wrap") || (!!lgNowrap && "nowrap") || null};
        width: ${ ({ lgWidth, lg }) => (lg === true ? "100%" : !!lg && lg * 100 / 16 + "%") || lgWidth || null};
        height: ${ ({ lgHeight }) => lgHeight || null};
        align-items: ${ ({ lgAlign }) => lgAlign || null};
        justify-content: ${ ({ lgJustify }) => lgJustify || null};
        flex-grow: ${ ({ lgGrow }) => (lgGrow === true && 1) || lgGrow || null};
        flex-shrink: ${ ({ lgShrink }) => (lgShrink === true && 1) || lgShrink || null};
        flex-direction: ${ ({ lgRow, lgColumn, lgRowReverse, lgColumnReverse }) => (!!lgRow && "row") || (!!lgColumn && "column") || (!!lgRowReverse && "row-reverse") || (!!lgColumnReverse && "row-reverse") || null};
        padding: ${ ({ lgPadding = null }) => (lgPadding !== null && lgPadding + "px") || null};
        ${({ lgSpacing = null, lgCompact, lgNoCompact }) => lgSpacing !== null && `
            > * { margin: ${lgSpacing / 2}px; }    
            ${!!lgCompact && `margin: -${lgSpacing / 2}px; max-width: calc(100% - ${lgSpacing / 2}px)` || ""}
            ${!!lgNoCompact && "margin: inherit" || ""}
        `}
    }

    @media all and (min-width: ${breakpoints.xl}) {
        display: ${({ xlHide, xl, xlBasis }) => !!xlHide ? "none" : (!!xl || !!xlBasis) ? "flex" : null};
        flex-basis: ${ ({ xlBasis, xl }) => (xl === true ? "100%" : !!xl && xl * 100 / 16 + "%") || xlBasis || null};
        flex-wrap: ${({ xlWrap, xlNowrap }) => (!!xlWrap && "wrap") || (!!xlNowrap && "nowrap") || null};    
        width: ${ ({ xlWidth, xl }) => (xl === true ? "100%" : !!xl && xl * 100 / 16 + "%") || xlWidth || null};
        height: ${ ({ xlHeight }) => xlHeight || null};
        align-items: ${ ({ xlAlign }) => xlAlign || null};
        justify-content: ${ ({ xlJustify }) => xlJustify || null};
        flex-grow: ${ ({ xlGrow }) => (xlGrow === true && 1) || xlGrow || null};
        flex-shrink: ${ ({ xlShrink }) => (xlShrink === true && 1) || xlShrink || null};
        flex-direction: ${ ({ xlRow, xlColumn, xlRowReverse, xlColumnReverse }) => (!!xlRow && "row") || (!!xlColumn && "column") || (!!xlRowReverse && "row-reverse") || (!!xlColumnReverse && "row-reverse") || null};
        padding: ${ ({ xlPadding = null }) => (xlPadding !== null && xlPadding + "px") || null};
        ${({ xlSpacing = null, xlCompact, xlNoCompact }) => xlSpacing !== null && `
            > * { margin: ${xlSpacing / 2}px; }    
            ${!!xlCompact && `margin: -${xlSpacing / 2}px; max-width: calc(100% - ${xlSpacing / 2}px)` || ""}
            ${!!xlNoCompact && "margin: inherit" || ""}
        `}
    }

    @media all and (min-width: ${breakpoints.xxl}) {
        display: ${({ xxlHide, xxl, xxlBasis }) => !!xxlHide ? "none" : (!!xxl || !!xxlBasis) ? "flex" : null};
        flex-basis: ${ ({ xxlBasis, xxl }) => (xxl === true ? "100%" : !!xxl && xxl * 100 / 16 + "%") || xxlBasis || null};
        flex-wrap: ${({ xxlWrap, xxlNowrap }) => (!!xxlWrap && "wrap") || (!!xxlNowrap && "nowrap") || null};
        width: ${ ({ xxlWidth, xxl }) => (xxl === true ? "100%" : !!xxl && xxl * 100 / 16 + "%") || xxlWidth || null};
        height: ${ ({ xxlHeight }) => xxlHeight || null};
        align-items: ${ ({ xxlAlign }) => xxlAlign || null};
        justify-content: ${ ({ xxlJustify }) => xxlJustify || null};
        flex-grow: ${ ({ xxlGrow }) => (xxlGrow === true && 1) || xxlGrow || null};
        flex-shrink: ${ ({ xxlShrink }) => (xxlShrink === true && 1) || xxlShrink || null};
        flex-direction: ${ ({ xxlRow, xxlColumn, xxlRowReverse, xxlColumnReverse }) => (!!xxlRow && "row") || (!!xxlColumn && "column") || (!!xxlRowReverse && "row-reverse") || (!!xxlColumnReverse && "row-reverse") || null};
        padding: ${ ({ xxlPadding = null }) => (xxlPadding !== null && xxlPadding + "px") || null};
        ${({ xxlSpacing = null, xxlCompact, xxlNoCompact }) => xxlSpacing !== null && `
            > * { margin: ${xxlSpacing / 2}px; }    
            ${!!xxlCompact && `margin: -${xxlSpacing / 2}px; max-width: calc(100% - ${xxlSpacing / 2}px)` || ""}
            ${!!xxlNoCompact && "margin: inherit" || ""}
        `}
    }
`

export default styledBlock