export default manifest => {
  manifest.addComponent({
    name: "Twitters",
    displayName: "Twitters",
    fields: [
      { name: "screenName", type: manifest.fieldTypes.singleLineText },
      { name: "username", type: manifest.fieldTypes.singleLineText }
    ]
  });
};
