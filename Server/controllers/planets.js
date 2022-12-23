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
    


    async getDataFromApi(req,res) {
        
        /*
        axios.get('https://swapi.dev/api/planets')
        .then(async (data) => {
            console.log(data.data.results)

            data.data.results.map(async (e) => {

                await Planets.create({
                    Name                : e.name,
                    rotation_period     : e.rotation_period,
                    orbital_period      : e.orbital_period,
                    diameter            : e.diameter,
                    climate             : e.climate,
                    gravity             : e.gravity,
                    terrain             : e.terrain,
                    surface_water       : e.surface_water,
                    population          : e.population,
                    description         : e.description,
                    image               : e.image,
                    region              : e.region,
                    system              : e.system
                })
            })
        })
        .catch((error) => {
            console.log(error)
        })
        */

        const planets = await Planets.find();
        planets.map((e) => {

            console.log('🔴 -> '+ e.Name);
            console.log('http://private-anon-b97bf46abd-starhub.apiary-mock.com/api/planets/'+e.Name);
            /*
            axios.get('http://private-anon-b97bf46abd-starhub.apiary-mock.com/api/planets/'+e.Name)
            .then(async (data) => {
                //console.log(data.data)

                e.description = data.data.description;
                e.image =  data.data.image;
                e.region =  data.data.region;
                e.system =  data.data.system;

                //e.save();

                
            })
            .catch((error) => {
                console.log(error)
            })
            */

            

        })

        res.status(200).json({ resp : 's' });
    }


};

