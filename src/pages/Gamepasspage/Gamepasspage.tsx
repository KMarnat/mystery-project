import Hero from '../../components/Hero/Hero';
import bannerGamepass from '../../assets/gamepass-banner.svg';
import Gamepass from '../../components/Gamepass/Gamepass';
import grainyLogo from '../../assets/grainy-logo.svg';

const Gamepasspage: React.FC = () => {
  const term =
    '* Redeem at microsoft.com/redeem by December 31, 2023. Valid for new PC Game Pass members only. Valid payment method required. Unless you cancel, you will be charged the then-current regular membership rate when the promotional period ends. Limit: 1 per person/account. Subject to the Microsoft Services Agreement, Game Pass terms and system requirements at: xbox.com/subscriptionterms.';

  return (
    <main className="gamepasspage">
      <Hero banner={bannerGamepass} />
      <Gamepass terms={term} />
      <img src={grainyLogo} alt="grainy legion logo" className="gamepasspage__grainy" />
    </main>
  );
};

export default Gamepasspage;
