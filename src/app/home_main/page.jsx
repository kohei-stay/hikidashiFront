"use client";

import { useState } from "react";
import React from "react";

const PdfCard = () => {
  return (
    <div className="border rounded-lg shadow-lg p-4 w-full h-full flex-grow">
      <iframe
        src="/documents/document1.pdf"
        width="100%"
        height="400px"
        title="PDF Document"
        className="rounded-lg"
      />
    </div>
  );
};
export default function HomePage() {
  const [activeTab, setActiveTab] = useState("メイン"); // 初期タブを「メイン」に設定

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

      {/* タブ付きコンテナ */}
      <div className="flex flex-col mb-4">
        <div className="flex space-x-4 border-b border-gray-300 mb-0">
          {["メイン", "担当者", "商材", "プロジェクト"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 ${
                activeTab === tab
                  ? "border-b-4 border-pink-500 font-extrabold"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* タブコンテンツを囲むボックス */}
        <div className="border border-gray-300 p-4">
          {/* 検索ページのコンテンツ */}
          {activeTab === "メイン" && (
            <div className="flex flex-col space-y-6">
              {/* 検索用テキストボックス */}
              <div>
                <input
                  type="text"
                  placeholder="キーワードを入力してください。　例）繊維　サンプル　デザイン　1000万円"
                  className="w-full border border-gray-300 p-2 h-10"
                />
              </div>

              {/* 除外ワード */}
              <div className="flex items-center mb-6">
                <label className="mr-2">除外ワード</label>
                <input
                  type="text"
                  placeholder="除外するキーワードを入力してください。※2語以上の場合はEnterを押してください。"
                  className="border border-gray-300 p-2 flex-grow h-10"
                />
              </div>

              {/* 横線 */}
              <div className="border-t border-white mb-4"></div>

              {/* 3段目 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1">商材</label>
                  <select className="border border-gray-300 p-2 w-full h-10">
                    <option value="">選択してください</option>
                    <option value="product1">商材１</option>
                    <option value="product2">商材２</option>
                    <option value="product3">商材３</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">作成者（部署）</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full h-10"
                  />
                </div>
              </div>

              {/* 4段目 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1">プロジェクト</label>
                  <select className="border border-gray-300 p-2 w-full h-10">
                    <option value="">選択してください</option>
                    <option value="project1">プロジェクト１</option>
                    <option value="project2">プロジェクト２</option>
                    <option value="project3">プロジェクト３</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">作成者（名前）</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full h-10"
                  />
                </div>
              </div>

              {/* 5段目 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1">業界</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full h-10"
                  />
                </div>
                <div>
                  <label className="block mb-1">コメント数</label>
                  <select className="border border-gray-300 p-2 w-full h-10">
                    <option value="">選択してください</option>
                    <option value="0-10">0～10</option>
                    <option value="11-20">11～20</option>
                    <option value="21-30">21～30</option>
                    <option value="151-200">31～</option>
                  </select>
                </div>
              </div>

              {/* 6段目 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1">顧客</label>
                  <select className="border border-gray-300 p-2 w-full h-10">
                    <option value="">選択してください</option>
                    <option value="customer1">顧客1</option>
                    <option value="customer2">顧客2</option>
                    <option value="customer3">顧客3</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">いいね♥数</label>
                  <select className="border border-gray-300 p-2 w-full h-10">
                    <option value="">選択してください</option>
                    <option value="0-50">0～50</option>
                    <option value="51-100">51～100</option>
                    <option value="101-150">101～150</option>
                    <option value="151-200">151～200</option>
                    <option value="201">201～</option>
                  </select>
                </div>
              </div>

              {/* 7段目 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1">価格</label>
                  <select className="border border-gray-300 p-2 w-full h-10">
                    <option value="">選択してください</option>
                    <option value="0-100">0～100万</option>
                    <option value="101-200">101万～200万</option>
                    <option value="201-300">201万～300万</option>
                    <option value="301-plus">301万～</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">更新日</label>
                  <div className="flex space-x-2">
                    <input
                      type="date"
                      className="border border-gray-300 p-2 h-10"
                    />
                    <span>～</span>
                    <input
                      type="date"
                      className="border border-gray-300 p-2 h-10"
                    />
                  </div>
                </div>
              </div>

              {/* 8段目 */}
              <div className="flex items-center mb-6 space-x-8">
                <div>
                  <input type="checkbox" id="editable" />
                  <label htmlFor="editable">編集可能</label>
                </div>
                <div>
                  <input type="checkbox" id="adoption-case" />
                  <label htmlFor="adoption-case">採択事例あり</label>
                </div>
                <div>
                  <input type="checkbox" id="talk-script" />
                  <label htmlFor="talk-script">トークスクリプトあり</label>
                </div>
              </div>

              {/* 検索ボタン */}
              <div className="flex justify-end mt-4">
                <button className="bg-sky-300 text-black font-bold p-2 rounded shadow hover:bg-sky-400">
                  検索
                </button>
              </div>
            </div>
          )}
          {activeTab === "担当者" && (
            <div>
              {/* 担当者タブのコンテンツ */}
              <p>担当者検索</p>
              {/* 部署を選択 */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <select className="border border-gray-300 p-2 w-full h-10">
                    <option value="">部署</option>
                    <option value="department1">部署１</option>
                    <option value="department2">部署２</option>
                    <option value="department3">部署３</option>
                  </select>
                </div>
                {/* 名前を選択 */}
                <div>
                  <select className="border border-gray-300 p-2 w-full h-10">
                    <option value="">担当者</option>
                    <option value="responsible1">担当者１</option>
                    <option value="responsible2">担当者２</option>
                    <option value="responsible3">担当者３</option>
                  </select>
                </div>

                {/* 担当者検索ボタン */}
                <div className="flex justify-end mt-4">
                  <button className="bg-sky-300 text-black font-bold p-2 rounded shadow hover:bg-sky-400">
                    検索
                  </button>
                </div>
              </div>
              {/* PDFデータをカード形式で表示 */}
              <div className="grid grid-cols-4 gap-6 mt-6">
                <PdfCard pdfUrl="/path/to/pdf1.pdf" />
                <PdfCard pdfUrl="/path/to/pdf2.pdf" />
                <PdfCard pdfUrl="/path/to/pdf3.pdf" />
              </div>
            </div>
          )}
          {activeTab === "商材" && (
            <div>
              {/* 商材タブのコンテンツ */}
              <p>商材検索</p>
              {/* 大分類を選択 */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <select className="border border-gray-300 p-2 w-full h-10">
                    <option value="">大分類</option>
                    <option value="product1">大分類１</option>
                    <option value="product2">大分類２</option>
                    <option value="product3">大分類３</option>
                  </select>
                </div>
                {/* 小分類を選択 */}
                <div>
                  <select className="border border-gray-300 p-2 w-full h-10">
                    <option value="">小分類</option>
                    <option value="project1">小分類１</option>
                    <option value="project2">小分類２</option>
                    <option value="project3">小分類３</option>
                  </select>
                </div>

                {/* 担当者検索ボタン */}
                <div className="flex justify-end mt-4">
                  <button className="bg-sky-300 text-black font-bold p-2 rounded shadow hover:bg-sky-400">
                    検索
                  </button>
                </div>
              </div>
              {/* PDFデータをカード形式で表示 */}
              <div className="grid grid-cols-4 gap-6 mt-6">
                <PdfCard pdfUrl="/path/to/pdf1.pdf" />
                <PdfCard pdfUrl="/path/to/pdf2.pdf" />
                <PdfCard pdfUrl="/path/to/pdf3.pdf" />
              </div>
            </div>
          )}
          {activeTab === "プロジェクト" && (
            <div>
              {/* プロジェクトタブのコンテンツ */}
              <p>プロジェクト検索</p>
              {/* プロジェクトを選択 */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <select className="border border-gray-300 p-2 w-full h-10">
                    <option value="">大分類</option>
                    <option value="product1">大分類１</option>
                    <option value="product2">大分類２</option>
                    <option value="product3">大分類３</option>
                  </select>
                </div>
                {/* 小分類を選択 */}
                <div>
                  <select className="border border-gray-300 p-2 w-full h-10">
                    <option value="">小分類</option>
                    <option value="project1">小分類１</option>
                    <option value="project2">小分類２</option>
                    <option value="project3">小分類３</option>
                  </select>
                </div>

                {/* 担当者検索ボタン */}
                <div className="flex justify-end mt-4">
                  <button className="bg-sky-300 text-black font-bold p-2 rounded shadow hover:bg-sky-400">
                    検索
                  </button>
                </div>
              </div>
              {/* PDFデータをカード形式で表示 */}
              <div className="grid grid-cols-4 gap-6 mt-6">
                <PdfCard pdfUrl="/path/to/pdf1.pdf" />
                <PdfCard pdfUrl="/path/to/pdf2.pdf" />
                <PdfCard pdfUrl="/path/to/pdf3.pdf" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
