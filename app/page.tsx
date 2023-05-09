import Image from 'next/image'
import styles from './page.module.css'
import { ProductInfo } from './form'

export default function Home() {
  return (
    <main className={styles.main}>
    <ProductInfo/>
    </main>
  )
}
