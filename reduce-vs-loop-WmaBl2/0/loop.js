const validations = [];
for (const rule of foundRules) {
  validations.push(...rule.validations);
}