import mng from 'src/styles/Managemen.module.scss'

export default function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="container mt-4 mb-8 flex">
      {
        currentStep === 1 ? (
          <></>
        ) : (
          <button className={`${mng["base__btn"]} ${"float-left w-52 mt-1"} ${currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""}`} onClick={() => handleClick()}>
            Back
          </button>
        )
      }


      <button className={`${mng["base__btnsimpan"]} ${"float-right mt-1 ml-auto"}`} onClick={() => handleClick("next")}>
        {currentStep === steps.length ? "Simpan dan Lanjutkan" : "Step Selanjutnya"}
      </button>
    </div>
  );
}
