// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     if (req.query.name || (req.body && req.body.name)) {
//         context.res = {
//             // status: 200, /* Defaults to 200 */
//             body: "Hello " + (req.query.name || req.body.name)
//         };
//     }
//     else {
//         context.res = {
//             status: 400,
//             body: "Please pass a name on the query string or in the request body"
//         };
//     }
// };

const createHandler = require('azure-function-express').createHandler;
const app = require('express')();

app.get("/api/home/:name/:dob", (req, res) => {
    res.json({ "name":req.params.name, "dob": req.params.dob });
  // context.res= { body: "Hello " + (req.query.name) } ;
   
});

app.get("/api/work/:name/:dob", (req, res) => {
    res.json({ "name":req.params.name });
  // context.res= { body: "Hello " + (req.query.name) } ;
   
});




module.exports = createHandler(app);