import styles from '@/styles/Home.module.css';
import { Profile } from './components/Profile';

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1>create-liff-app</h1>
        <a
          href='https://developers.line.biz/ja/docs/liff/'
          target='_blank'
          rel='noreferrer'
        >
          LIFF Documentation
        </a>

        <Profile />
        <Profile />
        <Profile />
      </main>
    </div>
  );
}
