import styles from './header.module.css';

const Header = ({ titleHeader, navTitle1, navTitle2, navTitle3, navTitle4, navTitle5, logoNav, altNav }) => {
    return (
        <header className={styles.header}>
        <div className={styles.logo}>
          <h1>{titleHeader}</h1>
          <span>🌟</span>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.active}>
            {navTitle1}
          </a>
          <a href="#">{navTitle2}</a>
          <a href="#">{navTitle3}</a>
          <a href="#">{navTitle4}</a>
          <a href="#">{navTitle5}</a>
        </nav>

        <div className={styles.userActions}>
          <button className={styles.notificationBtn}>🔔</button>
          <button className={styles.userAvatar}>
            <img src={logoNav} alt={altNav} />
          </button>
        </div>
      </header>
    )
}

export default Header;