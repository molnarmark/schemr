// How not to do testing.
// I'm just too lazy. Deal with it folks.
// I'd love getting a PR that implements proper unit testing for Schemr.

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
