function count() {
    const oneDay = 24 * 60 * 60 * 1000
    const firstDate = new Date(2020, 2, 24)
    const today = new Date().setHours(0,0,0,0)

    const diffDays = Math.round(Math.abs((firstDate - today) / oneDay))
    
    console.log('Diferença de dias contadas')
    
    return diffDays
}

module.exports = count