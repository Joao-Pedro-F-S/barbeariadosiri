import Image from "next/image";
import styles from "./page.module.css";

const BarbeariaBomDeGuerra: React.FC = () => {
  return (
    <div>
      <header>
        <div className="logo-container">
          <img src="imgs/logo.PNG" alt="Barbearia Bom de Guerra" />
          <h1>Barbearia do Siri</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Estilos</a></li>
            <li><a href="#">Início</a></li>
            <li><a href="#">Agendamentos</a></li>
          </ul>
        </nav>
        <a href="html/Entrar.html">
          <button className="login-button">Iniciar Sessão</button>
        </a>
      </header>

      <section className="main-content">
        <div className="images">
          <img src="imgs/corte1.jpg" alt="Corte 1" />
          <img src="imgs/corte2.jpg" alt="Corte 2" />
          <img src="imgs/corte3.jpg" alt="Corte 3" />
        </div>
        <br />
        <br />
        <br />
        <h1>OS MELHORES CORTES DA REGIÃO</h1>
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

export default BarbeariaBomDeGuerra;
