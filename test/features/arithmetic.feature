Feature: Arithmetic

@hello @CALC-2
  Scenario Outline: Add two number
    Given the numbers <number1> and <number2>
    When they are added together
    Then should the result be <result>
    Examples:
    | number1 | number2 | result |
    | 1  | 3  | 4  |
    | 2  | 4  | 6  |

@hello @CALC-6
Scenario Outline: Substract two number
    Given the numbers <number1> and <number2>
    When they are subtracted together
    Then should the result be <result>
    Examples:
    | number1 | number2 | result |
    | 4  | 2  | 2  |
    | 6  | 1  | 5  |

@hello @CALC-7
Scenario Outline: Multiply two number
    Given the numbers <number1> and <number2>
    When they are multiplied together
    Then should the result be <result>
    Examples:
    | number1 | number2 | result |
    | 6  | 2  | 12  |
    | 2  | 4  | 8  |

@hello @CALC-8
Scenario Outline: Divide two number
    Given the numbers <number1> and <number2>
    When they are divided together
    Then should the result be <result>
    Examples:
    | number1 | number2 | result |
    | 8  | 2  | 4 |
    | 6  | 2  | 3  |