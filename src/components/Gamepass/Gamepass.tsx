import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import gamepassImg from '../../assets/logo-gamepass.png';
import games from './games';
import Button from '../Button/Button';

interface GamepassProps {
  terms: string;
  modifier?: string;
}

const Gamepass: React.FC<GamepassProps> = ({ terms, modifier }) => {
  const [settings] = useState({
    slidesToShow: 2.2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    centerPadding: '30px',
    infinite: false,
  });

  return (
    <section className={`gamepass ${modifier}`}>
      <img src={gamepassImg} alt="gamepass" className="gamepass__logo" />
      <h2 className="gamepass__title">PC GAME PASS</h2>
      <p>
        Play hundreds of high-quality PC games with friends, including new day one titles, and get
        an EA Play membership. With games added all the time, you always have something new to play.
      </p>
      <div className="gamepass__slider">
        <Slider {...settings}>
          {games.map((game, i) => (
            <div key={i}>
              <img src={game} alt="game poster" />
            </div>
          ))}
        </Slider>
      </div>
      <Link to="/gamepass">
        <Button modifier="gamepass">CLAIM 3-MONTH GAME PASS FOR FREE*</Button>
      </Link>
      <p className="gamepass__term">{terms}</p>
    </section>
  );
};

export default Gamepass;
