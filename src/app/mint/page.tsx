"use client";

import { INft, PINATA_URL, mintNftContract } from "@/lib/web3.config";
import { NextPage } from "next";
import { useContext, useState } from "react";
import { AppContext } from "../layout";
import axios from "axios";
import Image from "next/image";
import NftCard from "@/components/NftCard";

const Mint: NextPage = () => {
  const { account } = useContext(AppContext);

  const [tokenId, setTokenId] = useState<number>();

  const onClickMint = async () => {
    try {
      const mintResponse = await mintNftContract.methods
        .mintNft()
        .send({ from: account });

      if (Number(mintResponse.status) === 1) {
        const myNftResponse = await mintNftContract.methods
          .getLatestNft(account)
          .call();

        setTokenId(Number(myNftResponse));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClickBalanceOf = async () => {
    try {
      const response = await mintNftContract.methods.balanceOf(account).call();

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-start">
      {account && <button className="text-yellow-500 font-bold just justify-center items-center" onClick={onClickMint}>민팅하기</button>}
    </div>
  );
};



export default Mint;