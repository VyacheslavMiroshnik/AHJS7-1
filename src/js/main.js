export default function validation(string) {
  const validRules = [/[^\w-]+/, /^[^a-z]/i, /[^a-z]$/i, /\d{4,}/];
  let resValidation = true;
  validRules.forEach((rule) => {
    if (rule.test(string)) {
      resValidation = false;
    }
  });
  return resValidation;
}
