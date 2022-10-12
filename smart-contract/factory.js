import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "d4524be96345ec203c6c2863f8bd93ba89c2b15a"
);

export default instance;
