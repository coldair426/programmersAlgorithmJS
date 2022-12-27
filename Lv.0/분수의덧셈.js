/*
문제.
https://school.programmers.co.kr/learn/courses/30/lessons/120808
*/
function solution(denum1, num1, denum2, num2) {
  const denum = denum1 * num2 + denum2 * num1;
  const num = num1 * num2;
  // denum과 num중 큰 수를 이용한 루프.
  for (let i = denum >= num ? num : denum; i > 1; i--) {
    // 공약수가 있다면,
    if (denum % i === 0 && num % i === 0) {
      return [denum / i, num / i];
    }
  }
  // 공약수가 없어 for루프를 나왔을 때,
  return [denum, num];
}
