import { Header, NavMenu } from './styles';

export function Menu() {
  return (
    <Header>
      <div>
        <img src="/images/logo.svg" alt="Logo Casa Verde" />
      </div>
      <NavMenu>
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
      </NavMenu>
    </Header>
  );
}
