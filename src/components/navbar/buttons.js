export function NavButtons() {
  return (
    <>
      <div className="d-flex flex-column wrap flex-lg-row justify-content-center text-center gap-2 gap-lg-1 gap-xl-2">
        <div>
          <button
            type="button"
            className="btn btn-primary mx-2 px-3 fs-6 rounded-pill"
          >
            Connexion
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-info mx-2 px-3 fs-6 text-light rounded-pill"
          >
            Inscription
          </button>
        </div>
      </div>
    </>
  );
}
