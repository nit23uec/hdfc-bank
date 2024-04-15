/* eslint no-console: ["error", { allow: ["warn", "error", "debug"] }] */
import openModal from '../blocks/modal/modal.js';

const createLabelInElement = (elementSelector, labelClass) => {
  /**
  * The main element in the DOM where the form resides.
  * @type {HTMLElement}
  */
  const mainEl = document.getElementsByTagName('main')[0];
  /**
  * The form element containing the target element.
  * @type {HTMLElement}
   */
  const formEl = mainEl.querySelector('form');
  /**
  * The target element to which the label will be appended.
  * @type {HTMLElement}
  */
  const element = formEl.querySelector(elementSelector);
  if (!element) {
    console.debug(`Element with selector '${elementSelector}' not found.`);
    return;
  }
  /**
  * The text content of the label element.
  * @type {string}
  */
  const labelText = element.getElementsByTagName('label')[0].innerHTML;
  element.getElementsByTagName('label')[0].innerHTML = '';
  if (!labelText) {
    console.error(`No data-label attribute found for element with selector '${elementSelector}'.`);
    return;
  }

  /**
  * The newly created label element.
   * @type {HTMLLabelElement}
   */
  const labelElement = document.createElement('label');
  labelElement.classList.add(labelClass);
  labelElement.textContent = labelText;
  element.appendChild(labelElement);
};
/**
  * Decorates the stepper for CC yourDetails panel
  * @name decorateStepper Runs after yourDetails panel is initialized
   */
function decorateStepper() {
  const totalIndex = document.querySelector('.field-corporatecardwizardview.wizard').style.getPropertyValue('--wizard-step-count');
  const ccDetailsWizard = document.querySelector('.field-corporatecardwizardview.wizard ul');
  Array.from(ccDetailsWizard.children).forEach((child) => {
    if (child.tagName.toLowerCase() === 'li' && Number(child.getAttribute('data-index')) !== totalIndex - 1) {
      child?.classList?.add('stepper-style');
    }
  });
}

/**
  * On Wizard Init.
  * @name onWizardInit Runs on initialization of wizard
  */
function onWizardInit() {
  createLabelInElement('.field-permanentaddresstoggle', 'permanent-address-toggle__label');
  createLabelInElement('.field-currentaddresstoggle', 'current-address-toggle__label');
  createLabelInElement('.field-ckyctoggle', 'ckyctoggle__label');
  decorateStepper();
}

/* startCode for creating Modal */
/**
 * Function to link a trigger element with a modal opening functionality.
 * @param {Object} config - Configuration object for the modal.
 * @param {HTMLElement} config.triggerElement - The element triggering the modal.
 * @param {HTMLElement} config.content - The content to display in the modal.
 * @param {String} [config.actionWrapClass] - Wrapper class containing all the buttons.
 * @param {Boolean} [config.reqConsentAgree=false] - Flag indicating whether consent agreement is required.
 * @param {Function} [config.updateUI] - Function for DOM manipulation upon receiving data.
 */

const linkModalFunction = (config) => {
  config?.triggerElement?.addEventListener('click', async (e) => {
    e.preventDefault();
    await openModal(config);
    config?.content?.addEventListener('modalTriggerValue', (event) => {
      const receivedData = event.detail;
      if (config?.updateUI) {
        config?.updateUI(receivedData);
      }
    });
  });
};
/* endCode for creating Modal */

/* login screen second checkbox modalLinking */
const consent2Config = { // config to create modal for consent-2
  triggerElement: document.getElementsByName('checkBoxConsent2')?.[0], // trigger element for calling modalFunction
  content: document.getElementsByName('consentPanel2')?.[0], // content to display in modal
  actionWrapClass: 'button-wrapper', // wrapper class containing all the buttons
  reqConsentAgree: false, // Indicates if consent agreement is needed; shows close icon if not.
  /**
   * Updates the UI based on received data.
   * @param {Object} receivedData - Data received after the modal button trigger,contains name of the btn triggered which is used to update the UI.
   */
  updateUI(receivedData) {
    if (receivedData?.iAgreeConsent2) { // iAgreeConsent2- name of the I agree btn.
      this.triggerElement.checked = true;
    }
    if (receivedData?.closeIcon) { // closeIcon - name of the Close x btn
      this.triggerElement.checked = false;
    }
  },
};
linkModalFunction(consent2Config);

/* cc wizard screen getCard-viewAll buttonn modalLinking */
const viewAllBtnPannelConfig = { // linkModal for corporateCardWizard pannel view all in getThisCard screen.
  triggerElement: document.getElementsByName('viewAllCardBenefits')?.[0],
  content: document.getElementsByName('viewAllCardBenefitsPanel')?.[0],
  actionWrapClass: 'button-wrapper',
  reqConsentAgree: true,
};
linkModalFunction(viewAllBtnPannelConfig);

/* Code for floating field label, initialized after DOM is rendered */
const inputs = document.querySelectorAll('input[type="text"], input[type="number"], input[type="date"], input[type="email"], .field-wrapper textarea, .field-wrapper select');

inputs.forEach((input) => {
  const wrapper = input.closest('.field-wrapper');
  input.addEventListener('focus', () => {
    wrapper.dataset.active = 'true';
    wrapper.dataset.empty = !input.value;
  });
  input.addEventListener('blur', () => {
    delete wrapper.dataset.active;
    wrapper.dataset.empty = !input.value;
  });
  wrapper.dataset.empty = !input.value;
});

/* End of code for floating field label */

/* Code of disabling future dates */

const dateInputs = document.querySelectorAll('input[id^="datepicker-"]');
if (dateInputs) {
  dateInputs.forEach((input) => {
    const textInputValue = input.getAttribute('edit-value');
    input.type = 'date';
    input.value = textInputValue;
    const today = new Date();
    const currentDate = today.toISOString().split('T')[0];
    input.setAttribute('max', currentDate);
  });
}

/* End of code for disabling future dates */

export { decorateStepper, onWizardInit };
