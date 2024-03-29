import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import gamepassImg from '../../assets/logo-gamepass.png';
import games from './utils/games';
import Button from '../Button/Button';

interface GamepassProps {
  terms: string;
}

const Gamepass: React.FC<GamepassProps> = ({ terms }) => {
  const [settings] = useState({
    slidesToShow: 2.2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    infinite: false,
  });

  return (
    <section className="gamepass">
      <img src={gamepassImg} alt="gamepass" className="gamepass__logo" />
      <h2 className="gamepass__title">PC GAME PASS</h2>
      <p>
        Play hundreds of high-quality PC games with friends, including new day one titles, and get
        an EA Play membership. With games added all the time, you always have something new to play.
      </p>
      <div className="gamepass__slider">
        <Slider {...settings}>
          {games.map((game, i) => (
            <div className="game" key={i}>
              <div className="game__details">
                <img src={game.image} alt="game poster" />
                <div className="game__title">
                  <h5>{game.name}</h5>
                  <p>{game.genre}</p>
                </div>
              </div>
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
