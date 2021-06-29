

// middleware for the CORS Settings
exports.setCors = (req, res, next) => {
    // set header in the response for CORS Settings
    // http://localhost:3000 means: allow website on localhost:3000 to access my backend
    res.header("Access-Control-Allow-Origin", '*');
    // localhost:3000 can only send these headers with a request: Origin, x-Requested-With, Content-Type, Accept
    res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
    // client can send only these methods: POST, GET, PUT, DELETE, OPTIONS
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    // next will delegate the request to my router
    res.header("Access-Control-Expose-Headers", "auth");
    next();
}