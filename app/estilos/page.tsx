import Link from "next/link";
import styles from "./estilos.module.css";
import Image from "next/image"; // Importando o componente Image do Next.js

const BarbeariaBomDeGuerra: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="imgs/logo.PNG" alt="Barbearia Bom de Guerra" />
          <h1 className={styles.logoText}>Barbearia do Siri</h1>
        </div>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <Link href="/estilos" className={styles.navLink}>
                  Estilos
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.navLink}>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className={styles.navLink}>
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Link href="#login" className={styles.loginButton}>
          Iniciar Sessão
        </Link>
      </header>

      {/* Título Centralizado */}
      <section className={styles.titleSection}>
        <h2 className={styles.title}>Explore os estilos e cortes que realizamos.</h2>
      </section>

      {/* Seção Estilos de Corte - Imagens abaixo do título */}
      <section className={styles["main-content"]}>
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

      {/* Rodapé */}
      <footer className={styles.footer}>
        <p>Siga-nos nas redes sociais</p>
        <div className={styles.socialIcons}>
          <a href="https://wa.me/5581999999999" target="_blank" rel="noopener noreferrer">
            <img src="imgs/whatsapp.png" alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/barbeariadoedno/" target="_blank" rel="noopener noreferrer">
            <img src="imgs/instagram.png" alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default BarbeariaBomDeGuerra;
