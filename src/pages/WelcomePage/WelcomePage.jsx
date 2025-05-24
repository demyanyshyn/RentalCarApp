import s from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <section>
      <div className={s.welcomeWrapper}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <p className={s.description}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button type="button" className={s.welcomeBtn}>
          View Catalog
        </button>
      </div>
    </section>
  );
};

export default WelcomePage;
