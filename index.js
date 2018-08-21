const overwriteProperties = require('overwrite-properties');

class Schemr {
  static get field() {
    // Totally random value as a placeholder
    return 0x153535;
  }

  constructor(name, fields) {
    this.name = name;
    this.fields = fields;
  }

  getFields() {
    return overwriteProperties(this.fields, 'SchemrField');
  }

  getName() {
    return this.name;
  }

  toJSON() {
    return JSON.stringify(
      {
        name: this.name,
        fields: this.getFields(),
      },
      null,
      4,
    );
  }
}

const defaultOptions = {
  replaceEmptyFieldsWith: null,
};

function test(schema, object, options = {}) {
  const replaceEmptyFieldsWith =
    options.replaceEmptyFieldsWith !== null
      ? options.replaceEmptyFieldsWith
      : defaultOptions.replaceEmptyFieldsWith;
  const nulledFields = {};
  const filteredObject = {};

  Object.keys(object).forEach(key => {
    if (schema.fields[key]) {
      filteredObject[key] = object[key];
    }
  });

  return { ...overwriteProperties(schema.fields, replaceEmptyFieldsWith), ...filteredObject };
}

const testSchema = new Schemr('post', {
  name: Schemr.field,
  content: {
    title: Schemr.field,
    text: Schemr.field,
  },
});

module.exports.Schemr = Schemr;
module.exports.check = test;
