import { FC } from "react";
import { photoAPI } from "../../../services/photoServices";

interface PhotosRTKProps {}

const PhotosRTK: FC<PhotosRTKProps> = () => {
  const { data: photos, error, isLoading, refetch } = photoAPI.useFetchPhotosQuery(10, { pollingInterval: 10000 });

  const handleRefetch = () => refetch();

  return (
    <div>
      <button className="text-white bg-blue-400 px-15 py-5 rounded-5" onClick={handleRefetch}>
        Refetch
      </button>
      {isLoading && "Загрузка..."}
      {error && "Ошибка в запросе"}
      {photos?.map((photo, index) => (
        <div key={photo.id} className="flex flex-col mb-10">
          <span className="text-green-800 font-bold mb-5">{index + 1 + ") " + photo.title}</span>
          <img className="h-100 w-100 mb-5" src={photo.url} />
          <button className="text-white bg-red-700 px-15 py-5 rounded-5">Delete Photo</button>
        </div>
      ))}
    </div>
  );
};

export default PhotosRTK;
