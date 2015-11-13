
var name = { name: 'Blake Hagen' };
var location = { location: 'Provo, UT' };
var occupations = {
    occupations: ['Account Manager', 'Coach', 'Customer Success Manager', 'Web Developer', 'Realtor', 'Student']
};

var hobbies = {
    hobbies: [
        {
            name: 'watching sports',
            when: 'current'
        },
        {
            name: 'playing sports',
            when: 'past'
        },
        {
            name: 'Watching cartoons',
            when: 'past'
        },
        {
            name: 'quacking',
            when: 'current'
        }]
};

module.exports = {

    getName: function (req, res, next) {
        res.status(200).json(name);
        console.log('I got you the name!');
    },

    getLocation: function (req, res, next) {
        res.status(200).json(location);
    },

    getOccupations: function (req, res, next) {
        res.status(200).json(occupations);
    },

    getLatest: function (req, res, next) {
        res.status(200).json(occupations.occupations[occupations.occupations.length - 1]);
    },

    getHobbies: function (req, res, next) {
        res.status(200).json(hobbies);
    }







}