import { View, FlatList } from 'react-native';
import Text from './Text';
import ReviewItem from './ReviewItem';
import useGetMyReviews from '../hooks/useGetMyReviews';
import styles from './repositoryStyles';
import ItemSeparator from './ItemSeparator';

const MyReviews = () => {
  const { reviews, isLoading } = useGetMyReviews();
  const reviewNodes = reviews?.reviews?.edges?.map((item) => item.node) ?? [];

  if (isLoading || !reviews) return (
    <View testID="loading" style={styles.container}>
      <Text style={styles.descriptionText}>Loadind</Text>
    </View>
  );
  return (
    <FlatList style={styles.list}
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
    />
  );
};
export default MyReviews;
