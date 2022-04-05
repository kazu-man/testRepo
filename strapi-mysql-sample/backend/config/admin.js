module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '851337fdce00e688340257c1bb5ac9ba'),
  },
});
