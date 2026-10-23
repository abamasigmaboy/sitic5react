import { Hero } from "../Photo"
import classes from "./header.module.scss"

export default function Header() {
  return (
    <>
      <header className={classes.golova}>
        <nav className={classes.navigaciya}>
          <div className={classes.golova_levo}>
            <ul>
              <li>SUPPLEMENT</li>
              <li>LASER</li>
              <li>REVIEWS</li>
              <li>JOURNAL</li>
              <li>ABOUT</li>
            </ul>
          </div>
          <img src={Hero.Lyma} alt="" />
          <div className={classes.golova_pravo}>
            <ul>
              <li>HELP & SUPPORT</li>
              <li>ACTIVATE</li>
              <li>ACCOUNT</li>
              <li>BUY</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}
