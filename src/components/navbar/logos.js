import LogoPC from '../../assets/img/LogoPC.svg';
import LogoMobile from '../../assets/img/LogoMobile.svg';

export function Logos() {
  return (
    <>
      <img
        className="d-none d-md-flex"
        src={LogoPC}
        alt="Logo Site"
      />
      <img
        className="logo d-flex d-md-none"
        src={LogoMobile}
        alt="Logo Site"
      />
    </>
  );
}
