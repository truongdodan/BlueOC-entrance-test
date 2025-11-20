const test_cases = require("./test_case");
const getSum = require("./getSum");

function testSumofTopTwoIntegers() {
  for (let i = 0; i < test_cases.length; i++) {
    const result = getSum(test_cases[i].input);

    if (JSON.stringify(result) !== JSON.stringify(test_cases[i].expect)) {
      console.log(`
               Failed at: [${test_cases[i].input}]\n
               Output: [${result}]\n
               Expected: [${test_cases[i].expect}]
            `);
      return;
    }
  }
  console.log(`You've passed, congratulation!`);
}

testSumofTopTwoIntegers();
