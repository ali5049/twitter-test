import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPostsAction,
  refreshPostsAction,
} from '../store/actions/postsActions';

const usePosts = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const postsState = useSelector(state => state.posts);
  const {loadingPosts, posts} = postsState;
  const dispatch = useDispatch();

  const getPosts = () => {
    if (page <= totalPages || !totalPages) {
      dispatch(getPostsAction({page})).then(res => {
        if (res.payload?.totalPages && !totalPages) {
          setTotalPages(res.payload?.totalPages);
        }
      });
      setPage(_page => _page + 1);
    }
  };

  const refreshPosts = () => {
    dispatch(refreshPostsAction()).then(res => {
      if (res.payload?.totalPages && !totalPages) {
        setTotalPages(res.payload?.totalPages);
      }
    });
    setPage(1);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return {
    loadingPosts,
    posts,
    getPosts,
    refreshPosts,
  };
};

export {usePosts};
