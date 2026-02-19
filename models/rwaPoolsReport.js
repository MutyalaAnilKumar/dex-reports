const mongoose = require("mongoose");

const rwaPoolsReportSchema = new mongoose.Schema(
  // {
  //   name: { type: String, required: true },
  //   poolType: { type: String, required: true },
  //   address: { type: String, required: true },
  //   pairAddress: { type: String, required: true },
  //   tokenAddress: { type: String, required: true },
  //   totalTransactions: { type: Number,required: false},
  //   buys: { type: Number,required: false },
  //   sells: { type: Number, required: false },
  //   buysVolume: { type: Number, required: false },
  //   sellsVolume: { type: Number, required: false },
  //   totalVolume: { type: Number, default: 0 },
  //   // LPadded: { type: Number, default: 0 }, // total LP added in USD or token units
  //   poolFee: { type: Number, default: 0 },
  //   poolLiquidity: { type: Number, default: 0 },
  //   companysLiquidity: { type: Number, default: 0 },
  //   usersLiquidity: { type: Number, default: 0 },
  //   poolRevenue: { type: Number, default: 0 },
  //   companysRevenue: { type: Number, default: 0 },
  //   usersRevenue: { type: Number, default: 0 },
  //   compoundRevenue: { type: Number, default: 0 },
  //   compoundLiquidity: { type: Number, default: 0 },
  //   addressAverage: { type: Number, default: 0 },
  //   tokenAverage: { type: Number, default: 0 },
  //   startTime: { type: Number, required: true },
  //   endTime: { type: Number, required: true },
  // },
  {
    // 🔑 Identifiers
    pairAddress: { type: String, index: true },
    tokenAddress: { type: String, index: true },
    address: { type: String, index: true },
    name: { type: String },
    poolType: { type: String },
    chainId: { type: String, index: true },

    // 📊 Transaction counts
    totalTransactions: { type: Number, default: 0 },

    swapsTxs: { type: Number, default: 0 },
    buyTxs: { type: Number, default: 0 },
    sellTxs: { type: Number, default: 0 },

    swapAGGTxs: { type: Number, default: 0 },
    buyTxsAGG: { type: Number, default: 0 },
    sellTxsAGG: { type: Number, default: 0 },

    otherTxs: { type: Number, default: 0 },
    buyTxsotherTxs: { type: Number, default: 0 },
    sellTxsotherTxs: { type: Number, default: 0 },

    // 📈 Volume – Swap TXs
    buysVolumeInMintAbuyTxs: { type: Number, default: 0 },
    buysVolumeswapsTxs: { type: Number, default: 0 },
    sellsVolumeswapsTxs: { type: Number, default: 0 },
    totalVolumeSwapTxs: { type: Number, default: 0 },

    // 📈 Volume – AGG TXs
    buysVolumeInMintAAGG: { type: Number, default: 0 },
    buysVolumeAGG: { type: Number, default: 0 },
    sellsVolumeMintBAGG: { type: Number, default: 0 },
    sellsVolumeAGG: { type: Number, default: 0 },
    totalVolumeAGG: { type: Number, default: 0 },

    // 📈 Volume – Other TXs
    buysVolumeInMintAotherTxs: { type: Number, default: 0 },
    sellsVolumeMintBotherTxs: { type: Number, default: 0 },
    buysVolumeotherTxs: { type: Number, default: 0 },
    sellsVolumeotherTxs: { type: Number, default: 0 },
    totalVolumeotherTxs: { type: Number, default: 0 },

    // 📊 Aggregated totals
    buys: { type: Number, default: 0 },
    sells: { type: Number, default: 0 },
    buysVolume: { type: Number, default: 0 },
    sellsVolume: { type: Number, default: 0 },
    totalVolume: { type: Number, default: 0 },

    // 📐 Averages
    solAverage: { type: Number, default: 0 },
    addressAverage: { type: Number, default: 0 },
    tokenAverage: { type: Number, default: 0 },

    // 💧 Liquidity
    poolLiquidity: { type: Number, default: 0 },
    companysLiquidity: { type: Number, default: 0 },
    usersLiquidity: { type: Number, default: 0 },

    // 💰 Fees & Revenue
    poolFee: { type: Number, default: 0 },
    poolRevenue: { type: Number, default: 0 },
    usersRevenue: { type: Number, default: 0 },
    companysRevenue: { type: Number, default: 0 },

    compoundRevenue: { type: Number, default: 0 },
    compoundLiquidity: { type: Number, default: 0 },

    // ⏱ Time range (epoch seconds)
    startTime: { type: Number, index: true },
    endTime: { type: Number, index: true }
  },
  { timestamps: true }
);


module.exports = mongoose.model("rwaPoolsReportSchema", rwaPoolsReportSchema);
