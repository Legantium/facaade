export const getClassName = (classNameArr, suffix = null) => {

    if(typeof classNameArr === "string") classNameArr = [classNameArr]
    
    classNameArr = classNameArr.filter(cn => !!cn)

    if (!!suffix) classNameArr = classNameArr.map(className => `${className}${suffix}`)

    return classNameArr.join(" ").trim()
}