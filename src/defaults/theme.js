let importedConfig
try { importedConfig = require('../../facaade.theme.js') } catch (err) { }

export const colors = {
    black: "#2A2D30",
    accent: "#0092E0",
    ...(!!importedConfig && !!importedConfig.default && !!importedConfig.default.colors ? importedConfig.default.colors : {})
}

export const breakpoints = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
    ...(!!importedConfig && !!importedConfig.default && !!importedConfig.default.breakpoints ? importedConfig.default.breakpoints : {})
}