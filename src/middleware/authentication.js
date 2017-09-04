/**
 * Authentication module.
 * @module middleware/authentication
 */

import jwt from 'jsonwebtoken';

/**
 * Authenticate request contains a valid token.
 * @function
 * @param {object} req - The HTTP request.
 * @param {object} res - The HTTP response.
 * @param {function} next - The callback.
 * @returns {function} - The callback.
 */
export default function(req, res, next) {
    //const token = req.body.token || req.query.token || req.headers['x-access-token'];
    const token = req.headers['x-access-token'];

    if (!token) {
        // No token found
        return next();
    }

    jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, decoded) => {
            if (err) {
                return next();
            }

            /**
             * Token verified.
             * Save decoded to request for later use.
             */
            req.user = decoded;
            return next();
        }
    );
}
