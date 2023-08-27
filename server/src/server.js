// Import modules
const http = require('http');
const app = require('./app');
const {
    loadPlanetsData
} = require('./models/planets.model');

const PORT = process.env.PORT || 8000; //Port on which the backend server wil run (Can be configurable)

const server = http.createServer(app);

async function startServer() {
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}




// Things to  be performed before server starts
startServer();
