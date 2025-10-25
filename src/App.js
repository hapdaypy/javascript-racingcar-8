import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const carName = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const carNameLength = carName.length;
    if (',' == carName[carNameLength - 1]) {
      // 문자열 마지막에 , 가 있을 경우 ERROR를 출력하고 종료
      Console.print('ERROR');
      return;
    }

    const tryNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');

    const splitCarName = carName.split(','); // ,를 기준으로 자동차 이름 나누기
    console.log(splitCarName);
  }
}

export default App;
