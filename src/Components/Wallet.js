const supportedProviders = {
  nami: true,
  flint: true,
  yoroi: true,
};

export const selectWalletProvider = (provider) => {
    let myProvider = provider.toLowerCase();
  if (!supportedProviders[myProvider]) {
    console.log(supportedProviders.provider);
    window.alert(`Invalid Wallet Provider: ${provider}`);
  }
  return myProvider;
};

export const selectNetworkProvider = (network) => {
  if (!network) {
    window.alert(`Network Provider cant be NULL`);
  }

  switch (network.toLowerCase()) {
    case "testnet":
      return {
        network: "Testnet",
        url: "https://cardano-testnet.blockfrost.io/api/v0",
      };
    case "mainnet":
      return {
        network: "Mainnet",
        url: "https://cardano-testnet.blockfrost.io/api/v0",
      };
    default:
      window.alert(`Invalid Network Provider: ${provider}`);
      break;
  }
};
