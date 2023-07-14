"use client";

import { NextPage } from "next";
import { useContext } from "react";
import { AppContext } from "./layout";
import Image from "next/image";
import juse from "/public/background.png"

const Home: NextPage = () => {
  const { account } = useContext(AppContext);

  return (
    <>
      <div className="relative min-h-screen w-full">
        <Image src={juse} alt="Juse" className="w-full h-full" layout="fill" objectFit="cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <main className="px-8 pt-16">
            
            <div className="flex flex-col items-start justify-end h-full font-bold text-2xl text-blue-300">
              <div className="text-left mb-auto ">
                랜덤으로 음료수를 뽑아보세요 !!
                <br /> 뽑힌 음료는 NFT 로 발급됩니다.
                <br /> 뽑힌 음료 NFT 를 실제 음료로 교환하세요 !
              </div>
              <div className="mt-8 text-left">
                실제 가격보다 좀 더 저렴하게 음료 NFT를 구매하여 실제 음료를 먹을 수 있습니다 ~!
                <br /> 랜덤으로 어떤 음료가 나올지 모르는 복불복 재미까지 ! 몇몇 NFT에는 특별한 선물도 숨겨져 있습니다!
                <br /> 많이 애용해주세요~
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
