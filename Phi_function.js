/**
 * The Phi φ Correlation is a measure of the dependence between variables (“variables” in the statistical sense, not in the
 * programming one). It is expressed as a coefficient whose value falls in the range of −1 to 1.
 * Correlation 0 means that the variables are not related, while correlation 1 means that the variables are perfectly related:
 * if you know one, you know the value of the other. Correlation with negative values, means that the variables are related but are
 * opposite: when one is true, the other is false.
 * @param {*} matrix
 */

function phi(matrix) {
  /**
   * matrix[1][1] YES octopus, YES X.
   * matrix[0][0] NOT octopus, NOT X.
   * matrix[1][0] YES octopus, NOT X.
   * matrix[0][1] NOT octopus, YES X.
   */
  const DIVIDEND = matrix[1][1] * matrix[0][0] - matrix[1][0] * matrix[0][1];
  /**
   * Square root of:
   * - matrix[1][0] + matrix[1][1] --> Whenever octopus is TRUE.
   * - matrix[0][0] + matrix[0][1] --> Whenever octopus is FALSE.
   * - matrix[0][1] + matrix[1][1] --> Whenever X is TRUE.
   * - matrix[0][0] + matrix[1][0] --> Whenever X is FALSE.
   */
  const DIVISOR = Math.sqrt(
    (matrix[1][0] + matrix[1][1]) *
      (matrix[0][0] + matrix[0][1]) *
      (matrix[0][1] + matrix[1][1]) *
      (matrix[0][0] + matrix[1][0])
  );
  const RESULT = DIVIDEND / DIVISOR;
  return RESULT;
}

console.log(phi([[76, 9], [4, 1]])); // Prints 0.06859943405700354!! Test case passed :D
