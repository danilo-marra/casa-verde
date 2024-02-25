import styles from './Menu.module.css';

export function Menu() {
  return (
    <header className={styles.menu}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="Logo Casa Verde" />
      </div>
      <nav>
        <li>
          <a href="/">Como fazer</a>
        </li>
        <li>
          <a href="/">Ofertas Casa verde</a>
        </li>
        <li>
          <a href="/">Depoimentos</a>
        </li>
        <li>
          <a href="/">Vídeo</a>
        </li>
        <li>
          <a href="/">Meu carrinho</a>
        </li>
      </nav>
    </header>
  );
}
