module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 9999),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "46cb940a853c0ad240a7db4dd7a4892f"),
    },
  },
});
