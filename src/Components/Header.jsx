import logo from '../assets/logo.png';
import Cart from './Cart';
import './Header.css';
const Header=({goData,add,minus})=>{
    return (
        <div className='main_header'>
                 <header className="header">
                <img src={logo} alt="brand logo"></img>
                <h1>Elegent Context</h1>
                </header>
                <Cart data={goData} toAdd={add} toMinus={minus}/>
        </div>
    )
}
export default Header;