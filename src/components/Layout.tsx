import styles from '@/styles/components/Layout.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props): JSX.Element {
  return <main className={styles.main}>{children}</main>;
}
