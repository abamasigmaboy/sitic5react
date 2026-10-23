import classes from "./home_sec2.module.scss"

export default function Home_Sec2() {
  return (
    <>
      <section className={classes.vtoroy_blok}>
        <div className={classes.obolochka_dva}>
          <div className={classes.korobka_vnutri}>
            <div className={classes.kartochka_odin}>
              <h2>Supplement.</h2>
              <p>Nine powerful ingredients.</p>
              <h3>One ultimate formula.</h3>
              <div className={classes.knopki_vnizu}>
                <p>DISCOVER</p>
                <p>BUY</p>
              </div>
            </div>
            <div className={classes.kartochka_dva}>
              <h2>Laser.</h2>
              <p>Ultimate skin regeneration.</p>
              <h3>A new dawn for beauty.</h3>
              <div className={classes.knopki_vnizu}>
                <p>DISCOVER</p>
                <p>BUY</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
