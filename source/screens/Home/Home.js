import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {Header, Post} from '../../components';
import {usePosts} from '../../hooks/usePosts';
import {styles} from './Home.styles';

const Home = () => {
  const {posts, loadingPosts, refreshPosts, getPosts} = usePosts();
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={Header}
        ListFooterComponent={
          loadingPosts && <ActivityIndicator style={styles.loader} />
        }
        refreshing={loadingPosts}
        onRefresh={refreshPosts}
        keyExtractor={item =>
          `${item?.id}${Math.floor(Math.random() * 100) + 1}`
        }
        data={posts}
        onEndReachedThreshold={0.3}
        onEndReached={posts.length && !loadingPosts && getPosts}
        renderItem={({item}) => <Post post={item} />}
      />
    </View>
  );
};

export default Home;
