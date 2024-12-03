import Link from "next/link";
import styles from "./css/page.module.css";

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
      <main id="estilos" className={styles.mainContent}>
        <div className={styles.images}>
          <img src="imgs/corte1.jpg" alt="Corte 1" />
          <img src="imgs/corte2.jpg" alt="Corte 2" />
          <img src="imgs/corte3.jpg" alt="Corte 3" />
        </div>
        <h1 className={styles.sectionTitle}>OS MELHORES CORTES DA REGIÃO</h1>
      </main>
      <section className={styles.infoSection}>
        <div>
          <img src="imgs/mapa.png" alt="Endereço" />
          <p>R. Laudelino Rocha, 135 - Loja 03 - Maurício de Nassau, Caruaru - PE, 55012-690</p>
        </div>
        <div className={styles.divider}></div>
        <div>
          <img src="imgs/barbeiro.png" alt="Equipe" />
          <p>Contamos com uma equipe especializada para atender suas necessidades.</p>
        </div>
        <div className={styles.divider}></div>
        <div>
          <img src="imgs/renda.png" alt="Preços" />
          <p>Oferecemos serviços de alta qualidade a um preço acessível.</p>
        </div>
      </section>
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
