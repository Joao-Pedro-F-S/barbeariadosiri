import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"; 

const Sobre: React.FC = () => {
  return (
    <div>
      <header>
        <div className="logo-container">
          <img src="imgs/logo.PNG" alt="Barbearia Bom de Guerra" />
          <h1>Barbearia do Siri</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/estilos">Estilos</Link>
            </li>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
        <Link href="#login">
          <button className="login-button">Iniciar Sessão</button>
        </Link>
      </header>
      <section className="main-content">
        <h1>Sobre a Barbearia</h1>
        <Image
          src="/imgs/sobre.jpg"
          alt="Sobre a Barbearia do Siri"
          width={1000}
          height={550}
          className="rounded-lg shadow-lg"
        />
        <div className="text-box">
        <p>
  Na Barbearia do Siri, proporcionamos uma experiência única em cuidados masculinos. <br />
  Com uma equipe altamente especializada e um ambiente acolhedor, buscamos transformar o cuidado com o seu visual em um momento de prazer. <br />
  Nossa missão é oferecer serviços de excelência com um atendimento personalizado, tudo a preços acessíveis.
</p>

        </div>
      </section>

      <section className="info-section">
        <div>
          <img src="imgs/mapa.png" alt="Endereço" />
          <p>R. Laudelino Rocha, 135 - Loja 03 - Maurício de Nassau, Caruaru - PE, 55012-690</p>
        </div>
        <div>
          <img src="imgs/barbeiro.png" alt="Equipe" />
          <p>Contamos com uma equipe especializada para atender suas necessidades.</p>
        </div>
        <div>
          <img src="imgs/renda.png" alt="Preços" />
          <p>Oferecemos serviços de alta qualidade a um preço acessível.</p>
        </div>
      </section>

      <footer>
        <p>Siga-nos nas redes sociais</p>
        <div className="social-icons">
          <img src="imgs/whatsapp.png" alt="WhatsApp" />
          <img src="imgs/instagram.png" alt="Instagram" />
        </div>
      </footer>
    </div>
  );
};

export default Sobre;
