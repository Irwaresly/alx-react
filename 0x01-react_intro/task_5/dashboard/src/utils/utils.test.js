import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear
test("returns current year", () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Test for getFooterCopy
test("returns correct footer copy for index", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
});

test("returns correct footer copy for non-index", () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

// Test for getLatestNotification
test("returns the latest notification", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});
