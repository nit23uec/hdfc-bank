import {
  groupCharacters,
  validatePhoneNumber,
  validatePanInput,
} from '../domutils/domutils.js';

/**
 * Validates the OTP input field to ensure it contains only digits.
 *
 * @function validateOtpInput
 * @returns {void}
 */
const validateOtpInput = () => {
  const otpInputField = document.querySelector('.field-otpnumber input');
  otpInputField.addEventListener('input', () => {
    if (!/^\d+$/.test(otpInputField.value)) {
      otpInputField.value = otpInputField.value.slice(0, -1);
    }
  });
};

const addGaps = () => {
  const panInputField = document.querySelector('.char-gap-4 input');
  panInputField.addEventListener('input', () => {
    const vaildInput = validatePanInput(panInputField.value.replace(/\s+/g, ''));
    if (!vaildInput) {
      panInputField.value = panInputField.value.slice(0, -1);
      if (panInputField.value.length > 10) {
        panInputField.value = panInputField.value.slice(0, 9);
      }
    }
    groupCharacters(panInputField, [5, 4]);
  });
};

const addMobileValidation = () => {
  const validFirstDigits = ['6', '7', '8', '9'];
  const inputField = document.querySelector('.field-registeredmobilenumber input');
  inputField.addEventListener('input', () => validatePhoneNumber(inputField, validFirstDigits));
};

/**
 * Validates the OTP input field to ensure it contains only digits.
 *
 * @function updateElementAttr
 * @param {object} globals
 * @returns {void}
 */
const updateElementAttr = (globals) => {
  console.log(globals);
  const item = globals.form.multipleCustIDPanel.multipleCustIDSelectionPanel.multipleCustIDRepeatable[0].multipleCustIDSelect;
  globals.functions.setProperty(item, { name: 'test-name-kunal' });
};

setTimeout(() => {
  addGaps();
  addMobileValidation();
}, 1000);

export {
  addGaps,
  addMobileValidation,
  validateOtpInput,
  updateElementAttr,
};
