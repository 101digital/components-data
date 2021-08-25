const authComponentData = require('./data/auth-component.json');
const bankComponentData = require('./data/bank-component.json');
const themeComponentData = require('./data/theme-component.json');
const productComparionData = require('./data/product-comparison-component.json');

exports.getDataByComponentId = (id) => {
  switch (id) {
    case '72520fc5-6be5-4ee5-b986-0e688ab4adff':
      return authComponentData;
    case 'fc1456e9-5a30-4d02-bed5-8fc3a3367ab3':
      return bankComponentData;
    case '74a603bd-a36a-4f2b-bc18-385a4101878c':
      return themeComponentData;
    case 'fddeac89-dae0-40ed-913b-afe990e5c1d7':
      return productComparionData;
    default:
      break;
  }
};
