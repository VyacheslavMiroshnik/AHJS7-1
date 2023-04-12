export default function validation(string) {
  const checkAllCorrectSymbols = /[\w-]+/i.test(string);
  const checkFirstSymbol = /^[a-z]/i.test(string);
  const checkLastSymbol = /[a-z]$/i.test(string);
  const checkTreeNumbersInRow = !/\d{4,}/.test(string);
  return checkAllCorrectSymbols && checkFirstSymbol && checkLastSymbol && checkTreeNumbersInRow;
}
