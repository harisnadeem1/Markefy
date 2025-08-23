module.exports = {
  apps: [
    {
      name: "markefy-api",
      script: "./server/index.js",
      cwd: "/var/www/Markefy",   // working directory
      watch: false,
      env: {
        PORT: 5000,
        GMAIL_USER: "giankom30@gmail.com",
        GMAIL_PASS: "oxmkfudghhspxoue",
        RECEIVER_EMAIL: "nadeemharis781@gmail.com"
      }
    }
  ]
};
