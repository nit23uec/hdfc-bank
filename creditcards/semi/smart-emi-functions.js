import { fetchJsonResponse } from '../../common/makeRestAPI.js';
import * as SEMI_CONSTANT from './constant.js';
import {
  generateUUID, moveWizardView, urlPath,
} from '../../common/formutils.js';

const {
  CURRENT_FORM_CONTEXT: currentFormContext,
  JOURNEY_NAME: journeyName,
  SEMI_ENDPOINTS: semiEndpoints,
  PRO_CODE,
  DOM_ELEMENT: domElements,
  MISC,
} = SEMI_CONSTANT;

/**
   * generates the journeyId
   * @param {string} visitMode - The visit mode (e.g., "online", "offline").
   * @param {string} journeyAbbreviation - The abbreviation for the journey.
   * @param {string} channel - The channel through which the journey is initiated.
   */
// eslint-disable-next-line no-unused-vars
function generateJourneyId(visitMode, journeyAbbreviation, channel) {
  const dynamicUUID = generateUUID();
  const journeyId = `${dynamicUUID}_01_${journeyAbbreviation}_${visitMode}_${channel}`;
  return journeyId;
}

// Initialize all SEMI Journey Context Variables & formRuntime variables.
currentFormContext.journeyName = journeyName;
currentFormContext.journeyID = generateJourneyId('a', 'b', 'c');

/**
 * generates the otp
 * @param {string} mobileNumber
 * @param {string} cardDigits
 * @param {object} globals
 * @return {PROMISE}
 */
function getOTPV1(mobileNumber, cardDigits, globals) {
  globals.functions.setProperty(globals.form.runtime.journeyId, { value: currentFormContext.journeyID });
  currentFormContext.journeyName = SEMI_CONSTANT.JOURNEY_NAME;
  const jsonObj = {
    requestString: {
      mobileNo: mobileNumber,
      cardNo: cardDigits,
      journeyID: currentFormContext.journeyID,
      journeyName: currentFormContext.journeyName,
    },
  };
  const path = semiEndpoints.otpGen;
  return fetchJsonResponse(path, jsonObj, 'POST', true);
}

/**
 * generates the otp
 * @param {string} mobileNumber
 * @param {string} cardDigits
 * @param {object} globals
 * @return {PROMISE}
 */
function otpValV1(mobileNumber, cardDigits, otpNumber) {
  const jsonObj = {
    requestString: {
      mobileNo: mobileNumber,
      cardNo: cardDigits,
      OTP: otpNumber,
      proCode: PRO_CODE,
      journeyID: currentFormContext.journeyID,
      journeyName: currentFormContext.journeyName,
      // channel: 'ADOBE_WHATSAPP',
    },
  };
  const path = semiEndpoints.otpVal;
  return fetchJsonResponse(path, jsonObj, 'POST', true);
}

/*
 * Displays card details by updating the UI with response data.
 * @param {object} globals - global object
 * @param {object} response - response from the checkEligibilty
 */
const cardDisplay = (globals, response) => {
  const creditCardDisplay = globals.form.aem_semicreditCardDisplay;
  globals.functions.setProperty(creditCardDisplay, { visible: true });
  globals.functions.setProperty(creditCardDisplay.aem_semicreditCardContent.aem_customerNameLabel, { value: `Dear ${response?.cardHolderName}` });
  globals.functions.setProperty(creditCardDisplay.aem_semicreditCardContent.aem_outStandingAmt, { value: `${MISC.rupeesUnicode} ${response?.blockCode?.bbvlogn_card_outst}` }); // confirm it ?
  globals.functions.setProperty(creditCardDisplay.image1723123046525, { value: urlPath(response.cardTypePath) });
  const imageEl = document.querySelector(`.field-${creditCardDisplay.image1723123046525.$name} > picture`);
  const imagePath = `${urlPath(response.cardTypePath)}?width=2000&optimize=medium`;
  imageEl?.childNodes[5].setAttribute('src', imagePath);
  imageEl?.childNodes[3].setAttribute('srcset', imagePath);
  imageEl?.childNodes[1].setAttribute('srcset', imagePath);
};

/**
* @param {resPayload} Object - checkEligibility response.
* @return {PROMISE}
*/
// eslint-disable-next-line no-unused-vars
function checkELigibilityHandler(resPayload, globals) {
  debugger;
  const ccBilledData = resPayload.ccBilledTxnResponse.responseString;
  // AUTH_CODE, LOGICMOD, PLANNO, STS, amount, date, id, lasttxnseqno, name
  moveWizardView(domElements.semiWizard, domElements.chooseTransaction);
  cardDisplay(globals, resPayload);

  // didn't works if try to make dynamic.
  const billedTxnPannel = globals.form.aem_semiWizard.aem_chooseTransactions.billedTxnFragment.aem_chooseTransactions.aem_TxnsList;
  const txnList = globals.form.aem_semiWizard.aem_chooseTransactions.billedTxnFragment.aem_chooseTransactions.aem_TxnsList;
  // works for single and existing one.
  globals.functions.setProperty(billedTxnPannel[0]?.aem_TxnAmt, { value: ccBilledData[0]?.amount });
  globals.functions.setProperty(billedTxnPannel[0]?.aem_TxnDate, { value: ccBilledData[0]?.date });
  globals.functions.setProperty(billedTxnPannel[0]?.aem_TxnID, { value: ccBilledData[0]?.id });
  globals.functions.setProperty(billedTxnPannel[0]?.billed_TxnName, { value: ccBilledData[0]?.name });

  globals.functions.dispatchEvent(txnList, 'addItem');
  globals.functions.setProperty(billedTxnPannel[1]?.aem_TxnAmt, { value: ccBilledData[1]?.amount });
  globals.functions.setProperty(billedTxnPannel[1]?.aem_TxnDate, { value: ccBilledData[1]?.date });
  globals.functions.setProperty(billedTxnPannel[1]?.aem_TxnID, { value: ccBilledData[1]?.id });
  globals.functions.setProperty(billedTxnPannel[1]?.billed_TxnName, { value: ccBilledData[1]?.name });
}
export {
  getOTPV1,
  otpValV1,
  checkELigibilityHandler,
};
