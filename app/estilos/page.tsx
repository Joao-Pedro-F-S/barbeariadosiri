'use client';

import Link from "next/link";
import Image from "next/image";
import styles from "./estilos.module.css"; // Importando o CSS do módulo

const Estilos: React.FC = () => {
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

      <section className={styles["main-content"]}>
        <h1>Estilos de Corte</h1>
        <div className={styles["styles-container"]}>
          <div className={styles["style-item"]}>
            <Image
              src="/imgs/corte1.jpg"
              alt="Corte Estilo 1"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <h2>Estilo Clássico</h2>
            <p>Um corte de cabelo tradicional que nunca sai de moda. Ideal para quem busca um look sofisticado e atemporal.</p>
          </div>
          <div className={styles["style-item"]}>
            <Image
              src="/imgs/corte2.jpg"
              alt="Corte Estilo 2"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <h2>Estilo Moderno</h2>
            <p>Este corte traz um visual mais ousado, ideal para quem gosta de um estilo atual e com muito estilo.</p>
          </div>
          <div className={styles["style-item"]}>
            <Image
              src="/imgs/corte3.jpg"
              alt="Corte Estilo 3"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <h2>Estilo Fade</h2>
            <p>Um dos cortes mais populares, com uma transição de cabelo que vai de mais longo a mais curto, criando um visual arrojado e clean.</p>
          </div>
        </div>
      </section>
      <br />

      <section className={styles["main-content"]}>
        <div className={styles["styles-container"]}>
          <div className={styles["style-item"]}>
            <Image
              src="/imgs/corte4.jpg"
              alt="Corte Estilo 4"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <h2>Estilo Undercut</h2>
            <p>Este é um corte undercut: laterais curtas e topo mais longo. Moderno e versátil.</p>
          </div>
          <div className={styles["style-item"]}>
            <Image
              src="/imgs/corte5.jpg"
              alt="Corte Estilo 5"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <h2>Estilo Degradê</h2>
            <p>Cabelo mais curto nas laterais e cheio em cima. Visual moderno e limpo.</p>
          </div>
          <div className={styles["style-item"]}>
            <Image
              src="/imgs/corte6.jpg"
              alt="Corte Estilo 6"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <h2>Estilos Infantis</h2>
            <p>Fazemos cortes infantis com estilos modernos e divertidos, garantindo um ambiente acolhedor e amigável.</p>
          </div>
        </div>
      </section>

      <section className={styles["info-section"]}>
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

      <footer className={styles.footer}>
        <p>Siga-nos nas redes sociais</p>
        <div className="social-icons">
          <img src="imgs/whatsapp.png" alt="WhatsApp" />
          <img src="imgs/instagram.png" alt="Instagram" />
        </div>
      </footer>
    </div>
  );
};

export default Estilos;
