import classes from "./home_sec1.module.scss"

export default function Home_sec1() {
  return (
    <>
      <section className={classes.pervyi_blok}>
        <div className={classes.seredina_bloka}>
          <h1>THE FUTURE OF WELLNESS.</h1>
          <p>
            The perfect balance of science, nature and technology.<br />
            Prepare to look and feel your absolute best.
          </p>
          <div className={classes.dve_knopochki}>
            <div className={classes.levaya_knopochka}>
              <p>SUPPLEMENT</p>
            </div>
            <div className={classes.pravaya_knopochka}>
              <p>LASER</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
