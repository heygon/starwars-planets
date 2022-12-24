const mongoose     = require('mongoose');
const axios        = require('axios');
const env          = require('dotenv/config');
const Planets      = mongoose.model('Planets');


module.exports = {

    /*
    *
    *    Register new planet
    *
    */
    async populate(req, res) {

        /* 
           #swagger.tags = ['Planets']
           #swagger.description = '<h1>Populate planets list</h1>'
           #swagger.summary = 'Populate planets list'
        
           #swagger.parameters['obj'] = { 
               in: 'body',
               description: '
                   <h4>Data model</h4>
               ',
               type: 'object',
               schema: {
                    "Name"                : String,
                    "rotation_period"     : String,
                    "orbital_period"      : String,
                    "diameter"            : String,
                    "climate"             : String,
                    "gravity"             : String,
                    "terrain"             : String,
                    "surface_water"       : String,
                    "population"          : String,
                    "description"         : String,
                    "image"               : String,
                    "region"              : String,
                    "system"              : String,
                }
           }    
        */

        let {
            Name,
            rotation_period,
            orbital_period,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water,
            population,
            description,
            image,
            region,
            system
        } = req.body;

        try {

            await Planets.create({
                Name,
                rotation_period,
                orbital_period,
                diameter,
                climate,
                gravity,
                terrain,
                surface_water,
                population,
                description,
                image,
                region,
                system
            })

            res.status(200).json({ resp: 's' });

        } catch (error) {
            res.status(500).json({ error: "Error to creat new planet" });
        }
        
    },


    /*
    *
    *    Planet details
    *
    */
    async details(req, res) {

        /* 
           #swagger.tags = ['Planets']
           #swagger.description = '<h1>Planet details</h1>'
           #swagger.summary = 'Planet details'
        
           #swagger.parameters['obj'] = { 
               in: 'body',
               description: '
                   <h4>Data model</h4>
               ',
               type: 'object',
               schema: {
                    "id": string
                }
           }    
        */

        let { id } = req.params;
        const planet = await Planets.findById(id);
        res.status(200).json({ planet });

    },


    /*
    *
    *    List of planets
    *
    */
    async list(req, res) {
        
        /* 
        #swagger.tags = ['Planets']
        #swagger.description = '<h1>List of planets</h1>'
        #swagger.summary = 'List of planets'
        
        #swagger.parameters['obj'] = { 
            in: 'body',
            description: '
                <h4>Data model</h4>
            ',
            type: 'object',
            schema: {}
        }    
        */
        let { paginate } = req.params;
        const planet = await Planets.find()
        .skip( ((paginate == undefined) ? 0 : paginate * 15) )
        .limit(15);
        res.status(200).json({ planet });
        
    },
    
};

