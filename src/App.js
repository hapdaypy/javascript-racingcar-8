import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    const carName = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );

    const carNameLength = carName.length;

    if (',' == carName[carNameLength - 1] || ',' == carName[0]) {
      // 문자열 마지막에 , 가 있을 경우 ERROR를 출력하고 종료
      throw new Error('[ERROR] 문자열의 처음과 끝에 ,가 있으면 안됩니다.');
    }
    const tryNumberInput =
      await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');

    const tryNumber = Number(tryNumberInput);
    if (Number.isNaN(tryNumber) || tryNumber < 1)
      throw new Error('[ERROR] 시도 횟수는 1이상의 정수여야 합니다.');
    if (!Number.isInteger(tryNumber)) {
      // !는 "not"을 의미
      throw new Error('[ERROR] 시도 횟수는 정수여야 합니다.');
    }

    const splitCarName = carName.split(','); // ,를 기준으로 자동차 이름 나누기

    for (const element of splitCarName) {
      if (element.includes(' ')) {
        throw new Error('이름에 공백이 포함되어 있습니다.');
      }
    }

    for (const element of splitCarName) {
      if (element == '' || element.length > 5)
        throw new Error(
          '[ERROR] 이름에 공백이 있거나 5글자를 넘어가면 안됩니다.',
        );
    }

    function isDuplicate(arr) {
      const isDup = arr.some(function (x) {
        return arr.indexOf(x) !== arr.lastIndexOf(x);
      });

      return isDup;
    }

    if (isDuplicate(splitCarName) == true)
      throw new Error('[ERROR] 같은 이름이 있으면 안 됩니다.'); // 중복되는 값 찾기

    const eachCarRacingReocord = Array.from(
      { length: splitCarName.length },
      () => '',
    );

    const numberOfCar = splitCarName.length;

    for (let index = 0; index < tryNumber; index++) {
      for (let index2 = 0; index2 < numberOfCar; index2++) {
        let straightjDiscrimination = MissionUtils.Random.pickNumberInRange(
          0,
          9,
        );

        if (straightjDiscrimination >= 4) {
          eachCarRacingReocord[index2] += '-';
        }
        MissionUtils.Console.print(
          `${splitCarName[index2]} : ${eachCarRacingReocord[index2]}`,
        );
      }
      MissionUtils.Console.print('');
    }

    let largestDistance = 0;

    for (let index = 0; index < eachCarRacingReocord.length; index++) {
      if (largestDistance < eachCarRacingReocord[index].length)
        largestDistance = eachCarRacingReocord[index].length;
    }

    const rankingArry = [];

    for (let index = 0; index < numberOfCar; index++) {
      if (largestDistance == eachCarRacingReocord[index].length) {
        //   console.log(eachCarRacingReocord[index]);
        rankingArry.push(splitCarName[index]);
      }
    }

    MissionUtils.Console.print(`최종 우승자 : ${rankingArry.join(', ')}`); // 파라미터를 1개만 쓸 수 잇음, 표준임
  }
}

export default App;
