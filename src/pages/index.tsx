import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Layout.module.css'
import Calendar from '@/components/calendar'

const inter = Inter({ subsets: ['latin'] })

export default function Layout() {
  return (
    <>
      <Head>
        <title>Vitamin London</title>
        <meta name="description" content="Vitamin London Tech Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Calendar></Calendar>
        </div>
      </main>
    </>
  )
}
