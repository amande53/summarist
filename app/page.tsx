import Image from "next/image";
import { AiFillAudio, AiFillBulb, AiFillFileText } from "react-icons/ai";
import { BiCrown } from "react-icons/bi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiLeafLine } from "react-icons/ri";
import LoginButton from "./components/UI/LoginButton";
import NavLogin from "./components/auth/NavLogin";
import Statistics from "./components/home/Statistics";
import Footer from "./components/layout/Footer";
import RedirectIfLoggedIn from "./components/auth/RedirectIfLoggedIn";

export default function Home() {
  return (
    <>
      <RedirectIfLoggedIn />
      <nav className="nav">
        <div className="nav__wrapper">
          <figure className="nav__img--mask">
            <Image
              className="nav__img"
              src="/assets/logo.png"
              alt="logo"
              width="495"
              height="114"
            />
          </figure>
          <ul className="nav__list--wrapper">
            <NavLogin />
            <li className="nav__list nav__list--mobile">About</li>
            <li className="nav__list nav__list--mobile">Contact</li>
            <li className="nav__list nav__list--mobile">Help</li>
          </ul>
        </div>
      </nav>
      <section id="landing">
        <div className="section__container">
          <div className="row">
            <div className="landing__wrapper">
              <div className="landing__content">
                <h1 className="landing__content__title">
                  Gain more knowledge <br className="remove--tablet" />
                  in less time
                </h1>
                <p className="landing__content__subtitle">
                  Great summaries for busy people,
                  <br className="remove--tablet" />
                  individuals who barely have time to read,
                  <br className="remove--tablet" />
                  and even people who don’t like to read.
                </p>
                <LoginButton />
              </div>
              <figure className="landing__image--mask">
                <Image
                  src="/assets/landing.png"
                  alt="landing"
                  width="779"
                  height="740"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section id="features">
        <div className="section__container">
          <div className="row">
            <h2 className="section__title">Understand books in few minutes</h2>
            <div className="features__wrapper">
              <div className="features">
                <div className="features__icon">
                  <AiFillFileText />
                </div>
                <h3 className="features__title">Read or listen</h3>
                <p className="features__sub--title">
                  Save time by getting the core ideas from the best books.
                </p>
              </div>
              <div className="features">
                <div className="features__icon">
                  <AiFillBulb />
                </div>
                <h3 className="features__title">Find your next read</h3>
                <p className="features__sub--title">
                  Explore book lists and personalized recommendations.
                </p>
              </div>
              <div className="features">
                <div className="features__icon">
                  <AiFillAudio />
                </div>
                <h3 className="features__title">Briefcasts</h3>
                <p className="features__sub--title">Gain valuable insights from briefcasts</p>
              </div>
            </div>
            <div className="statistics__wrapper">
              <Statistics
                stats={[
                  "Enhance your knowledge",
                  "Achieve greater success",
                  "Improve your health",
                  "Develop better parenting skills",
                  "Increase happiness",
                  "Be the best version of yourself!",
                ]}
              />
              <div className="statistics__content--details">
                <div className="statistics__data">
                  <p className="statistics__data--number">93%</p>
                  <p className="statistics__data--title">
                    of Summarist members <b>significantly increase</b> reading frequency.
                  </p>
                </div>
                <div className="statistics__data">
                  <p className="statistics__data--number">96%</p>
                  <p className="statistics__data--title">
                    of Summarist members <b>establish better</b> habits.
                  </p>
                </div>
                <div className="statistics__data">
                  <p className="statistics__data--number">90%</p>
                  <p className="statistics__data--title">
                    have made <b>significant positive</b> change to their lives.
                  </p>
                </div>
              </div>
            </div>
            <div className="statistics__wrapper">
              <div className="statistics__content--details statistics__content--details-second">
                <div className="statistics__data">
                  <p className="statistics__data--number">91%</p>
                  <p className="statistics__data--title">
                    of Summarist members <b>report feeling more productive</b> after incorporating
                    the service into their daily routine.
                  </p>
                </div>
                <div className="statistics__data">
                  <p className="statistics__data--number">94%</p>
                  <p className="statistics__data--title">
                    of Summarist members have <b>noticed an improvement</b> in their overall
                    comprehension and retention of information.
                  </p>
                </div>
                <div className="statistics__data">
                  <p className="statistics__data--number">88%</p>
                  <p className="statistics__data--title">
                    of Summarist members <b>feel more informed</b> about current events and industry
                    trends since using the platform.
                  </p>
                </div>
              </div>
              <Statistics
                stats={[
                  "Expand your learning",
                  "Accomplish your goals",
                  "Strengthen your vitality",
                  "Become a better caregiver",
                  "Improve your mood",
                  "Maximize your abilities",
                ]}
                className={"statistics__content--header-second"}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="reviews">
        <div className="row">
          <div className="section__container">
            <h2 className="section__title">What our members say</h2>
            <div className="reviews__wrapper">
              <div className="review">
                <div className="review__header">
                  <h3 className="review__name">Hanna M.</h3>
                  <div className="review__stars">
                    <BsStarFill />
                  </div>
                </div>
                <p className="review__body">
                  This app has been a <b>game-changer</b> for me! It&apos;s saved me so much time
                  and effort in reading and comprehending books. Highly recommend it to all book
                  lovers.
                </p>
              </div>
              <div className="review">
                <div className="review__header">
                  <h3 className="review__name">David B.</h3>
                  <div className="review__stars">
                    <BsStarFill />
                  </div>
                </div>
                <p className="review__body">
                  I love this app! It provides
                  <b>concise and accurate summaries</b> of books in a way that is easy to
                  understand. It&apos;s also very user-friendly and intuitive.
                </p>
              </div>
              <div className="review">
                <div className="review__header">
                  <h3 className="review__name">Nathan S.</h3>
                  <div className="review__stars">
                    <BsStarFill />
                  </div>
                </div>
                <p className="review__body">
                  This app is a great way to get the main takeaways from a book without having to
                  read the entire thing.
                  <b>The summaries are well-written and informative.</b>
                  Definitely worth downloading.
                </p>
              </div>
              <div className="review">
                <div className="review__header">
                  <h3 className="review__name">Ryan R.</h3>
                  <div className="review__stars">
                    <BsStarFill />
                  </div>
                </div>
                <p className="review__body">
                  If you&apos;re a busy person who
                  <b>loves reading but doesn&apos;t have the time</b> to read every book in
                  full&comma; this app is for you! The summaries are thorough and provide a great
                  overview of the book&apos;s content.
                </p>
              </div>
            </div>
            <div className="reviews__btn--wrapper">
              <LoginButton />
            </div>
          </div>
        </div>
      </section>
      <section id="numbers">
        <div className="section__container">
          <div className="row">
            <h2 className="section__title">Start growing with Summarist now</h2>
            <div className="numbers__wrapper">
              <div className="numbers">
                <div className="numbers__icon">
                  <BiCrown />
                </div>
                <h3 className="numbers__title">3 Million</h3>
                <p className="numbers__sub--title">Downloads on all platforms</p>
              </div>
              <div className="numbers">
                <div className="numbers__icon numbers__star--icon">
                  <BsStarFill />
                  <BsStarHalf />
                </div>
                <h3 className="numbers__title">4.5 Stars</h3>
                <p className="numbers__sub--title">Average ratings on iOS and Google Play</p>
              </div>
              <div className="numbers">
                <div className="numbers__icon">
                  <RiLeafLine />
                </div>
                <h3 className="numbers__title">97%</h3>
                <p className="numbers__sub--title">
                  Of Summarist members create a better reading habit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
