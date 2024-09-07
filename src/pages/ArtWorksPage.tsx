import {FlatList, Image, StyleSheet, View, Text} from 'react-native';
import {useEffect, useState} from 'react';
import {artWorksApi} from '../api/ArtWorks';

const limit = 20;
function ArtWorksPage() {
  const [artWorksData, setArtWorksData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const renderArtWork = ({item}) => (
    <View style={styles.artWorkContainer}>
      {item.lqip && <Image source={item.lqip} />}
      <View style={styles.artWorkTextWrap}>
        <Text>{item.title}</Text>
        <Text>{item.artist_display}</Text>
      </View>
    </View>
  );
  useEffect(() => {
    fetchArtWorksData();
  }, [page]);
  const fetchArtWorksData = async () => {
    setLoading(true);
    const data = await artWorksApi(page, limit);
    setLoading(false);
    setArtWorksData([...artWorksData, ...data.data]);
  };
  const loadMoreItems = () => {
    if (!loading) {
      setPage(page + 1);
    }
  };
  return (
    <FlatList
      data={artWorksData}
      renderItem={renderArtWork}
      keyExtractor={item => item.id}
      onEndReached={loadMoreItems}
      onEndReachedThreshold={10}
    />
  );
}

export default ArtWorksPage;

const styles = StyleSheet.create({
  artWorkContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  artWorkTextWrap: {
    flexDirection: 'column',
  },
});
