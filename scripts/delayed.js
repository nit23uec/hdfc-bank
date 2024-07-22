// eslint-disable-next-line import/no-cycle
import { loadScript, sampleRUM } from './aem.js';
import { corpCreditCardContext } from '../common/journey-utils.js';
import { sendPageloadEvent } from '../common/analytics.js';

const { currentFormContext } = corpCreditCardContext;
// Core Web Vitals RUM collection
sampleRUM('cwv');
loadScript('https://assets.adobedtm.com/80673311e435/029b16140ccd/launch-48ec56350700-development.min.js');
setTimeout(() => {
  sendPageloadEvent(currentFormContext);
}, 1000);
// add more delayed functionality here
