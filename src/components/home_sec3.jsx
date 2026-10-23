import { Hero } from "../Photo"
import classes from "./home_sec3.module.scss"

export default function Home_Sec3() {
  return (
    <>
      <section className={classes.tretiy_blok}>
        <div className={classes.cherniy_krug}>
          <h2>THE QUEST FOR BETTER.</h2>
          <img src={Hero.Cosm} alt="" />
          <p>
            At LYMA, we’re always searching for the perfect balance of science,<br />
            nature and technology. Every LYMA product has been designed to<br />
            work together. We know that when we discover the best, you’ll<br />
            discover yours.
          </p>
        </div>
      </section>
    </>
  )
}
