const authorize  = (req, res, next) => {
    // console.log('authorize user');
    const { user } = req.query;
    if ( user === 'admin') {
        req.user = { name: 'admin', id: 3 }; // add user to request object
        console.log(req.user); // log user object
        // return res.send('Welcome Admin'); // send response if user is admin
        next();
    }
    else {
        return res.status(401).send('Unauthorized'); // send unauthorized response if user is not admin
        
    }
    
}

module.exports = authorize; // export the authorize middleware