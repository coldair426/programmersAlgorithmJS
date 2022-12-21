function solution(quiz) {
  const answer = [];
  quiz.forEach((val) => {
    const [exp, result] = val.split(' = ');
    if (exp.includes(' + ')) {
      const [num1, num2] = exp.split(' + ');
      +num1 + +num2 === +result ? answer.push('O') : answer.push('X');
    }
    if (exp.includes(' - ')) {
      const [num1, num2] = exp.split(' - ');
      +num1 - +num2 === +result ? answer.push('O') : answer.push('X');
    }
  });
  return answer;
}
