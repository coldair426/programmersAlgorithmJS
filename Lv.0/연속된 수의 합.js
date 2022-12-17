/*
문제.
연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5.
두 정수 num과 total이 주어짐.
연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return.
제한사항
1 ≤ num ≤ 100
0 ≤ total ≤ 1000
num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없음.
*/
function solution1(num, total) {
  let numSum = 0;
  for (i = 1; i < num; i++) {
    numSum += i;
  }
  return new Array(num).fill(0).map((v, i) => (v = i + (total - numSum) / num));
}

// 등차수열 합공식 이용하면 loop를 줄일 수 있음.
function solution2(num, total) {
  return new Array(num)
    .fill(0)
    .map((v, i) => (v = i + (total - ((num - 1) * num) / 2) / num));
}
