import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const carName = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const tryNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    const carNameLength = carName.length;

    const splitCarName = carName.split(',');
    console.log(splitCarName);
  }
}

export default App;
