import { View, FlatList } from 'react-native';
import { parseISO, format } from 'date-fns';
import Text from './Text';
import useGetMyReviews from '../hooks/useGetMyReviews';
import styles from './repositoryStyles';


const ReviewItem = ({ review }) => {

  if (!review) return (
    <View testID="loading" style={styles.container}>
      <Text style={styles.descriptionText}>Loadind</Text>
    </View>
  );
  const formattedDate = format(parseISO(review.createdAt), 'dd.MM.yyyy');

  return (
    <View key={review.id} style={styles.list}>
      <View style={styles.container}>
        <View style={styles.containerRow}>
          <View style={styles.ratingStyle}>
            <Text style={styles.ratingText}>{review.rating}</Text>
          </View>
          <View style={styles.containerColumn}>
            <Text style={styles.header}>{review.user.username}</Text>
            <Text style={styles.descriptionText}>{formattedDate}</Text>
            <Text style={styles.reviewText}>{review.text}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

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
      keyExtractor={(item) => item.id}
    />
  );
};
export default MyReviews;
