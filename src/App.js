import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    const carName = await this.getCarName();
    const tryNumberInput = await this.getTryNumber();
    const splitCarName = this.splitCarNameString(carName);

    this.validateCarnameInput(carName);
    this.vaildateCarName(splitCarName);

    const tryNumber = Number(tryNumberInput);
    if (Number.isNaN(tryNumber) || !Number.isInteger(tryNumber))
      throw new Error('[ERROR] 시도 횟수는 정수여야 합니다.');
    if (tryNumber < 1)
      throw new Error('[ERROR] 시도 횟수는 1 이상이여야 합니다.');

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
        rankingArry.push(splitCarName[index]);
      }
    }

    MissionUtils.Console.print(`최종 우승자 : ${rankingArry.join(', ')}`);
  }

  getCarName() {
    return MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
  }
  getTryNumber() {
    return MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
  }
  splitCarNameString(carName) {
    return carName.split(',');
  }
  validateCarnameInput(carName) {
    if (',' == carName.startsWith(',') || ',' == carName.endsWith(',')) {
      throw new Error('[ERROR] 문자열의 처음과 끝에 ,가 있습니다.');
    }
  }
  vaildateCarName(splitCarName) {
    for (const element of splitCarName) {
      if (element.length > 5)
        throw new Error('[ERROR] 이름이 5글자를 초과합니다.');

      if (element.includes(' ')) {
        throw new Error('[EEROR] 이름에 공백이 포함되어 있습니다.');
      }
      if (element == '') throw new Error('[ERROR] 이름에 공백이 있습니다.');
    }

    if (this.isDuplicate(splitCarName) == true)
      throw new Error('[ERROR] 중복되는 이름이 있습니다.');
  }
  isDuplicate(arr) {
    const isDup = arr.some(function (x) {
      return arr.indexOf(x) !== arr.lastIndexOf(x);
    });
    return isDup;
  }
}

export default App;
