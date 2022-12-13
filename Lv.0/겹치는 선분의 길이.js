// 선분 3개가 평행하게 존재.
// 세 선분은 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로,
// 배열 lines이 주어질 때 두 개 이상의 선분이 겹치는 부분의 길이를 return하는 함수.
// 제한사항
// 배열 lines의 길이는 3.
// lines의 원소의 길이는 2.
// 모든 선분의 길이는 1이상.
// 한 선분은 [a,b] 형태를 가지고, a와 b는 양 끝점을 의미.
// -100 <= a < b <= 100

// 풀이
function solution(lines) {
  let answer = 0; // 리턴값 초기화.
  const segmentABC = []; // 빈 배열 선언.
  // 선분을 1씩 자르고 일정한 형태로 가공해서 빈 배열에 삽입.
  for (i = lines[0][0]; i < lines[0][1]; i++) {
    segmentABC.push(`${i}~${i + 1}`);
  }
  for (i = lines[1][0]; i < lines[1][1]; i++) {
    segmentABC.push(`${i}~${i + 1}`);
  }
  for (i = lines[2][0]; i < lines[2][1]; i++) {
    segmentABC.push(`${i}~${i + 1}`);
  }
  // segmentABC 배열의 원소의 종류별 개수를 .reduce를 이용해 연산.
  const countSegmentABC = segmentABC.reduce((acc, current) => {
    if (acc[current]) {
      acc[current] += 1;
    } else {
      acc[current] = 1;
    }
    return acc;
  }, {});
  // 원소중 개수가 2개 이상인 원소를 리턴값에 카운트 하는 반복문.
  for (let prop in countSegmentABC) {
    if (countSegmentABC[prop] >= 2) {
      answer += 1;
    }
  }
  return answer;
}
