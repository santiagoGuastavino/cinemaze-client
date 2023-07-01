import styles from '@/styles/components/Side.module.scss';

export default function Side(): JSX.Element {
  return (
    <div className={styles.div}>
      <h1>cinemaze</h1>
      <img src="/images/tomato.png" />
    </div>
  );
}
