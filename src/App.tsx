"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "아니요",
      "정말로 확신하시나요?",
      "진짜로 부탁드리면 어떨까요?",
      "부탁드립니다",
      "초콜릿 떡 위에 얹어서요",
      "말차 프라푸치노는 어떨까요?",
      "제발, 꼬옥",
      "하지만 :*(",
      "나 죽을 거야",
      "응, 난 죽었어",
      "알았어, 너 지금 네이던의 유령과 얘기하고 있어",
      "제발, 자기야",
      ":((((",
      "진짜 부탁드려요",
      "Estoy muerto (스페인어: 난 죽었어)",
      "아니요 :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">
            WOOOOOO!!! 나도 너를 사랑해 pookie!! ;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">당신의 발렌타인이 되어줄게요! 함께 특별한 날을 보내요. 🌹💖</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              물론이죠!
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "싫어!" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
