# 📃 Schemr

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> The Ultimate Tiny schema validation package.

### Getting Started
`npm install --save schemr`

### Usage

You can find a working example in `tester.js`.
```javascript
const { Schemr, check } = require('schemr');

const testSchema = new Schemr('human-being', {
  name: Schemr.field,
  age: Schemr.field,
  job: Schemr.field,
});

console.log(testSchema.getName());
//=> human-being
console.log(testSchema.getFields());
//=> { name: 'SchemrField', age: 'SchemrField', job: 'SchemrField' }
console.log(testSchema.toJSON());
/*=>
{
    "name": "human-being",
    "fields": {
        "name": "SchemrField",
        "age": "SchemrField",
        "job": "SchemrField"
    }
}
*/

const testData = {
  name: 'Mark',
  extraFieldForNoReason: false,
};

const checkedObject = check(testSchema, testData);
console.log(checkedObject);
//=> { name: 'Mark', age: 21, job: undefined }

const checkedObject2 = check(testSchema, testData, {
  replaceEmptyFieldsWith: 'unfilled',
});

console.log(checkedObject2);
//=> { name: 'Mark', age: 'unfilled', job: 'unfilled' }
```

### License
- MIT

### Roadmap
*TODO*

