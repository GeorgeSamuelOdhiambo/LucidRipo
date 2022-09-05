import React, { useRef } from "react";
import { Transferer } from "./Transferer";


const Rootlucid = () => {
  const addr = useRef();
  const snd = useRef();
  const network = useRef();
  const wallet = useRef();

  const onClickHandler = async (event) => {
    try {
        Transferer(network.current.value,wallet.current.value,addr.current.value,snd.current.value)
    } catch (error) {
      window.alert(`error has occured: ${error}`);
    }
  };
  return (
    <div>
      <h1>My First Heading</h1>
      <p>My first paragraph.</p>
      <input placeholder="Address" type="text" id="addr-input" ref={addr} /> 
      
      <br />
      <input placeholder="Amount" type="text" id="snd-amt" ref={snd} /> <br />
      <input placeholder="Wallet network" type="text" id="network" ref={network} /> <br />
      <input placeholder="wallet" type="text" id="wallet-provider" ref={wallet} /> <br />
      <button onClick={onClickHandler}>Send</button>
    </div>
  );
};

export default Rootlucid;
