import Link from 'next/link';
import styles from './sobre.module.css';
import Image from 'next/image'

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
        <h2 className={styles.title}>Conheça um pouco sobre a Barbearia do Siri</h2>
      </section>

      {/* Seção Sobre a Barbearia */}
      <section className={styles.mainContent}>
        <Image
          src="/imgs/sobre.jpg"
          alt="Sobre a Barbearia do Siri"
          width={1000}
          height={550}
          className="rounded-lg shadow-lg" // classes para estilo
        />
        <div className="text-box">
          <p>
            Na Barbearia do Siri, proporcionamos uma experiência única em cuidados masculinos. <br />
            Com uma equipe altamente especializada e um ambiente acolhedor, buscamos transformar o cuidado com o seu visual em um momento de prazer. <br />
            Nossa missão é oferecer serviços de excelência com um atendimento personalizado, tudo a preços acessíveis.
          </p>
        </div>
      </section>

      {/* Seção Informações */}
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
