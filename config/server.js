module.exports = ({ env }) => ({
  host: env('HOST', 'onrender.com'),
  port: env.int('PORT', 3000),
  app: {
    keys: env.array('APP_KEYS', ['qC/baQD8z9mCrT{@{L}', '=5w=TH{3Xg2Dv3.5`vN']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
