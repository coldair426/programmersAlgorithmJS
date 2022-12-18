function solution(n) {
  return [...new Array(n * 3)]
    .map((_, i) => (v = i + 1))
    .filter((v) => v % 3 !== 0 && !v.toString().includes('3'))[n - 1];
}
