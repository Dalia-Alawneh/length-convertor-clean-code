const unitInputs = document.querySelectorAll('.input-warpper input')
const convertToAllUnits = (standardUnit) => {
    unitInputs.forEach(input => {
        const toCurrentUnitFormula = input.dataset.currentunitFormula
        const currentUnitFurmulaAfterSubstitution = toCurrentUnitFormula.replace(/x/, standardUnit.toString())
        const currentUnitFurmulaSolution = eval(currentUnitFurmulaAfterSubstitution)
        input.value = currentUnitFurmulaSolution
    });
}

const resetAllInputs =  () =>{
    unitInputs.forEach(input => input.value = '')
}

const convertToStandardUnit = (input) => {
    const value = input.value
    if (value.trim() === "") {
        resetAllInputs()
        return
    }
    const toStandardFormula = input.dataset.standardFormula
    const standardFormulaAfterSubstitution = toStandardFormula.replace(/x/, value.toString())
    const standardFormulaSolution = eval(standardFormulaAfterSubstitution)
    convertToAllUnits(standardFormulaSolution)
}

unitInputs.forEach(input => {
    input.addEventListener("keyup", ()=> convertToStandardUnit(input))
})
