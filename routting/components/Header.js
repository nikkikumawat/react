import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>
        <h1>React Router</h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Blog'>Blog</Link></li>
            <li><Link to='/Services'>Services</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
        </ul>
    </header>
  )
}

export default Header