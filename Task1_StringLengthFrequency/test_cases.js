module.exports = [
  {
    input: ["a", "ab", "abc", "cd", "def", "gh"],
    expect: ["ab", "cd", "gh"],
  },
  {
    input: [],
    expect: [],
  },
  {
    input: ["adc", "ab", "abc", "cd", "def", "gh"],
    expect: ["adc", "abc", "def"],
  },
  {
    input: ["a"],
    expect: ["a"],
  },
  {
    input: ["abcdefgh", "abpobcfe", "abc", "eignhgnf", "def", "gh"],
    expect: ["abcdefgh", "abpobcfe", "eignhgnf"],
  },
  {
    input: ["acv", "abt", "abc", "cdg", "def", "ghi"],
    expect: ["acv", "abt", "abc", "cdg", "def", "ghi"],
  },
];
