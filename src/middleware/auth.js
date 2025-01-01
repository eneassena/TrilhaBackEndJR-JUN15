const jsonwebtoken = require('jsonwebtoken');

const PRIVATE_KEY = 'trilha-backend-api';
 

const getPrivateKey = () => {
    return PRIVATE_KEY;
}

const tokenValidated = (request,response,next) => {
    const [token] = request.headers.auhtorization?.split('') || [' ', ' '];
    if(!token) return response.status(401).send('Access denied. No token provided');    

    try {
        const payload = jsonwebtoken.verify(token, PRIVATE_KEY);
        const userIDFromToken = typeof payload !== 'string' && payload.user;

        if(!user && !userIDFromToken) {
            return response.status(401).send('token invalid');
        }

        request.headers['user'] = payload.user; 

        return next();

    } catch(error) {
        return response.status(401).send('token invalid');
    }
}


module.exports = {
    tokenValidated,
    getPrivateKey
} 

