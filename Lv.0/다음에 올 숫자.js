// 등차수열 or 등비수열 common 배열이 주어질 때,
// 마지막 원소 다음으로 올 숫자를 return하는 함수.
// 제한사항
// common의 길이는 2초과 1000미만,
// common의 원소는 -1000초과 2000미만.
// 공비가 0인 경우는 없음.
function solution(common) {
  let answer = 0; // 리턴값 초기화.
  let lastValue = common[common.length - 1]; // 배열의 마지막 원소의 값.
  let commonDiff = common[1] - common[0]; // 공차로 추정하는 값.
  let commonRatio = common[1] / common[0]; // 공비로 추정하는 값.
  // 제한사항
  if (
    2 < common.length &&
    common.length < 1000 &&
    ((common[0] > -1000 && lastValue < 2000) ||
      (common[0] < 2000 && lastValue > -1000))
  ) {
    // 등차수열인지 확인하는 조건.
    if (lastValue === common[0] + (common.length - 1) * commonDiff) {
      answer = lastValue + commonDiff;
      return answer;
    } else {
      // 등차수열이 아니면, 등비수열.
      answer = lastValue * commonRatio;
      return answer;
    }
  }
}
