"use client";

import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/navigation";

const PdfCard = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    if (isClient) {
      router.push("/details");
    }
  };

  return (
    <div
      className="border rounded-lg shadow-lg p-4 w-full h-full flex-grow cursor-pointer"
      onClick={handleClick}
    >
      <iframe
        src="/documents/document1.pdf"
        width="100%"
        height="400px"
        title="PDF Document"
        className="rounded-lg"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
};

const CorporateInsuranceProposal = () => {
  return (
    <div className="flex flex-col p-4">
      {/* 最上部の要素 */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="何をお探しですか？"
            className="border border-gray-300 rounded-l-md p-2 h-10"
          />
          <button className="bg-gray-300 p-2 rounded-r-md h-10">
            <span role="img" aria-label="search">
              🔍
            </span>
          </button>
        </div>
      </div>

      <div className="flex w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* PDFデータをカード形式で表示 */}
        <div className="grid gap-6 mt-6">
          <PdfCard pdfUrl="/path/to/pdf1.pdf" />
        </div>

        {/* 資料の詳細情報を表示 */}
        <div className=" w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">法人保険 見直し提案</h1>
              <span className="text-sm text-gray-500">作成日 2024/10/1</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-sm text-gray-600">
                  第一営業部 佐藤一郎
                </span>
              </div>
              <button className="px-3 py-1 bg-pink-200 text-pink-700 rounded-full text-sm">
                資料保存
              </button>
            </div>
            <div className="flex space-x-2 mb-4">
              <button className="flex items-center space-x-1 text-gray-600 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span>21いいね！</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
                <span>2レビュー</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  ></path>
                </svg>
                <span>10ありがとう</span>
              </button>
            </div>
            <div className="flex space-x-2 mb-4">
              <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                商材
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                保険
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                法人保険
              </span>
            </div>
            <div className="flex space-x-2 mb-4">
              <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded-full text-sm">
                プロジェクト
              </span>
              <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded-full text-sm">
                保険
              </span>
              <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded-full text-sm">
                法人保険
              </span>
              <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded-full text-sm">
                〇〇
              </span>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2">概要</h2>
              <p className="text-sm text-gray-600">
                法人保険の見直し提案に使用するチラシ
              </p>
            </div>
            <div className="flex space-x-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                #法人保険
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                #提案
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                #営業
              </span>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2">作成者</h2>
              <p className="text-sm text-gray-600">第一営業部 佐藤一郎（45）</p>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2">実績状況</h2>
              <p className="text-sm text-gray-600">
                ・提案後、契約決まり個人売上120%達成
              </p>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2">作成背景</h2>
              <p className="text-sm text-gray-600">
                ・法人向けの保険営業に積極的にいけていない
              </p>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2">顧客の反応</h2>
              <p className="text-sm text-gray-600">・好感触、わかりやすい</p>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2">トーク等参考</h2>
              <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <span>トークスクリプト</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateInsuranceProposal;
