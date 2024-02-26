import { Form, News } from './styles';
import { useState, useEffect } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState(''); //Armazena o email
  const [emailValido, setEmailValido] = useState(false); //Armazena o email válido

  // Função para validar o email
  const validarEmail = (email) => {
    // Expressão regular para validar o formato do email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const enviarEmail = () => {
    setTimeout(() => {
      alert(`Email enviado com sucesso para ${email}`);
    }, 1000);
  };

  useEffect(() => {
    setEmailValido(validarEmail(email));
  }, [email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailValido) {
      enviarEmail();
    } else {
      alert('Por favor insira um email válido.');
    }
  };

  return (
    <News>
      <div className="assinaturaNewsletter__container">
        <div className="assinaturaNewsletter__container__text">
          <h1>
            Sua casa com as <br />{' '}
            <strong>
              Melhores <br /> plantas
            </strong>{' '}
          </h1>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="fieldGroup">
            <input
              type="email"
              placeholder="Insira seu email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit">Assinar Newsletter</button>
          </div>
        </Form>
      </div>
    </News>
  );
}
