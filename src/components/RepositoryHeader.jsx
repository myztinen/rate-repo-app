import { Text, View, Image } from 'react-native';


const RepositoryHeader = ({ item, styles }) => {
    return (
        <View style={styles.containerRow}>
            <Image source={{ uri: item.ownerAvatarUrl }} style={styles.tinyLogo} />
            <View style={styles.containerColumn}>
                <Text testID="repoName" style={styles.header}>{item.fullName}</Text>
                <Text testID="description" style={styles.descriptionText}>{item.description}</Text>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.language}</Text>
                </View>
            </View>
        </View>
    );
};
export default RepositoryHeader;