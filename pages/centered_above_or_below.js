import Spacer from "./spacer";

export default function CenteredAboveOrBelow() {
  return (
    <>
      <Spacer />

      <div className="border container mx-auto h-80 flex flex-col justify-center">
        <p className="border">Hello</p>
        <p className="border">Hello</p>
        <p className="border">Hello</p>
      </div>
    </>
  );
}
