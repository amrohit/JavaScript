//Custom Getters and Setters

//Lets customize when someone reads or access our values

const data = {
    location: "India"
}
console.log(data.location); //India
data.location = "USA";
console.log(data.location); //USA

//Sanitaztion and Validation of data
//intercepting getter or setter properties value
const data2 = {
    get location() {
        return this._location;
    },
    //we will get the value in arg assigned right side of = 
    set location(value) {
        this._location = value.trim(); //setting secret property
    }
}
console.log(data2); //{location: [Getter/Setter]}
console.log(data2.location);
data2.location = 'America '

const data3 = {
    locations: [],
    get location() {
        return this._location;
    },
    //we will get the value in arg assigned right side of = 
    set location(value) {
        this._location = value.trim(); //setting secret property
        this.locations.push(this._location)
    }
}

console.log(data3.location);
data3.location = 'India';
data3.location = 'USA'
console.log(data3);
/*{ locations: [ 'India', 'USA' ],
location: [Getter/Setter],
_location: 'USA' } */