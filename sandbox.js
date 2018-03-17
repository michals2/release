const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

console.log(byPropKey("username", "test val")());
