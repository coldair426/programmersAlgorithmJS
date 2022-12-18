function solution(n) {
  function noThree(v, i) {
    if (
      (i + 1) % 3 === 0 ||
      (i + 1) % 10 === 3 ||
      ((i + 1) % 100 >= 30 && (i + 1) % 100 <= 39)
    ) {
      return (i = '3x');
    }
    return (v = i + 1);
  }
  const noThreeVill = new Array(186).fill(0).map(noThree);
  const noThreeVillNums = noThreeVill.filter((c) => c !== '3x');

  return noThreeVillNums[n - 1];
}
