import { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = (pageNumber, ApiURL) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos([]);
  }, [ApiURL]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: 'GET',
      url: ApiURL,
      params: { page: pageNumber, _limit: 25 },
    }).then((res) => {
      setPhotos((prevPhotos) => [...new Set(
        [...prevPhotos, ...res.data.photos.map((p) => p.img_src)],
      )]);
      setLoading(false);
      console.log(res.data);
    }).catch((e) => {
      if (axios.isCancel(e)) return;
      setError(true);
    });
  }, [pageNumber, ApiURL]);
  return {
    loading, error, photos,
  };
};

export default ApiCall;
