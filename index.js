const authComponentData = require('./data/auth-component.json');
const walletComponentData = require('./data/wallet-component-data.json');
const transactionComponentData = require('./data/transaction-component-data.json');
const accountLinkingComponentData = require('./data/account-linking-component-data.json');
const themeComponentData = require('./data/theme-component.json');
const productComparionData = require('./data/product-comparison-component.json');

exports.getDataByComponentId = (id) => {
  switch (id) {
    case 'auth-component':
      return authComponentData;
    case 'wallet-component':
      return walletComponentData;
    case 'transaction-component':
      return transactionComponentData;
    case 'account-linking-component':
      return accountLinkingComponentData;
    case 'theme-component':
      return themeComponentData;
    case 'product-comparison-component':
      return productComparionData;
    default:
      break;
  }
};
