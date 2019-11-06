const queryString = require('query-string');
const axios = require('axios');
const relief = require('../db/index');
const config = require('../config');

const charityAPI_endpoint = 'https://api.data.charitynavigator.org/v2/Organizations';

const query = {
  app_id: config.charityAPI_appId,
  app_key: config.charityAPI_appKey,
};

const charityController = {};

/**
 * @name getCharities
 * @param req
 * @param res
 * @param next
 * @description selects all charities and load them into the res.locals.charities array
 */
charityController.getCharities = (req, res, next) => {
  const {
    zip,
    cause,
    rating,
  } = req.body;
  const userQuery = {
    zip,
    rating,
    cause,
  };
  if (!userQuery.zip) delete userQuery.zip;
  if (!userQuery.rating) delete userQuery.rating;
  if (!userQuery.cause) delete userQuery.cause;
  const charityQuery = Object.assign(query, userQuery);
  const stringified = queryString.stringify(charityQuery);
  const api_call = charityAPI_endpoint + '?' + stringified;
  (async () => {
    try {
      const response = await axios(api_call);
      const filterResponse = response.data.map((organization) => {
        const {
          ein, // unique id of charity
          charityName,
          websiteURL,
          mission,
          currentRating,
          category,
          cause,
          mailingAddress,
          donationAddress,
        } = organization;
        return {
          ein, // unique id of charity
          charityName,
          websiteURL,
          mission,
          currentRating,
          category,
          cause,
          mailingAddress,
          donationAddress,
        };
      });
      res.locals.charities = filterResponse;
      return next();
    } catch (error) {
      return next(error);
    }
  })();
  // relief.query({
  //   text: 'select * from charity',
  // }).then((data) => {
  //   if (data.rowCount > 0) {
  //     console.log(`Found ${data.rowCount} charity`);
  //     res.locals.charities = [];
  //     data.rows.forEach((row) => {
  //       res.locals.charities.push({
  //         id: row.id,
  //         mission: row.mission,
  //       });
  //     });
  //   } else {
  //     console.log('No charity found');
  //   }
  //   next();
  // }).catch((err) => {
  //   next(err);
  // });
};

charityController.getCharity = (req, res, next) => {
  const { ein } = req.params;
  const stringified = queryString.stringify(query);
  const apiCall = charityAPI_endpoint + '/' + ein + '?' + stringified;
  (async () => {
    try {
      const response = await axios(apiCall);
      console.log(response.data);
      // const filterResponse = response.data.map((organization) => {
      //   const {
      //     ein, // unique id of charity
      //     charityName,
      //     websiteURL,
      //     mission,
      //     currentRating,
      //     category,
      //     cause,
      //     mailingAddress,
      //     donationAddress,
      //   } = organization;
      //   return {
      //     ein, // unique id of charity
      //     charityName,
      //     websiteURL,
      //     mission,
      //     currentRating,
      //     category,
      //     cause,
      //     mailingAddress,
      //     donationAddress,
      //   };
      // });
      res.locals.charity = response.data;
      return next();
    } catch (error) {
      return next(error);
    }
  })();
};
module.exports = charityController;
