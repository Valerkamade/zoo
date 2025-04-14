import logo from '../images/logo.svg';

export default function Header() {
  return (
    <header className='header page__header'>
      <img className='header__logo' src={logo} alt='Московский зоопарк'/>
      <div className='header__wrapper'>
        <h1 className='header__title'>Московский зоопарк</h1>
        <p className='header__description'>Достопримечательности Москвы</p>
      </div>
    </header>
  );
}
