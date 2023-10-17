import gamepassImg from '../../assets/logo-gamepass.png';

export default function Gamepass() {
  return (
    <section className="gamepass">
      <img src={gamepassImg} alt="gamepass" className="gamepass__logo" />
      <h2 className="gamepass__title">PC GAME PASS</h2>
    </section>
  );
}
