/*
문제.
점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어짐.
[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
주어진 네 개의 점을 두 개씩 이었을 때,
두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하는 함수.
제한사항.
0 ≤ dots의 원소 ≤ 100
dots의 길이 = 4
dots의 원소의 길이 = 2
dots의 원소는 [x, y] 형태이며 x, y는 정수.
서로 다른 두개 이상의 점이 겹치는 경우가 없음.
**두 직선이 겹치는 경우(일치하는 경우) 1을 return.**
임의의 두 점을 이은 직선이 x축 또는 y축과 평행한 경우는 주어지지 않음.
*/
function solution(dots) {
  let answer = 0;
  for (i = 1; i < 4; i++) {
    const dotsCopy = dots.slice(0, 4); // 참조형 데이터 복사.
    const segment1 = dotsCopy.splice(i, 1);
    segment1.push(dotsCopy.shift());
    const segment2 = dotsCopy;
    const segment1Slope =
      (segment1[0][1] - segment1[1][1]) / (segment1[0][0] - segment1[1][0]);
    const segment2Slope =
      (segment2[0][1] - segment2[1][1]) / (segment2[0][0] - segment2[1][0]);
    if (segment1Slope === segment2Slope) {
      answer = 1;
      break;
    }
  }
  return answer;
}
