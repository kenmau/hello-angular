const OktaJwtVerifier = require("@okta/jwt-verifier");

const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: "0oad9827d6BmiJyI95d7",
  issuer: "https://dev-52813471.okta.com/oauth2/default",
});

module.exports = async function oktaAuth(req, res, next) {
  try {
    const token = req.token;
    if (!token) {
      return res.status(401).send("Not Authorized");
    }
    await oktaJwtVerifier.verifyAccessToken(token, "api://default");
    next();
  } catch (err) {
    return res.status(401).send(err.message);
  }
};
