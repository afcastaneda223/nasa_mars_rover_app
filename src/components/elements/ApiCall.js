import { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = (pageNumber, ApiURL) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setPhotos([]);
  }, [ApiURL]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: ApiURL,
      params: { page: pageNumber, _limit: 25 },
      cancelToken: new axios.CancelToken((c) => cancel = c),
    }).then((res) => {
      setPhotos((prevPhotos) => [...new Set(
        [...prevPhotos, ...res.data.photos.map((p) => p.img_src)],
      )]);
      setHasMore(res.data.photos.length > 0);
      setLoading(false);
      console.log(res.data);
    }).catch((e) => {
      if (axios.isCancel(e)) return;
      setError(true);
    });
    return () => cancel();
  }, [pageNumber, ApiURL]);
  return {
    loading, error, photos, hasMore,
  };
};

export default ApiCall;
