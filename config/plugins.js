module.exports = ({ env }) => ({
    // ...
    jwtSecret: env('JWT_SECRET'), // replace 'my-secret' with your own secret string
    // ...
});
