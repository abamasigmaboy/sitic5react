import classes from "./home_sec4.module.scss"

export default function Home_Sec4() {
  return (
    <>
      <section className={classes.chetvertyi_blok}>
        <div className={classes.bolshoy_tekst}>
          <h2>
            Wellness innovation at its<br />
            scientific best.
          </h2>
          <div className={classes.dve_knopki_tut}>
            <div className={classes.knopka_odin}>
              <p>SUPPLEMENT</p>
            </div>
            <div className={classes.knopka_dva}>
              <p>LASER</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
