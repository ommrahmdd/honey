import React, { useEffect } from "react";
import Header from "../../components/Header";
import WhoWeAre_1 from "./../../assets/gallery_1.jpg";
import WhoWeAre_2 from "./../../assets/WhoWeAre_1.jpg";
import everyThing_1 from "./../../assets/about_everything_1.jpg";
import everyThing_2 from "./../../assets/about_everything_2.jpg";
import bee from "./../../assets/bee-sm.png";
import use from "./../../assets/about_use.jpg";
import feature_1 from "./../../assets/feature_1.png";
import feature_2 from "./../../assets/feature_2.png";
import feature_3 from "./../../assets/feature_3.png";
import feature_4 from "./../../assets/feature_4.png";
import { fadeIn } from "../../utilities/transition";
export default function About() {
  useEffect(() => {
    setTimeout(() => {
      fadeIn(document.querySelector(".about"));
    }, 1200);
  }, []);
  return (
    <main className="about">
      <Header header={["home", "  / ", "about"]} />
      <div className="container">
        <div className="about__content">
          {/* STYLE: Who We Are Section */}
          <section className="about__whoWeAre seciton__padding">
            <div className="about__whoWeAre-left">
              <i className="fa-sharp fa-solid fa-quote-right"></i>
              <h4>Who We Are</h4>
              <h5>The Original Honey</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                soluta non veniam aliquam similique at architecto quos, tempore
                sed ipsam ea sit, neque accusantium ex odio est consequatur
                ipsum repellat!
              </p>
              <div className="">
                <img src={WhoWeAre_1} alt="Who We Are Image" />
              </div>
            </div>
            <div className="about__whoWeAre-right">
              <div className="">
                <img src={WhoWeAre_2} alt="Who We Are Image" />
              </div>
            </div>
          </section>
          {/* STYLE: Everything seciton */}
          <section className="about__every seciton__padding">
            <div className="about__every-left">
              <img
                src={everyThing_1}
                alt="Everything image"
                className="every__smallImg"
              />
              <div className="">
                <img src={everyThing_2} alt="Everything image" />
              </div>
            </div>
            <div className="about__every-right">
              <div className="every__header">
                <img src={bee} alt="Bee" />
                <h3>Everything new about bees </h3>
              </div>
              <ul className="every__content">
                <li className="every__content-box">
                  <h5>About Bees</h5>
                  <p>
                    Like all insects, a bee’s body is divided into three parts:
                    a head with two antennae, a thorax with six legs, and an
                    abdomen. All bees have branched hairs somewhere on their
                    bodies and two pairs of wings. Only female bees have
                    stingers (which are modified ovipositors, organs originally
                    used to lay eggs).
                  </p>
                </li>
                <li className="every__content-box">
                  <h5>Bees Range</h5>
                  <p>
                    There are over 20,000 bee species worldwide, including the
                    honey bee, which originated in Eurasia and has been imported
                    around the globe as a domesticated species.
                  </p>
                </li>
                <li className="every__content-box">
                  <h5>Bees Diet</h5>
                  <p>
                    Bees feed exclusively on sugary nectar and protein-rich
                    pollen from flowering plants, unlike the carnivorous wasps
                    from which they evolved.
                  </p>
                </li>
                <li className="every__content-box">
                  <h5>Bees Behavior</h5>
                  <p>
                    As they forage, bees perform the critical act of
                    pollination. As a bee enters a flower to feed on nectar and
                    gather pollen, some of the pollen sticks to the bee’s body.
                    When the bee flies on, it deposits some of that pollen on
                    the next flower it visits, resulting in fertilization,
                    allowing the plant to reproduce and to generate the fruits
                    and seeds so many other wildlife species rely on as a food
                    source. In fact, bees pollinate a staggering 80 percent of
                    all flowering plants, including approximately 75 percent of
                    the fruits, nuts, and vegetables grown in the United States.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          {/* STYLE: Honey Quote */}
          <section
            className="about__quote seciton__padding"
            style={{
              backgroundImage: `url(${use})`,
            }}
          >
            <div className="about__quote-content">
              <i className="fa-sharp fa-solid fa-quote-right"></i>
              <h5>Honey is used to treat diseases</h5>
            </div>
          </section>
          {/* STYLE: Honey Use */}
          <section className="about__use seciton__padding">
            <div className="about__use-box">
              <h5>The use of honey in treating skin diseases & burns</h5>
              <p>
                Honey has been used as a salve to heal burns and prevent
                infections for thousands of years, according to the Mayo Clinic.
                Results also show that honey may reduce burn healing time.
              </p>
            </div>
            <div className="about__use-box">
              <h5>Uing honey as a treatment for memory</h5>
              <p>
                Some say honey can improve both short- and long-term memory,
                especially in menopausal and postmenopausal women. In one
                studyTrusted Source, postmenopausal women who were given tualang
                honey treatments for several weeks saw as much improvement in
                their immediate memory as women given hormone therapy of
                estrogen and progestin.
              </p>
            </div>
            <div className="about__use-box">
              <h5>The use of honey in herpes</h5>
              <p>
                Research conducted in Dubai shows that honey is an effective
                topical treatment for both oral and genital herpes. Honey can
                heal lesions from herpes just as quickly as ointments you find
                at a pharmacy, and it’s even better at reducing itchiness.
              </p>
            </div>
            <div className="about__use-box">
              <h5>Use of honey as an aphrodisiac</h5>
              <p>
                Honey has a lower glycemic index than sugar, which means it
                won’t spike your blood sugar levels the way sugar will. Honey
                also has a sweeter taste than sugar and may help you use less
                sweetener on foods.
              </p>
            </div>
          </section>
          {/* STYLE: Feature */}
          <section className="about__feature seciton__padding">
            <div className="about__feature-header">
              <h5>The Main Feature</h5>
            </div>
            <div className="about__feature-content">
              <div className="feature__box">
                <img src={feature_1} alt="feature" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores nam.
                </p>
              </div>
              <div className="feature__box">
                <img src={feature_2} alt="feature" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores nam.
                </p>
              </div>
              <div className="feature__box">
                <img src={feature_3} alt="feature" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores nam.
                </p>
              </div>
              <div className="feature__box">
                <img src={feature_4} alt="feature" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores nam.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
