import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { motion, useAnimation } from "framer-motion";
import CardGroup from "react-bootstrap/CardGroup";
import { useInView } from "react-intersection-observer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./home.css";

export default function Home() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  const animation = useAnimation();

  useEffect(() => {
    console.log("useEffect inview", inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <div className="home">
      <img
        className="home__img"
        src="https://demo.w3layouts.com/demos_new/template_demo/26-05-2017/games_hub-demo_Free/760157407/web/images/1.jpg"
      />
      {/* <Link to="/explore">
        <button className="home__button">Explore</button>
      </Link> */}
      <div className="home__h1">
        <h1>
          Without Passion
          <br /> you are already dead
        </h1>
      </div>

      <br />
      <br />
      <div>
        <div className="home__platforms">
          <h1> Platforms</h1>
          <div className="home__platformsCat">
            <div className="home__platformCatPc">
              <h2>PC</h2>
              <img src="https://html.nkdev.info/goodgames/assets/images/icon-mouse.svg" />
            </div>
            <div className="home__platformCatPs">
              <h2>PS5</h2>
              <img src="https://html.nkdev.info/goodgames/assets/images/icon-gamepad.svg" />
            </div>
            <div className="home__platformCatXbox">
              <h2>XBOX</h2>
              <img src="https://html.nkdev.info/goodgames/assets/images/icon-gamepad-2.svg" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="home__headingContainer" ref={ref}>
        <motion.div className="home__Heading" animate={animation}>
          <h1> Top Indian Games Streamers</h1>
        </motion.div>

        <motion.div animate={animation}>
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https://starsunfolded.com/wp-content/uploads/2021/08/Naman-Mathur.jpg"
              />
              <Card.Body>
                <Card.Title className="card__title">"Mortal"</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://img.gurugamer.com/resize/740x-/2020/03/31/scoutop-36e6.jpg"
              />
              <Card.Body>
                <Card.Title>"ScoutOP"</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://i0.wp.com/starbioworld.com/wp-content/uploads/2022/02/Kaashvi.jpg?resize=326%2C426"
              />
              <Card.Body>
                <Card.Title>"Kaash"</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </motion.div>
      </div>
      <br />
      <br />
      <div className="home__newletter">
        <div>
          <img
            className="home__newletterImg"
            src="https://html.designingmedia.com/crox/assets/images/subscribe_image.png"
          />
        </div>
        <div className="home__newsletter2">
          <h2>
            Subscribe To Our Newsletter
            <br /> <span>For Updates</span>
          </h2>
          <div>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="home__newsLetterInput"
            />
            <button className="home__newsLetterButton">
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
