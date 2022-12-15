function solution(n) {
  return new Array(n)
    .fill(0)
    .map((v, i) => (v = i + 1))
    .reduce((acc, current) => (current % 2 === 0 ? (acc += current) : acc), 0);
}
