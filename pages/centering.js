import Spacer from "./spacer";

export default function Centering() {
  return (
    <>
      <Spacer />

      <div className="border container mx-auto flex flex-col items-center">
        <p className="border">Hello</p>
        <p className="border">Hello</p>
        <p className="border">Hello</p>
      </div>

      <Spacer />

      <div className="border container mx-auto flex justify-center">
        <div className="border">Hello</div>
        <div className="border">Hello</div>
        <div className="border">Hello</div>
      </div>
    </>
  );
}
