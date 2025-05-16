import { API_URL } from '../app/constants';
import styles from '../styles/movie-info.module.css';

export async function getMovie(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${API_URL}/${id}`); // page.tsx에서 캐시된 정보를 가져옴(실제 통신X)
  return res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} className={styles.poster} alt={movie.title}/>
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>🏠Homepage</a>
        {/* TODO: 더 다양한 데이터 삽입해보기 */}
      </div>
    </div>
  );
}
