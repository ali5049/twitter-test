import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {P} from '..';
import {BLACK, RED} from '../../constants/colors';
import {usePost} from '../../hooks/usePost';
import {getDuration} from '../../utils/helpers';
import {wp} from '../../utils/reponsiveSizes';
import {styles} from './Post.styles';

const Post = ({post}) => {
  const {liked, likePost, unlikePost} = usePost();
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{uri: post?.user?.profile_image_url}}
      />
      <View>
        <View style={styles.nameContainer}>
          <P customStyles={styles.name} numLines={1}>
            {post?.user?.first_name + ' ' + post?.user?.last_name}{' '}
            <P customStyles={styles.company}>@{post?.user?.company_name}</P>
          </P>
          <P>{getDuration(post?.created_at)}</P>
        </View>

        <P customStyles={styles.content}>{post.text}</P>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.countContainer}>
            <EvilIcon size={wp(17)} name={'comment'} color={BLACK} />
            <P customStyles={[styles.count]}>{post?.replies_count}</P>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.countContainer}
            onPress={() => (liked ? unlikePost(post?.id) : likePost(post?.id))}>
            <Icon
              size={wp(17)}
              name={liked ? 'heart' : 'heart-outline'}
              color={liked ? RED : BLACK}
            />
            <P customStyles={[styles.count, liked && styles.liked]}>
              {liked ? post?.likes_count + 1 : post?.likes_count}
            </P>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Post;
