const JOURNEY_NAME = 'SMART_EMI_JOURNEY';
const PRO_CODE = '009';
const CHANNEL = 'ADOBE_WEB';
const ERROR_MSG = {
  mobileError: 'Enter valid mobile number',
};

const SEMI_ENDPOINTS = {
  otpGen: 'https://applyonlinedev.hdfcbank.com/content/hdfc_ccforms/api/validatecardotpgen.json',
  otpVal: 'https://applyonlinedev.hdfcbank.com/content/hdfc_ccforms/api/eligibilitycheck.json',
};

const DOM_ELEMENT = {
  semiWizard: 'aem_semiWizard',
  chooseTransaction: 'aem_chooseTransactions',
  selectTenure: 'aem_selectTenure',
};

const MISC = {
  rupeesUnicode: '\u20B9',
};

const OTP_TIMER = 30;
const MAX_OTP_RESEND_COUNT = 3;
const CURRENT_FORM_CONTEXT = {};
const RESPONSE_PAYLOAD = {
  response: {
    pseudoID: '',
    blockCode: {
      mad: '00000001960000',
      bbvlogn_card_outst: '-00000001347935',
      billingCycle: '19',
      tad: '00000224980000',
      cardNumber: '1012350000002025',
    },
    address: {
      city: 'JALPAIGURI',
      postalCode: '745202',
      name: 'TEST FLOTRAPI TEST FLOTRAPI',
      addressLine1: 'TESTING TESTING TESTING XX',
      addressLine2: 'TEST TEST TEST TEST12',
      addressLine3: 'TESTING TESTING123',
      state: 'WB',
      addressLine4: '',
    },
    ccBilledTxnResponse: {
      responseString: [
        {
          date: '19-03-2021',
          amount: 1123000,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '22',
          id: '80201',
          PLANNO: '10002',
        },
        {
          date: '19-02-2021',
          amount: 9994000,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '21',
          id: '80193',
          PLANNO: '10002',
        },
        {
          date: '19-02-2021',
          amount: 4300,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '20',
          id: '80185',
          PLANNO: '10002',
        },
        {
          date: '19-02-2021',
          amount: 4200,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '19',
          id: '80177',
          PLANNO: '10002',
        },
        {
          date: '19-02-2021',
          amount: 4100,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '18',
          id: '80169',
          PLANNO: '10002',
        },
        {
          date: '19-02-2020',
          amount: 998000,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '17',
          id: '80151',
          PLANNO: '10002',
        },
        {
          date: '19-02-2022',
          amount: 3900,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '16',
          id: '80144',
          PLANNO: '10002',
        },
        {
          date: '19-02-2021',
          amount: 3800,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '15',
          id: '80136',
          PLANNO: '10002',
        },
        {
          date: '19-08-2022',
          amount: 3700,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '14',
          id: '80128',
          PLANNO: '10002',
        },
        {
          date: '19-02-2021',
          amount: 971000,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '13',
          id: '80110',
          PLANNO: '10002',
        },
        {
          date: '19-02-2021',
          amount: 3400,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '11',
          id: '80094',
          PLANNO: '10002',
        },
        {
          date: '19-05-2024',
          amount: 3300,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '10',
          id: '80086',
          PLANNO: '10002',
        },
        {
          date: '19-02-2021',
          amount: 3200,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '9',
          id: '80078',
          PLANNO: '10002',
        },
        {
          date: '19-02-2021',
          amount: 3100,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '8',
          id: '80060',
          PLANNO: '10002',
        },
        {
          date: '19-02-2021',
          amount: 3000,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '7',
          id: '80052',
          PLANNO: '10002',
        },
        {
          date: '19-02-2021',
          amount: 2900,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '6',
          id: '80045',
          PLANNO: '10002',
        },
        {
          date: '19-02-2021',
          amount: 2800,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '5',
          id: '80037',
          PLANNO: '10002',
        },
        {
          date: '19-02-2021',
          amount: 2700,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '4',
          id: '80029',
          PLANNO: '10002',
        },
        {
          date: '19-02-2021',
          amount: 2600,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '3',
          id: '80011',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 4500,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '43',
          id: '70206',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 4400,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '42',
          id: '70198',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 4300,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '41',
          id: '70180',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 4200,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '40',
          id: '70172',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 4100,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '39',
          id: '70164',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 4000,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '38',
          id: '70156',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3900,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '37',
          id: '70149',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3800,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '36',
          id: '70131',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3700,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '35',
          id: '70123',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3600,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '34',
          id: '70115',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3500,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '33',
          id: '70107',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3400,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '32',
          id: '70099',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3300,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '31',
          id: '70081',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3200,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '30',
          id: '70073',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3100,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '29',
          id: '70065',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3000,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '28',
          id: '70057',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 2900,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '27',
          id: '70040',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 2800,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '26',
          id: '70032',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 2700,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '25',
          id: '70024',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 2600,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '24',
          id: '70016',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 4600,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '23',
          id: '20218',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 4500,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '22',
          id: '20200',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 4400,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '21',
          id: '20192',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 4300,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '20',
          id: '20184',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 4200,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '19',
          id: '20176',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 4100,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '18',
          id: '20168',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 4000,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '17',
          id: '20150',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 3900,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '16',
          id: '20143',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 4500,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '43',
          id: '70206',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 4400,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '42',
          id: '70198',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 4300,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '41',
          id: '70180',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 4200,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '40',
          id: '70172',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 4100,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '39',
          id: '70164',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 4000,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '38',
          id: '70156',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3900,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '37',
          id: '70149',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3800,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '36',
          id: '70131',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3700,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '35',
          id: '70123',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3600,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '34',
          id: '70115',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3500,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '33',
          id: '70107',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3400,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '32',
          id: '70099',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3300,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '31',
          id: '70081',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3200,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '30',
          id: '70073',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3100,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '29',
          id: '70065',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 3000,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '28',
          id: '70057',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 2900,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '27',
          id: '70040',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 2800,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '26',
          id: '70032',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 2700,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '25',
          id: '70024',
          PLANNO: '10002',
        },
        {
          date: '17-02-2021',
          amount: 2600,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 BILLED TXN',
          lasttxnseqno: '24',
          id: '70016',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 4600,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '23',
          id: '20218',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 4500,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '22',
          id: '20200',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 4400,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '21',
          id: '20192',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 4300,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '20',
          id: '20184',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 4200,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '19',
          id: '20176',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 4100,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '18',
          id: '20168',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 4000,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '17',
          id: '20150',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 3900,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '16',
          id: '20143',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 3800,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '15',
          id: '20135',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 3700,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '14',
          id: '20127',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 3600,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '13',
          id: '20119',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 3500,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '12',
          id: '20101',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 3400,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '11',
          id: '20093',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 3300,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '10',
          id: '20085',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 3200,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '9',
          id: '20077',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 3100,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '8',
          id: '20069',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 3000,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '7',
          id: '20051',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 2900,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '6',
          id: '20044',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 2800,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '5',
          id: '20036',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 2700,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '4',
          id: '20028',
          PLANNO: '10002',
        },
        {
          date: '13-02-2021',
          amount: 2600,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '1',
          name: '20 UNBILLED TXN',
          lasttxnseqno: '3',
          id: '20010',
          PLANNO: '10002',
        },
        {
          date: '17-01-2021',
          amount: 10000,
          AUTH_CODE: '',
          STS: 'N',
          LOGICMOD: '11',
          name: 'FIRST YEAR MEMBERSHIP FEE',
          lasttxnseqno: '3',
          id: '90080',
          PLANNO: '10002',
        },
      ],
      status: {
        errorCode: '0',
        errorMsg: '0',
      },
    },
    responseString: {
      relationNumber: '0001010000000245767',
      primaryCardHolderName: 'TEST FLOTRAPI TEST',
      records: [
        {
          maxEligibleAmt: '00000000000700000',
          procWaiv2: '00',
          procWaiv4: '00',
          procWaiv3: '00',
          period4: '018',
          period3: '012',
          procWaiv5: '0',
          period2: '006',
          maximumProcessingFee5: '>9999999 99',
          plan: '00000',
          maximumProcessingFee4: '00',
          maximumProcessingFee3: '00',
          period5: '024',
          maximumProcessingFee2: '00',
          period: '003',
          minimumProcessingFee2: '00',
          thresholdAmount5: '000000000000',
          maximumProcessingFeeRedef2: '00',
          minimumProcessingFee4: '00',
          thresholdAmount4: '000000000000',
          minimumProcessingFee3: '00',
          thresholdAmount3: '000000000000',
          processingFeeRedef: '799 00',
          maximumProcessingFeeRedef4: '00',
          maximumProcessingFeeRedef3: '00',
          percentageRedef: '> 00',
          maximumProcessingFeeRedef5: '>9999999 99',
          thresholdAmount2: '000000000000',
          interestX4: '01500',
          minimumProcessingFeeRedef: '00',
          interestX5: '01600',
          minimumProcessingFee5: '00',
          interestX2: '01188',
          interestX3: '02488',
          planDescription: '',
          proCode: '009',
          thresholdAmountRedef2: '000000000000',
          prodId: '00009',
          thresholdAmountRedef4: '000000000000',
          thresholdAmountRedef3: '000000000000',
          thresholdAmountRedef5: '000000000000',
          percentage2: '00',
          memoLine1: 'MEMOLINE001',
          percentage3: '> 00',
          feeWaiverFlg: '0',
          percentage4: '00',
          percentage5: '00',
          memoLine4: 'MEMOLINE004',
          memoLine3: 'MEMOLINE003',
          memoLine2: 'MEMOLINE002',
          plan5: '00000',
          plan2: '00000',
          plan3: '00000',
          plan4: '00000',
          interestR2: '1188',
          interestR3: '2488',
          planDescription5: '',
          planDescription3: '',
          interestR4: '1500',
          planDescription4: '',
          interestR5: '1600',
          planDescription2: '',
          processingFee5: '99 00',
          processingFee4: '799 00',
          processingFee3: '799 00',
          processingFeeRedef3: '799 00',
          thresholdAmountRedef: '000000000000',
          processingFeeRedef4: '799 00',
          processingFeeRedef5: '99 00',
          processingFee: '799 00',
          tid: '000000106',
          processingFeeRedef2: '799 00',
          interestO: '0',
          minimumProcessingFee: '00',
          percentage: '> 00',
          logo: '000',
          interestX: '03088',
          prodDesc: 'SMART EMI DIAL AN EMI',
          interestR: '3088',
          eligibleAmtPercent: 'A',
          tid5: '000000192',
          tid3: '000000109',
          tid4: '000000113',
          tid2: '000000101',
          processingFee2: '799 00',
          interest3: '02488',
          interest2: '01188',
          interest5: '01600',
          interest4: '01500',
          encryptedToken: '[B@12a3a380TMDAwMTAxMjM1MDAwMDAwMjAyNTAwMDAwMDAwMDAwMDAwMDA=',
          maximumProcessingFee: '00',
          percentageRedef3: '> 00',
          percentageRedef2: '00',
          logo2: '000',
          interestO5: '0',
          maximumProcessingFeeRedef: '00',
          minimumProcessingFeeRedef5: '00',
          percentageRedef5: '00',
          percentageRedef4: '00',
          minimumProcessingFeeRedef2: '00',
          minimumProcessingFeeRedef3: '00',
          minimumProcessingFeeRedef4: '00',
          logo4: '000',
          logo3: '000',
          procWaivredef5: '0',
          logo5: '000',
          procWaivredef2: '00',
          procWaivredef4: '00',
          procWaivredef3: '00',
          interest: '03088',
          eligible: 'Y',
          eligibleAmt: '00000000000700000',
          interestO3: '0',
          interestO4: '0',
          interestO2: '0',
          thresholdAmount: '000000000000',
          savingAcctNumber: '0000000000000000',
          processingFeeFlag: 'F',
          processingFeeFlag4: 'F',
          processingFeeFlag3: 'F',
          processingFeeFlag5: 'F',
          procWaiv: '00',
          processingFeeFlag2: 'F',
        },
      ],
      custNumber: '0001012350000002025',
      creditLimit: '000300000',
      aanNumber: '0001012350000002025',
    },
    cardHolderName: 'TEST FLOTRAPI TEST FLOTRAPI',
    ccUnBilledTxnResponse: {
      responseString: [
        {
          date: '23-02-2021',
          authcode: '',
          amount: ' 00000000410000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00016',
          id: '60167 ',
          PLANNO: '10002',
        },
        {
          date: '23-02-2021',
          authcode: '',
          amount: ' 00000000400000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00015',
          id: '60159 ',
          PLANNO: '10002',
        },
        {
          date: '23-02-2021',
          authcode: '',
          amount: ' 00000000390000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00014',
          id: '60142 ',
          PLANNO: '10002',
        },
        {
          date: '23-02-2021',
          authcode: '',
          amount: ' 00000000380000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00013',
          id: '60134 ',
          PLANNO: '10002',
        },
        {
          date: '23-02-2021',
          authcode: '',
          amount: ' 00000000370000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00012',
          id: '60126 ',
          PLANNO: '10002',
        },
        {
          date: '23-02-2021',
          authcode: '',
          amount: ' 00000000360000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00011',
          id: '60118 ',
          PLANNO: '10002',
        },
        {
          date: '23-02-2021',
          authcode: '',
          amount: ' 00000000350000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00010',
          id: '60100 ',
          PLANNO: '10002',
        },
        {
          date: '23-02-2021',
          authcode: '',
          amount: ' 00000000440000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00009',
          id: '60092 ',
          PLANNO: '10002',
        },
        {
          date: '23-02-2021',
          authcode: '',
          amount: ' 00000000330000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00008',
          id: '60084 ',
          PLANNO: '10002',
        },
        {
          date: '23-01-2021',
          authcode: '',
          amount: ' 00000000620000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00007',
          id: '60076 ',
          PLANNO: '10002',
        },
        {
          date: '23-02-2021',
          authcode: '',
          amount: ' 00000000710000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00006',
          id: '60068 ',
          PLANNO: '10002',
        },
        {
          date: '23-02-2021',
          authcode: '',
          amount: ' 00000000300000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00005',
          id: '60050 ',
          PLANNO: '10002',
        },
        {
          date: '23-02-2021',
          authcode: '',
          amount: ' 00000000290000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00004',
          id: '60043 ',
          PLANNO: '10002',
        },
        {
          date: '23-02-2021',
          authcode: '',
          amount: ' 00000000280000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00003',
          id: '60035 ',
          PLANNO: '10002',
        },
        {
          date: '23-02-2022',
          authcode: '',
          amount: ' 00000000970000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00002',
          id: '60027 ',
          PLANNO: '10002',
        },
        {
          date: '23-02-2023',
          authcode: '',
          amount: ' 00000000260000',
          STS: 'N',
          LOGICMOD: '01',
          name: '20 UNBILLED TXN                         ',
          lasttxnseqno: '00001',
          id: '60019 ',
          PLANNO: '10002',
        },
      ],
      status: {
        errorCode: '00000',
        lasttxnseqno: '7',
        errorMsg: '0',
      },
    },
    cardTypePath: '/content/dam/hdfc/cc-forms/card_facia/1-Infinia-Visa.jpg',
    productDetails: {
      currentCardDetails: {
        features: {
          'Catalogue \u2013 Redemption (up to)': '50 Paise',
          'Flight & Hotel \u2013 Redemption': '100 Paise',
          'International Lounge Access/Year': 'UNLIMITED',
          'Cashback \u2013 Redemption': '30 Paise',
          'Domestic Lounge Access/year': 'UNLIMITED',
          'Reward Points / Rs150 spent': '5 RP',
        },
        PRODUCT: 'INFINIA',
        cardType: 'Visa',
        verticalcard: '',
        cardTypePath: '/content/dam/hdfc/cc-forms/card_facia/1-Infinia-Visa.jpg',
      },
      showLinkFlag: 'false',
    },
    email: {
      residenceEmail: 'TESTING1234567898765432@MAIL.COM',
      officeEmail: '',
    },
    status: {
      errorCode: '0',
      errorMsg: 'Success',
    },
  },
};
export {
  JOURNEY_NAME,
  ERROR_MSG,
  OTP_TIMER,
  SEMI_ENDPOINTS,
  MAX_OTP_RESEND_COUNT,
  CURRENT_FORM_CONTEXT,
  CHANNEL,
  PRO_CODE,
  DOM_ELEMENT,
  MISC,
  RESPONSE_PAYLOAD,
};
