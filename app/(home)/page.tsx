import Link from 'next/link';

export const metadata = {
  title: 'Home',
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(API_URL); // json형태로 데이터를 받아옴
  const data = await res.json(); // 쓸 수 있는 형태로 변경
  return data;
}
export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
