import Spacer from "./spacer";

export default function Centering() {
  return (
    <>
      <Spacer />

      <div className="border container mx-auto h-60 flex flex-col items-center">
        <p className="border">Hello</p>
        <p className="border">Hello</p>
        <p className="border">Hello</p>
      </div>

      <Spacer />

      <div className="border container mx-auto h-60 flex justify-center">
        <div className="border">Hello</div>
        <div className="border">Hello</div>
        <div className="border">Hello</div>
      </div>
    </>
  );
}
