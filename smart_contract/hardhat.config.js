// https://eth-rinkeby.alchemyapi.io/v2/-bTyiVSN_e2WM0OiT0U_vCfRAIfDf5GK

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/-bTyiVSN_e2WM0OiT0U_vCfRAIfDf5GK',
      accounts: [
        '641d7bf4f01bdf825eddc2c451fc4e8a35f7e45eb006248abff8b47daa965928',
      ],
    },
  },
};
