import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주', () => {
  test('기능 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외 테스트', async () => {
    // given
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});

test.each([
  { inputs: ['pobi,javaji'], description: '자동차 이름이 5자 초과' },
  { inputs: ['pobi,woni', '-1'], description: '이동 횟수가 1보다 작음' },
  { inputs: ['pobi,woni', '3.5'], description: '이동 횟수가 소수' },
  { inputs: ['pobi,woni', 'abc'], description: '이동 횟수 숫자가 아님' },
  { inputs: [''], description: '이름이 공백 입력' },
  {
    inputs: ['pobbi', '', 'javaji'],
    description: '자동차 이름 사이에 공백이 있음',
  },
])('예외 테스트 - $description', async ({ inputs }) => {
  mockQuestions(inputs);

  const app = new App();

  await expect(app.run()).rejects.toThrow('[ERROR]');
});
