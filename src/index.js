// const { PORT } = require('./config');

// const express = require('express');

// const apiRoutes = require('./routes');

// //created a server object
// const app = express();

// app.use('/api', apiRoutes);
  
// //start the server
// app.listen(PORT, () =>{
//     console.log(`Successfully started the server on PORT : ${ PORT }`);
// });



const express = require('express');

const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes');

const app = express();

//express does not know how to access data from request so initially there was a library called bodyparser but there is other way 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    Logger.info("Successful started the server");
});



//note -> if we want to require anything always require at the top, don't use require in between the code it will hamper the readability
// npm -> package manager 
// npx -> pavkage executor



//config.json file in config --> it is a json file, it gives us configuration for three environments.

//1) development environment --> if we are building a feature for a project and that project is being used by someone and we want to test that feature so we need some
// database environment to check that in our machine that environment that we use is called development database

// 2) test environment --> if the developer has tested in his development environment then QA or Tester test the feature in test environment. 

// 3) production environment --> in this environment where actual user interact with the feature


//migrations - > it is used for version controlling . simple language scripts .
