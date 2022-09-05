import { Lucid, Blockfrost } from "lucid-cardano";
import { selectWalletProvider, selectNetworkProvider } from "./Wallet";

let API_ID = "testnetIYNeRk1G4RoRznZaGWLJ3dts81uUyVfa";
export const Transferer = async (network, walletName, addr, snd) => {
  try {
    let conData = selectNetworkProvider(network);
    const lucid = await Lucid.new(
      new Blockfrost(conData.url, API_ID),
      conData.network
    );

    // Assumes you are in a browser environment
    const checkCo = await window.cardano[selectWalletProvider(walletName)].isEnabled();

    if (checkCo) {
      const api = cardano;
      const balance = await api.getBalance();
      const imgUrl = await api[selectWalletProvider(walletName)].icon
      window.alert(`${imgUrl} Wallet Balance : ${balance}`);
    } else {
      const api = await window.cardano
        .selectWalletProvider(walletName)
        .enable();
      lucid.selectWallet(api);
      const balance = await api.getBalance();
      console.log(balance);
      window.alert(`Wallet Balance : ${balance}`);
      //   const tx = await lucid
      //     .new()
      // .payToAddress(addr, { lovelace: snd})
      //     .complete();
      //   console.log("Tx " + tx);
      //   const signedTx = await tx.sign().complete();
      //   console.log();
      //   const txHash = await signedTx.submit();

      //   console.log("My txHash : " + txHash);
    }
  } catch (error) {
    window.alert(`error has occured: ${error}`);
    console.log("Errror : " + error);
  }
};

