import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {likePostAction, unlikePostAction} from '../store/actions/postsActions';

const usePost = () => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const likePost = async id => {
    const formdata = new FormData();
    formdata.append('post_id', id);
    dispatch(likePostAction(formdata));
    setLiked(true);
  };
  const unlikePost = async id => {
    const formdata = new FormData();
    formdata.append('post_id', id);
    dispatch(unlikePostAction(formdata));
    setLiked(false);
  };

  return {
    liked,
    likePost,
    unlikePost,
  };
};

export {usePost};
