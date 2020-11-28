const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    serviceID: `${process.env.serviceID}`,
    accountSID: `${process.env.accountSID}`,
    authToken: `${process.env.authToken}`,
};

