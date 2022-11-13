import HeaderStyle from '../scss/header.module.scss';
import img from '../images/image002.png'

const Header = () => {
  return (
    <div className={HeaderStyle.header}>
      <img src={img} alt='img'/> 
      <hr/>
    </div>
  )
}

export default Header