import './App.css';
import { Menu } from './components/Menu/Menu';
import { Newsletter } from './components/Newsletter/Newsletter';

import { GlobalCSS } from './GlobalCSS';

export function App() {
  return (
    <div>
      <style>{GlobalCSS}</style>
      <Menu />
      <Newsletter />
    </div>
  );
}
