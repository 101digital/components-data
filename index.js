const authComponentData = require("./data/auth-component.json");
const walletComponentData = require("./data/wallet-component-data.json");
const transactionComponentData = require("./data/transaction-component-data.json");
const accountLinkingComponentData = require("./data/account-linking-component-data.json");
const themeComponentData = require("./data/theme-component.json");
const productComparionData = require("./data/product-comparison-component.json");
const customerComponentData = require("./data/customer-component-data.json");
const invoiceComponentData = require("./data/invoice-component-data.json");
const transferComponentData = require("./data/transfer-component-data.json");
const customerSupportComponentData = require("./data/customer-support-component-data.json");
const customerInvokeComponentData = require("./data/customer-invoke-component-data.json");
const accountOriginationComponentData = require("./data/account-origination-component-data.json");
const registerComponentData = require("./data/register-component.json");
const userProfileComponentData = require("./data/user-profile-component-data.json");
const dashboardComponentData = require("./data/dashboard-component-data.json");
const financialProfileComponentData = require("./data/financial-profile-component-data.json");
const loyaltyProfileComponentData = require("./data/loyalty-profile-component-data.json");
const unitTestConfiguration = require("./data/unit-test-config.json");

exports.getDataByComponentId = id => {
  switch (id) {
    case "auth-component":
      return authComponentData;
    case "wallet-component":
      return walletComponentData;
    case "transaction-component":
      return transactionComponentData;
    case "account-linking-component":
      return accountLinkingComponentData;
    case "theme-component":
      return themeComponentData;
    case "product-comparison-component":
      return productComparionData;
    case "customer-component":
      return customerComponentData;
    case "invoice-component":
      return invoiceComponentData;
    case "transfer-component":
      return transferComponentData;
    case "customer-support-component":
      return customerSupportComponentData;
    case "customer-invoke-component":
      return customerInvokeComponentData;
    case "account-origination-component":
      return accountOriginationComponentData;
    case "react-native-register-component":
      return registerComponentData;
    case "user-profile-component":
      return userProfileComponentData;
    case "dashboard-component":
      return dashboardComponentData;
    case "financial-profile-component":
      return financialProfileComponentData;
    case "loyalty-profile-component":
      return loyaltyProfileComponentData;
    case "unit-test-configuration":
      return unitTestConfiguration;
    default:
      break;
  }
};
