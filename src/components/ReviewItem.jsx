import { View } from 'react-native';
import { parseISO, format } from 'date-fns';
import Text from './Text';
import styles from './repositoryStyles';



const ReviewItem = ({ review }) => {

    if (!review) return (
        <View testID="loading" style={styles.container}>
            <Text style={styles.descriptionText}>Loadind</Text>
        </View>
    );
    const formattedDate = format(parseISO(review.createdAt), 'dd.MM.yyyy');

    return (
        <View key={review.id}>
            <View style={styles.container}>
                <View style={styles.containerRow}>
                    <View style={styles.ratingStyle}>
                        <Text style={styles.ratingText}>{review.rating}</Text>
                    </View>
                    <View style={styles.containerColumn}>
                        {review.repository?.fullName ?
                            (<Text style={styles.header}>{review.repository.fullName}</Text>) :
                            (<Text style={styles.header}>{review.user.username}</Text>)}
                        <Text style={styles.descriptionText}>{formattedDate}</Text>
                        <Text style={styles.reviewText}>{review.text}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ReviewItem;