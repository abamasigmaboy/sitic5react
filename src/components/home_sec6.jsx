import { Hero } from "../Photo"
import classes from "./home_sec6.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'

export default function Home_Sec6() {
  return (
    <>
      <section className={classes.shestoy_blok}>
        <div className={classes.polosa_otzyvov}>
          <div className={classes.karusel_korobka}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              initialSlide={0}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className={classes.otzyv_kartochka}>
                  <p>
                    “Miracle pills. The days of<br />
                    taking a cocktail of hit and<br />
                    miss vitamins are over.”
                  </p>
                  <img src={Hero.Lle} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.otzyv_kartochka}>
                  <p>
                    “Your one stop solution to<br />
                    feeling energised and focused.”
                  </p>
                  <img src={Hero.Forb} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.otzyv_kartochka}>
                  <p>
                    “A revelation. Not just<br />
                    about looking better and<br />
                    feeling better. LYMA is<br />
                    about real health benefits.”
                  </p>
                  <img src={Hero.The} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.otzyv_kartochka}>
                  <p>
                    “Experts are queuing up to<br />
                    praise LYMA.”
                  </p>
                  <img src={Hero.Ftt} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.otzyv_kartochka}>
                  <p>
                    “The A-list secret health hack.”
                  </p>
                  <img src={Hero.Art} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.otzyv_kartochka}>
                  <p>
                    “Miracle pills. The days of<br />
                    taking a cocktail of hit and<br />
                    miss vitamins are over.”
                  </p>
                  <img src={Hero.Lle} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.otzyv_kartochka}>
                  <p>
                    “Your one stop solution to<br />
                    feeling energised and focused.”
                  </p>
                  <img src={Hero.Forb} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.otzyv_kartochka}>
                  <p>
                    “A revelation. Not just<br />
                    about looking better and<br />
                    feeling better. LYMA is<br />
                    about real health benefits.”
                  </p>
                  <img src={Hero.The} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.otzyv_kartochka}>
                  <p>
                    “Experts are queuing up to<br />
                    praise LYMA.”
                  </p>
                  <img src={Hero.Ftt} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}
