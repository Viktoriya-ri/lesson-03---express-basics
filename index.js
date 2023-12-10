const express = require('express');
const uuid = require('uuid').v4;   
const cors = require('cors');
const fs = require('fs').promises;

const app = express();

/*HTTP methods========================
POST, GET, PUT, PATCH, DELETE
*/

app.get('/ping', (req, res) => {
    // console.log('||=================>>>>>>>>>>>>>>>');
    // console.log(req);
    // console.log('<<<<<<<<========================||');
    // // res.send('<h1>Hello from express!!</h1>');
    // res.json({
    //     status: 'success!!',
    //     data: {
    //         userId: 1,
    //         userName: 'Test User',
    //     }
    // })
    res.status(200).json({
        msg: 'pong!',
    });
    // res.send('Done!');
});

app.post();

app.get();

app.get();

app.patch();

app.delete();


const port = 3001;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}..`);
});
