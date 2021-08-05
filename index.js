const authComponentData = require('./data/auth-component.json');
const bankComponentData = require('./data/bank-component.json');

exports.getComponentData = (id) => {
  switch (id) {
    case '72520fc5-6be5-4ee5-b986-0e688ab4adff':
      return authComponentData;
    case 'fc1456e9-5a30-4d02-bed5-8fc3a3367ab3':
      return bankComponentData;
    default:
      break;
  }
};
