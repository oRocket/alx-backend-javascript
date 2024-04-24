import { taskFirst, taskNext, getLast } from './0-constants';

// Test for taskFirst function
test('taskFirst returns the correct string', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
});

// Test for taskNext function
test('taskNext returns the correct combination', () => {
  expect(taskNext()).toBe('But sometimes let is okay');
});

// Test for getLast function
test('getLast returns the correct string', () => {
  expect(getLast()).toBe(' is okay');
});
