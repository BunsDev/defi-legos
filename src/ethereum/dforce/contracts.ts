import DForceStake from "./abi/DForceStake.json";
import DForceDeposit from "./abi/DForceDeposit.json";

const contracts = {
    DForceStake: {
        abi: DForceStake
    },
    DForceDeposit: {
        abi: DForceDeposit,
    },
    "dai": {
        "pool": "0x02285AcaafEB533e03A7306C55EC031297df9224",
        "lpToken": "0x02285AcaafEB533e03A7306C55EC031297df9224",
        "tokens": ["0x6b175474e89094c44da98b954eedeac495271d0f"]
      },
      "usdc": {
        "pool": "0x16c9cF62d8daC4a38FB50Ae5fa5d51E9170F3179",
        "lpToken": "0x16c9cF62d8daC4a38FB50Ae5fa5d51E9170F3179",
        "tokens": ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
      },
      "usdt": {
        "pool": "0x868277d475E0e475E38EC5CdA2d9C83B5E1D9fc8",
        "lpToken": "0x868277d475E0e475E38EC5CdA2d9C83B5E1D9fc8",
        "tokens": ["0xdac17f958d2ee523a2206206994597c13d831ec7"]
      },
      "tusd": {
        "pool": "0x55BCf7173C8840d5517424eD19b7bbF11CFb9F2B",
        "lpToken": "0x55bcf7173c8840d5517424ed19b7bbf11cfb9f2b",
        "tokens": ["0x0000000000085d4780B73119b644AE5ecd22b376"]
      }   
};

export default contracts;