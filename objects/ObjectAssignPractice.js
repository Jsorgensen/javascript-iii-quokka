var person = {
    name: "Snarf",
    size: "Small",
    color: "redish"
}

var thundercat = {
    race: "thundercat",
    size: "medium",
    sound: "Thundercats Ho!"
}

var smurf = {
    race: "smurf",
    color: "blue"
}


// Make the person a thunder cat by assigning thundercat to person

var thunderPerson = Object.assign({}, person, thundercat);
person;
thunderPerson;
// We've permanently modified person, but it's better to make a copy.  So copy person then thundercat into a new empty object

// Make the a copy of a person that is a smurf
var personSmurf = Object.assign({}, person, smurf);
person;
personSmurf;
// Make a copy of a person that is a smurf then a thundercat
var personSmurfThudercat = Object.assign({}, person, smurf, thundercat);
person;
personSmurfThudercat;
// Make a copy of a person that is a thundercat then a smurf
var personThundercatSmurf = Object.assign({}, person, thundercat, smurf);
person;
personThundercatSmurf;