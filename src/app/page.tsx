'use client';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import axios from 'axios';
import Card from '@/components/Card';

const defaultUrl: URL = process.env.NEXT_PUBLIC_DEFAULT_URL as unknown as URL;
const fetcher = (url: string) => axios.get(url).then((res) => res.data.payload);

export default function Home(): JSX.Element {
  const router: AppRouterInstance = useRouter();

  const { data, error } = useSWR(`${defaultUrl}/movie`, fetcher);
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  const handleNavigation = (): void => {
    router.push('/add-movie');
  };

  return (
    <>
      <div>home</div>
      <h2>movies</h2>
      <p onClick={handleNavigation}>add movie</p>
      <div>
        {data && data.map((movie: any, i: number) => (
          <Card movie={movie} key={i} />
        ))}
      </div>
    </>
  );
}
