import Banner from '@/components/Banner'
import Card from '@/components/Card'
import styles from './page.module.css'
import { FaQuestionCircle } from 'react-icons/fa'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner/>
      <span className={styles.questionSpan}>ประเภทเเละสรรพคุณของวัคซีน <FaQuestionCircle/> </span>
      <div className={styles.cardSection}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </main>
  )
}
