import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    const carName = await this.getCarName();
    const tryNumberInput = await this.getTryNumber();
    const splitCarName = this.splitCarNameString(carName);

    this.validateCarnameInput(carName);
    this.vaildateCarName(splitCarName);
    this.vaildateTryNumber(tryNumberInput);

    const tryNumber = this.convertTryNumberToNumber(tryNumberInput);
    const numberOfCar = splitCarName.length;

    //////////////////////////// 레이싱 시작
    const eachCarRacingReocord = Array(numberOfCar).fill('');

    this.startRacing(
      eachCarRacingReocord,
      tryNumber,
      numberOfCar,
      splitCarName,
    );

    /////////////////////////////// 최대값 찾기
    const largestDistance = this.findMaxDistance(eachCarRacingReocord);

    /////////////////////////// 랭킹
    const rankingArry = [];

    this.makeRanking(
      rankingArry,
      largestDistance,
      eachCarRacingReocord,
      numberOfCar,
      splitCarName,
    );

    this.rankingPrint(rankingArry);
    ////////////////////////////// 출
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
  vaildateTryNumber(tryNumberInput) {
    const tryNumberTest = Number(tryNumberInput);
    if (Number.isNaN(tryNumberTest) || !Number.isInteger(tryNumberTest))
      throw new Error('[ERROR] 시도 횟수는 정수여야 합니다.');
    if (tryNumberTest < 1)
      throw new Error('[ERROR] 시도 횟수는 1 이상이여야 합니다.');
  }
  convertTryNumberToNumber(tryNumberInput) {
    const tryNumber = Number(tryNumberInput);
    return tryNumber;
  }

  startRacing(eachCarRacingReocord, tryNumber, numberOfCar, splitCarName) {
    for (let index = 0; index < tryNumber; index++) {
      for (let index2 = 0; index2 < numberOfCar; index2++) {
        let straightjDiscrimination = this.makeRandomVariable();
        if (straightjDiscrimination >= 4) {
          eachCarRacingReocord[index2] += '-';
        }
        MissionUtils.Console.print(
          `${splitCarName[index2]} : ${eachCarRacingReocord[index2]}`,
        );
      }
      MissionUtils.Console.print('');
    }
  }
  makeRandomVariable() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
  findMaxDistance(eachCarRacingReocord) {
    let largestDistance = 0;
    for (let index = 0; index < eachCarRacingReocord.length; index++) {
      if (largestDistance < eachCarRacingReocord[index].length)
        largestDistance = eachCarRacingReocord[index].length;
    }
    return largestDistance;
  }
  makeRanking(
    rankingArry,
    largestDistance,
    eachCarRacingReocord,
    numberOfCar,
    splitCarName,
  ) {
    for (let index = 0; index < numberOfCar; index++) {
      if (largestDistance == eachCarRacingReocord[index].length) {
        rankingArry.push(splitCarName[index]);
      }
    }
  }

  rankingPrint(rankingArry) {
    MissionUtils.Console.print(`최종 우승자 : ${rankingArry.join(', ')}`);
  }
}

export default App;
