module.exports = ({ env }) => ({
    jwt_secret: env('JWT_SECRET')
});
