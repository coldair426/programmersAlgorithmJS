function solution(n) {
  let answer = 0;
  const evenNumber = new Array(n).fill(0).map((v, i) => (v = i + 1));
  evenNumber.forEach((i) => {
    i % 2 === 0 ? (answer += i) : answer;
  });
  return answer;
}
