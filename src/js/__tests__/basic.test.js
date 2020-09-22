import test1 from '../user';

test('hitPoint 101', () => {
  const result = {name: 'Маг', health: 101};

  const expected = undefined;
  const received = test1(result);

  expect(received).toBe(expected);
});

test('hitPoint 100', () => {
  const result = {name: 'Маг', health: 100};

  const expected = 'healthy';
  const received = test1(result);

  expect(received).toBe(expected);
});

test('hitPoint 51', () => {
  const result = {name: 'Маг', health: 51};

  const expected = 'healthy';
  const received = test1(result);

  expect(received).toBe(expected);
});

test('hitPoint 50', () => {
  const result = {name: 'Маг', health: 50};

  const expected = 'wounded';
  const received = test1(result);

  expect(received).toBe(expected);
});

test('hitPoint 35', () => {
  const result = {name: 'Маг', health: 35};

  const expected = 'wounded';
  const received = test1(result);

  expect(received).toBe(expected);
});

test('hitPoint 15', () => {
  const result = {name: 'Маг', health: 15};

  const expected = 'wounded';
  const received = test1(result);

  expect(received).toBe(expected);
});

test('hitPoint 14', () => {
  const result = {name: 'Маг', health: 14};

  const expected = 'critical';
  const received = test1(result);

  expect(received).toBe(expected);
});

test('hitPoint 0', () => {
  const result = {name: 'Маг', health: 0};

  const expected = 'critical';
  const received = test1(result);

  expect(received).toBe(expected);
});

test('hitPoint -1', () => {
  const result = {name: 'Маг', health: -1};

  const expected = undefined;
  const received = test1(result);

  expect(received).toBe(expected);
});