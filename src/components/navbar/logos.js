export function Logos() {
  return (
    <>
    {/*TODO fix img paths*/}
      <img
        className="d-none d-md-flex"
        src="../../assets/img/LogoPC.svg"
        alt="Logo Site"
      />
      <img
        className="logo d-flex d-md-none"
        src="../../assets/img/LogoMobile.svg"
        alt="Logo Site"
      />
    </>
  );
}
