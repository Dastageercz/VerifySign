import Web3 from "web3";
import express from "express";
import ABI from "./abi.js";

const provider =
  "https://ropsten.infura.io/v3/93cb9b09ad17492ebf579b891db201c9";
const web3 = new Web3(new Web3.providers.HttpProvider(provider));
const address = "0xacE6a12EAD51D0B5C4F298bc37f9625e97943cfc";

const privateKey =
  "d1277ddf595a6b84849582d89df944f3503ad5c2c8b06ec14ca6fad5401b7317";

const contract = new web3.eth.Contract(ABI, address);

let message, status;

const router = express.Router();

router.post("/postmessage", (req, res) => {
  let { _message } = req.body;
  message = _message;
  res.send("Message sent");
  getMessage();
});

const getMessage = async () => {
  const messageHash = await contract.methods.getMessageHash(message).call();

  const sign = web3.eth.accounts.sign(message, privateKey);
  //console.log("Signature:", sign.signature);

  const ETHMessageHash = await contract.methods
    .getETHSignedMessageHash(messageHash)
    .call();

  const RecoveredAccount = await contract.methods
    .recover(ETHMessageHash, sign.signature)
    .call();
  //console.log("RecoveredAccount", RecoveredAccount);

  const VerifySign = await contract.methods
    .verify(RecoveredAccount, message, sign.signature)
    .call();
  console.log();
  status = VerifySign;
};

router.get("/getmessage", (req, res) => {
  res.send(status);
});

export default router;
