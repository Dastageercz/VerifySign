require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/93cb9b09ad17492ebf579b891db201c9",
      accounts: [
        "d1277ddf595a6b84849582d89df944f3503ad5c2c8b06ec14ca6fad5401b7317",
      ],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/93cb9b09ad17492ebf579b891db201c9",
      accounts: [
        "d1277ddf595a6b84849582d89df944f3503ad5c2c8b06ec14ca6fad5401b7317",
      ],
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/barNHxwKcvdxJuDoKlbor5qx6mhT2C_O",
      accounts: [
        "d1277ddf595a6b84849582d89df944f3503ad5c2c8b06ec14ca6fad5401b7317",
      ],
    },
  },
};