const validations = foundRules.reduce(
  (acc, rule) => acc.concat(rule.validations),
  [],
);