import { Hero } from "../Photo"
import classes from "./footer.module.scss"

export default function Footer() {
  return (
    <>
      <section className={classes.podval}>
        <div className={classes.nizhnyaya_polosa}>
          <div className={classes.podval_vnutri}>
            <div className={classes.stolbik}>
              <h2>SUPPLEMENT</h2>
              <ul>
                <li>Benefits</li>
                <li>Formula</li>
                <li>Immunity</li>
                <li>Journal</li>
                <li>Reviews</li>
                <li><span>Buy</span></li>
              </ul>
            </div>
            <div className={classes.stolbik}>
              <h2>LYMA LASER</h2>
              <ul>
                <li>LYMA Laser</li>
                <li>Active Mist</li>
                <li>Priming Serum</li>
                <li>Technology</li>
                <li>Results</li>
                <li>Journal</li>
                <li>Reviews</li>
                <li><span>Buy</span></li>
              </ul>
            </div>
            <div className={classes.stolbik}>
              <h2>ABOUT</h2>
              <ul>
                <li>About</li>
                <li>Journal</li>
                <li>FAQs</li>
                <li>Contact</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Warranty</li>
              </ul>
            </div>
            <div className={classes.stolbik}>
              <h2>ACCOUNT</h2>
              <ul>
                <li>Activate</li>
                <li>My subscription</li>
                <li>Add extras</li>
                <li>My orders</li>
                <li>Account details</li>
                <li>Payment method</li>
                <li>Login details</li>
              </ul>
            </div>
            <div className={classes.praviy_stolbik}>
              <h2>NEWSLETTER</h2>
              <p>Subscribe to our newsletter.</p>
              <div className={classes.knopki_podpiski}>
                <button className={classes.pole_vvoda}>LYMA Newsletter</button>
                <button className={classes.knopka_otpravit}>SIGN UP</button>
              </div>
              <img src={Hero.Socset} alt="" />
              <h3>© LYMA Life Ltd. 2021</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
