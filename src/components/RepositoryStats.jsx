import { Text, View } from 'react-native';


const RepositoryStats = ({ item, styles }) => {
    return (
        <View style={styles.statRow}>
            <View style={styles.statColumn}>
                <Text testID="language" style={styles.header}>{item.language}</Text>
                <Text style={styles.descriptionText}>Language</Text>
            </View>
            <View style={styles.statColumn}>
                <Text testID="stargazers" style={styles.header}>{item.stargazersCount}</Text>
                <Text style={styles.descriptionText}>Stars</Text>
            </View>
            <View style={styles.statColumn}>
                <Text style={styles.header}>{item.forksCount}</Text>
                <Text style={styles.descriptionText}>Forks</Text>
            </View>
            <View style={styles.statColumn}>
                <Text testID="reviewCount" style={styles.header}>{item.reviewCount}</Text>
                <Text style={styles.descriptionText}>Reviews</Text>
            </View>
            <View style={styles.statColumn}>
                <Text testID="ratingAverage" style={styles.header}>{item.ratingAverage}</Text>
                <Text style={styles.descriptionText}>Rating</Text>
            </View>
        </View>
    );
};

export default RepositoryStats;