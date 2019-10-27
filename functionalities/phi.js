/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities.
 */
"use strict";

/**
 * The Phi φ Correlation is a measure of the dependence between variables (“variables” in the statistical sense, not in the
 * programming one). It is expressed as a coefficient whose value falls in the range of −1 to 1.
 * Correlation 0 means that the variables are not related, while correlation 1 means that the variables are perfectly related:
 * if you know one, you know the value of the other. Correlation with negative values, means that the variables are related but are
 * opposite: when one is true, the other is false.
 * @param {*} correlationTable The given correlationTable to calculate PHI.
 */
function calculatePhi(correlationTable) {
  if (isCorrelationTableValid(correlationTable)) {
    /**
     * correlationTable[1][1] YES octopus, YES action.
     * correlationTable[0][0] NOT octopus, NOT action.
     * correlationTable[1][0] YES octopus, NOT action.
     * correlationTable[0][1] NOT octopus, YES action.
     */
    const DIVIDEND =
      correlationTable[1][1] * correlationTable[0][0] -
      correlationTable[1][0] * correlationTable[0][1];
    /**
     * Square root of:
     * - correlationTable[1][0] + correlationTable[1][1] --> Whenever octopus is TRUE.
     * - correlationTable[0][0] + correlationTable[0][1] --> Whenever octopus is FALSE.
     * - correlationTable[0][1] + correlationTable[1][1] --> Whenever action is TRUE.
     * - correlationTable[0][0] + correlationTable[1][0] --> Whenever action is FALSE.
     */
    const DIVISOR = Math.sqrt(
      (correlationTable[1][0] + correlationTable[1][1]) *
        (correlationTable[0][0] + correlationTable[0][1]) *
        (correlationTable[0][1] + correlationTable[1][1]) *
        (correlationTable[0][0] + correlationTable[1][0])
    );
    return DIVIDEND / DIVISOR;
  } else {
    return "The correlationTable passed by parameter is not correct!";
  }
}

/**
 * This function checks if the given correlationTable meets the needed requirements to be used by
 * calculatePhi function.
 * @param {*} correlationTable The given correlationTable to calculate PHI.
 */
function isCorrelationTableValid(correlationTable) {
  return (
    correlationTable !== null &&
    Array.isArray(correlationTable) === true &&
    Array.isArray(correlationTable[0]) === true &&
    Array.isArray(correlationTable[1]) === true &&
    correlationTable.length === 2 &&
    correlationTable[0].length === 2 &&
    correlationTable[1].length === 2
  );
}

// Here we export the necessary functionalities.
module.exports = {
  calculatePhi,
  isCorrelationTableValid
};
