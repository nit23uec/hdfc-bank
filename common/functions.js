import {
  OTPGEN,
  OTPVAL,
  RESENDOTP,
  getThisCard,
  prefillForm,
  createPanValidationRequest,
  getAddressDetails,
  pinCodeMaster,
  validateEmailID,
  currentAddressToggleHandler,
} from '../creditcards/corporate-creditcardFunctions.js';

import { restAPICall } from './makeRestAPI.js';

/**
 * generates the otp
 *
 * @param {object} globals - The global object containing necessary globals form data.
 */
function getOTP(globals) {
  const payload = OTPGEN.getPayload(globals);
  restAPICall(globals, 'POST', payload, OTPGEN.path, OTPGEN.successCallback, OTPGEN.errorCallback, OTPGEN.loadingText);
}

/**
 * otp validation
 *
 * @param {object} globals - The global object containing necessary globals form data.
 */
function otpValidation(globals) {
  const payload = OTPVAL.getPayload(globals);
  restAPICall(globals, 'POST', payload, OTPVAL.path, OTPVAL.successCallback, OTPVAL.errorCallback, OTPVAL.loadingText);
}

/**
 * check offer
 * @param {string} firstName - The first name of the cardholder.
 * @param {string} middleName - The last name of the cardholder.
 * @param {string} lastName - The last name of the cardholder.
 * @param {object} globals - The global object containing necessary globals form data.
 */
function checkOffer(firstName, middleName, lastName, globals) {
  createPanValidationRequest(firstName, middleName, lastName, globals);
}

/**
 * resend otp
 *
 * @param {object} globals - The global object containing necessary globals form data.
 */
function resendOTP(globals) {
  restAPICall(globals, 'POST', RESENDOTP.getPayload(globals), RESENDOTP.path, RESENDOTP.successCallback, RESENDOTP.errorCallback, RESENDOTP.loadingText);
}

export {
  getOTP,
  otpValidation,
  resendOTP,
  checkOffer,
  getThisCard,
  prefillForm,
  getAddressDetails,
  pinCodeMaster,
  validateEmailID,
  currentAddressToggleHandler,
};
