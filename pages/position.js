import Spacer from "./spacer";

export default function Position() {
  return (
    <>
      <Spacer />

      {/* 親要素に対して、相対的に子要素の位置を決める */}
      <div className="border container mx-auto h-40 relative">
        <p>親要素</p>
        <div className="border absolute bottom-0 left-0">
          <p>子要素</p>
        </div>
      </div>

      <Spacer />

      {/* 絶対的に子要素の位置を決める */}
      <div className="border container mx-auto h-40 static">
        <p>親要素</p>
        <div className="border absolute bottom-0 left-0">
          <p>子要素</p>
        </div>
      </div>
    </>
  );
}
