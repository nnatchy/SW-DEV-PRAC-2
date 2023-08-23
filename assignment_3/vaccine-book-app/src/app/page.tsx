import Banner from '@/components/Banner'
import Card from '@/components/Card'
import styles from './page.module.css'
import { FaHeartbeat, FaQuestionCircle, FaPhoneAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <span className={styles.questionSpan}>ประเภทเเละสรรพคุณของวัคซีน <FaQuestionCircle /> </span>
      <div className={styles.cardSection}>
        <div className={styles.pfizerInfo}>
          <h2 className={styles.cardTopic}>Pfizer คืออะไร <FaQuestionCircle /></h2>
          <p className={styles.paragraph}>
            วัคซีนโควิดไฟเซอร์ (Pfizer) มีชื่อทางการว่า BNT162b2 เป็นวัคซีนป้องกันโรคโควิด 19 ชนิด mRNA ที่คิดค้นโดยบริษัทไฟเซอร์ (Pfizer) ร่วมกับบริษัทสัญชาติเยอรมันชื่อไอโบเอ็นเท็ค (BioNTech)
          </p>
          <p className={styles.paragraph}>
            วัคซีนชนิด mRNA เป็นการสังเคราะห์สารพันธุกรรมเลียนแบบเชื้อไวรัสขึ้นมา ดังนั้นในวัคซีนจึงไม่ได้มีอนุภาคของเชื้อไวรัส หรือแบคทีเรียที่ตายแล้วอยู่ภายในเลย
          </p>
          <p className={styles.paragraph}>
            เมื่อ mRNA ถูกฉีดเข้าไปในร่างกาย จะกระตุ้นให้เกิดการสร้างโปรตีนส่วนหนาม (Spike protein) เหมือนกับโคโรนาไวรัส ซึ่งเป็นส่วนที่ทำให้เกิดการติดเชื้อจนเป็นโควิด 19 เมื่อร่างกายเห็นโปรตีนส่วนหนามของไวรัสแล้ว จึงสามารถสร้างภูมิคุ้มกันไว้สำหรับป้องกันไวรัสจริงๆ ที่จะเข้ามาได้
          </p>
          <p className={styles.paragraph}>
            วัคซีนไฟเซอร์ได้รับการอนุมัติให้ใช้ในกรณีฉุกเฉินจากองค์การอาหารและยาสหรัฐ (Food and Drug Administration: FDA) เพื่อป้องกันโรคโควิด 19 สำหรับผู้ที่อายุ 12 ปีขึ้นไป
          </p>
          <p className={styles.paragraph}>
            ล่าสุด 24 มิถุนายน 2564 สำนักงานคณะกรรมการอาหารและยา (อย.) อนุมัติทะเบียนวัคซีนวัคซีนโควิดไฟเซอร์ (Pfizer) แล้ว นับเป็นวัคซีนโควิดรายที่ 6 ที่ผ่านการอนุมัติจาก อย.
          </p>
        </div>
        <Card />
        <div className={styles.pfizerInfo}>
          <h2 className={styles.cardTopic}>ผลข้างเคียงของตัววัคซีน <FaHeartbeat /></h2>
          <p style={{ marginBottom: 10 }}>
            ผลข้างเคียงที่อาจพบได้หลังได้รับวัคซีนไฟเซอร์ ได้แก่
            <ul>
              <li>ปวด บวม แดง คัน หรือช้ำในจุดที่ฉีด</li>
              <li>มีไข้ หนาวสั่น</li>
              <li>อ่อนเพลีย ไม่สบายตัว ครั่นเนื้อครั่นตัว</li>
              <li>ปวดศีรษะ</li>
              <li>ปวดเมื่อยตามข้อ และปวดเมื่อยกล้ามเนื้อ</li>
              <li>คลื่นไส้ อาเจียน</li>
              <li>ท้องเสีย</li>
            </ul>
          </p>
          <h2 className={styles.cardTopic}>วัคซีน Pfizer เหมาะกับใคร <FaQuestionCircle /> </h2>
          <ul>
            <li>ผู้ที่อายุ 16 ปีขึ้นไป</li>
            <li>ผู้ที่อายุเกิน 65 ปีขึ้นไป <span style={{ color: 'red', }}>ควรปรึกษาแพทย์ก่อนรับวัคซีน</span></li>
            <li>ผู้ที่ทำงานด้านสาธารณสุข</li>
            <li>ผู้ที่มีโรคประจำตัวที่อาจส่งผลให้อาการรุนแรงหากติดเชื้อโควิด 19 เช่น ความดันโลหิตสูง เบาหวาน โรคหอบหืด โรคปอด โรคตับ โรคไต และโรคติดเชื้อเรื้อรังอื่นๆ</li>
            <li>ผู้ป่วยติดเชื้อ HIV</li>
            <li>สตรีที่กำลังอยู่ระหว่างให้นมบุตร <br /> <span style={{ color: 'red', }}>ควรปรึกษาแพทย์ก่อนรับวัคซีน</span></li>
            <li>สตรีมีครรภ์ <span style={{ color: 'red' }}>ควรปรึกษาแพทย์ก่อนรับวัคซีน</span></li>
          </ul>
        </div>
      </div>
      <div>
        <h1 style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>พบข้อสงสัยเกี่ยวกับตัวบริการฉีดวัคซีนครั้งนี้ โปรดติดต่อ <span style={{marginLeft: 10, paddingTop: 5}}><FaPhoneAlt/></span> <span style={{marginLeft: 10, color: 'magenta'}}>09X-XXX-XXXX</span></h1>
      </div>
    </main>
  )
}