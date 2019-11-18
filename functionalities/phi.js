/**
 *  PHI
 *
 * This are all the functions that are needed to calculate phi
 *
 */

/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities
 */
"use strict";

/**
 * The Phi φ Correlation is a measure of the dependence between variables (“variables” in the statistical sense, not in the
 * programming one). It is expressed as a coefficient whose value falls in the range of −1 to 1.
 * Correlation 0 means that the variables are not related, while correlation 1 means that the variables are perfectly related:
 * if you know one, you know the value of the other. Correlation with negative values, means that the variables are related but are
 * opposite: when one is true, the other is false.
 *
 */

function calculatePhi() {
  /**
   * this.correlationTable[1][1] YES octopus, YES action.
   * this.correlationTable[0][0] NOT octopus, NOT action.
   * this.correlationTable[1][0] YES octopus, NOT action.
   * this.correlationTable[0][1] NOT octopus, YES action.
   */
  const DIVIDEND =
    this.correlationTable[1][1] * this.correlationTable[0][0] -
    this.correlationTable[1][0] * this.correlationTable[0][1];
  /**
   * Square root of:
   * - this.correlationTable[1][0] + this.correlationTable[1][1] --> Whenever octopus is TRUE.
   * - this.correlationTable[0][0] + this.correlationTable[0][1] --> Whenever octopus is FALSE.
   * - this.correlationTable[0][1] + this.correlationTable[1][1] --> Whenever action is TRUE.
   * - this.correlationTable[0][0] + this.correlationTable[1][0] --> Whenever action is FALSE.
   */
  const DIVISOR = Math.sqrt(
    (this.correlationTable[1][0] + this.correlationTable[1][1]) *
      (this.correlationTable[0][0] + this.correlationTable[0][1]) *
      (this.correlationTable[0][1] + this.correlationTable[1][1]) *
      (this.correlationTable[0][0] + this.correlationTable[1][0])
  );
  // We assign a new property to the object called "phi", which will contain:
  this.phi = DIVIDEND / DIVISOR;
  // If the parameter received by this function is not proper, we thorw an error containing:
}

// Here we export the functionality.
exports.calculatePhi = calculatePhi;
