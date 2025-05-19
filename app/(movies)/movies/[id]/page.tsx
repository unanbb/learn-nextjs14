import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

type TParams = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: TParams}) {
  const { id } = await params;
  const movie = await getMovie(id); // 실제 통신

  return {
    title: movie.title,
  };
} // Dynamic metadata(동적인 제목을 갖고있는 페이지를 위해 존재하는 함수)

export default async function MovieDetail({ params }: { params: TParams}) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie Videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
