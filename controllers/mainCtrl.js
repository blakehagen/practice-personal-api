
var name = { name: 'Blake Hagen' };
var location = { location: 'Provo, UT' };
var occupations = ['Account Manager', 'Coach', 'Customer Success Manager', 'Web Developer', 'Realtor', 'Student'];

var hobbies = [
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
    }];

var skills = [
    {
        "id": 1,
        "name": "Javascript",
        "experience": "Intermediate"
    },
    {
        "id": 2,
        "name": "Angular",
        "experience": "Beginner"
    },
    {
        "id": 3,
        "name": "eating",
        "experience": "Expert"
    }
];


module.exports = {

    getName: function (req, res, next) {
        res.status(200).json(name);
    },

    getLocation: function (req, res, next) {
        res.status(200).json(location);
    },

    getOccupations: function (req, res, next) {
        if (req.query.order === 'desc') {
            occupations = occupations.sort();
        } else if (req.query.order === 'asc') {
            occupations = occupations.sort().reverse();
        }

        res.status(200).json(occupations);
    },

    getLatest: function (req, res, next) {
        res.status(200).json(occupations[occupations.length - 1]);
    },

    getHobbies: function (req, res, next) {
        res.status(200).json(hobbies);
    },

    getHobbyType: function (req, res, next) {
        var hobbyType = [];
        for (var i = 0; i < hobbies.length; i++) {
            if (hobbies[i].when === req.params.when) {
                hobbyType.push(hobbies[i]);
            }
        }
        res.status(200).json(hobbyType);
    },

    changeName: function (req, res, next) {
        name = req.body;
        res.status(200).json(name);
    },

    changeLocation: function (req, res, next) {
        location = req.body;
        res.status(200).json(location);
    },

    addOccupation: function (req, res, next) {
        occupations.push(req.body.occupation);
        res.status(200).json({ message: 'updated!' });
    },

    getSkills: function (req, res, next) {
        // var results = [];
        // for (var i = 0; i < skills.length; i++) {
        //     if (skills[i].experience === req.body.experience) {
        //         results.push(skills[i]);
        //     }
        // }
        res.status(200).json(skills);
    },

    postNewSkill: function (req, res, next) {
        skills.push({
            id: req.myId,
            name: req.body.name,
            experience: req.body.experience
        })
        res.status(200).json(skills);
    }







};