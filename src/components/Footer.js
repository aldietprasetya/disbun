import styles from '../styles/components/Footer.module.scss'

export default function Header() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p className={styles.footer__copyright}>© Copyright 2022 Dinas Perkebunan Provinsi Jawa Barat. Allright Reserved</p>
      </div>
    </footer>
  )
}
