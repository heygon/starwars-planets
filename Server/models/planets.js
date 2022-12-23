const mongoose = require('mongoose');

const PlanetsScheema = new mongoose.Schema({
    Name                : String,
    rotation_period     : String,
    orbital_period      : String,
    diameter            : String,
    climate             : String,
    gravity             : String,
    terrain             : String,
    surface_water       : String,
    population          : String,
    description         : String,
    image               : String,
    region              : String,
    system              : String,
},{
    timestamps: true
});

module.exports = mongoose.model('Planets', PlanetsScheema);

