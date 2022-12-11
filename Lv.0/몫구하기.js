// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return.
// 제한사항
// num1과 num2는 0초과 100이하.
function solution(num1, num2) {
  //제한사항
  if (num1 > 0 && num1 <= 100 && num2 > 0 && num2 <= 100) {
    // Math객체의 floor 메소드 이용.
    return Math.floor(num1 / num2);
  }
}
