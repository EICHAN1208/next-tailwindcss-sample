import Spacer from "./spacer";

export default function InlineFlex() {
  return (
    <>
      <Spacer />

      <div className="border container mx-auto h-40">
        <p>
          xxxxxxxxxxxxxxxx
          <div className="border inline-flex">hello</div>
          <div className="border inline-flex">hello</div>
          xxxxxxxxxxxxxxxx
        </p>
      </div>
    </>
  );
}
