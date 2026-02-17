import { View, Pressable, FlatList } from 'react-native';
import { parseISO, format } from 'date-fns';
import RepositoryHeader from './RepositoryHeader';
import RepositoryStats from './RepositoryStats';
import Text from './Text';
import { useParams } from 'react-router-native';
import useSingleRepository from '../hooks/useSingleRepository';
import useSingleRepositoryReviews from '../hooks/useSingleRepositoryReviews';
import * as Linking from "expo-linking";
import styles from './repositoryStyles';


const SingleInfo = ({ repository }) => {
  return (
    <View style={styles.list}>
      <View testID="singleItem" style={styles.container}>
        <RepositoryHeader item={repository} styles={styles} />
        <RepositoryStats item={repository} styles={styles} />
        <Pressable onPress={() => Linking.openURL(repository.url)} style={styles.badge}>
          <Text style={styles.buttonText}>Open in Github</Text>
        </Pressable>
      </View>
    </View>
  );
};

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

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading } = useSingleRepository(id);
  const { reviews, isLoading } = useSingleRepositoryReviews(id);
  const reviewNodes = reviews?.reviews?.edges?.map((item) => item.node) ?? [];

  if (loading || isLoading || !repository) return (
    <View testID="loading" style={styles.container}>
      <Text style={styles.descriptionText}>Loadind</Text>
    </View>
  );

  return (
    <FlatList style={styles.list}
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <SingleInfo repository={repository} />}
    />
  );
};

export default SingleRepository;
