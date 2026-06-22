function logreq(req, res, next) {
    console.log(`${req.method} ${req.path}`);
    next();
}

function addTimeStamp(req, res, next) {
    req.timeStamp = new Date().toISOString();
    next();
}

export { logreq, addTimeStamp};