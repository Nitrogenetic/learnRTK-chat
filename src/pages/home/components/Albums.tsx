import { FC, useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../../../hooks/redux";
import { fetchAlbums } from "../../../store/actionCreators/albums";

interface AlbumsProps {}

const Albums: FC<AlbumsProps> = () => {
  const dispatch = useTypedDispatch();

  const { albums, isLoading, error: error } = useTypedSelector((store) => store.albums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return (
    <div>
      {isLoading && "Загрузка..."}
      {error && error}
      {albums.map((album, index) => (
        <div key={album.id} className="flex flex-col mb-10">
          <span className="text-green-800 font-bold">{index + 1 + ") " + album.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Albums;
