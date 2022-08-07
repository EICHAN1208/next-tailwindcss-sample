import Image from "next/image";
import orange from "../public/image/cut_fruit_orange.png";

export default function Sample() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>

      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-10 rounded">
            カテゴリの新規登録
          </button>
        </div>
      </div>

      <div className="container mx-auto flex flex-col">
        <div className="border flex justify-around px-3 items-center">
          <div className="h-full w-1/2">
            <div>
              <p className="font-bold">カテゴリID: </p>
            </div>
            <div>
              <p className="font-bold">カテゴリ名: </p>
            </div>
            <div className="w-80">
              <p className="font-bold">
                カテゴリの説明だよ。カテゴリの説明だよ。カテゴリの説明だよ。カテゴリの説明だよ。
              </p>
            </div>
          </div>

          <div className="flex h-full w-1/2 justify-around">
            <div className="flex items-center">
              <Image src={orange} alt="orange" width={100} height={100} />
            </div>
            <div className="grid content-center">
              <p className="align-middle">表示順</p>
              <p className="text-center">1</p>
            </div>
            <div className="flex items-center">
              <p>編集・削除</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
