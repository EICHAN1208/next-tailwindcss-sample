import Spacer from "./spacer";

export default function Grid() {
  return (
    <>
      <Spacer />

      <div className="border grid grid-cols-3">
        <div className="border">Hello1</div>
        <div className="border">Hello2</div>
        <div className="border">Hello3</div>
        <div className="border">Hello4</div>
        <div className="border">Hello5</div>
        <div className="border">Hello6</div>
      </div>

      <Spacer />

      {/* gapで要素間の幅を調整できる */}
      <div className="border grid grid-cols-3 gap-4">
        <div className="border">Hello1</div>
        <div className="border">Hello2</div>
        <div className="border">Hello3</div>
        <div className="border">Hello4</div>
        <div className="border">Hello5</div>
        <div className="border">Hello6</div>
      </div>

      <Spacer />
      {/* 中画面以上では横6つ表示、中画面より小さい場合は横3つで表示 */}
      <div className="border grid grid-cols-3 md:grid-cols-6">
        <div className="border">Hello1</div>
        <div className="border">Hello2</div>
        <div className="border">Hello3</div>
        <div className="border">Hello4</div>
        <div className="border">Hello5</div>
        <div className="border">Hello6</div>
      </div>
    </>
  );
}
