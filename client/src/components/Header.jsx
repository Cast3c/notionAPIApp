import { BookOpen, LogOut } from 'lucide-react'
import '../styles/Header.css'

function Header({ user, logout }){
    const tech = ['React', 'Notion API', 'Node.js', 'Express', 'Secure auth', 'Axios']
    // 'OAuth 2.0',

    const sesionLoggedIn = ({ user }) => {
        return (
          <div className="header">
            <div className="userInfo-header">
              <div className="user-avatar">
                <img src={user.avatar} alt={user.name} />
              </div>
              <div className="user_info">
                <h2>
                  <BookOpen /> Hola, {(user.name).split(' ')[0]}
                </h2>
                <p>ricardo.castellarp@gmail.com</p>
              </div>
              <div className='logout-icon'>
                <LogOut onClick={logout} />
              </div>
            </div>
            <div className='userInfo-tech'>
              <p>Esta aplicacion fue desarrollada con:</p>
              {tech.map((techItem, index) => (
                <span key={index} className='tech-item'>
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        );
    }

    return (
      <div>
        <h1> Notion Project Dashboard</h1>
        <header>{sesionLoggedIn({ user })}</header>
      </div>
    )
}   

export default Header