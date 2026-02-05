import { View, Pressable } from 'react-native';
import RepositoryHeader from './RepositoryHeader';
import RepositoryStats from './RepositoryStats';
import Text from './Text';
import { useParams } from 'react-router-native';
import useSingleRepository from '../hooks/useSingleRepository';
import * as Linking from "expo-linking";
import styles from './repositoryStyles';


const SingleItem = () => {
  const { id } = useParams();
  const { repository, loading } = useSingleRepository(id);

  if (loading || !repository) return (
    <View testID="loading" style={styles.container}>
      <Text style={styles.descriptionText}>Loadind</Text>
    </View>
  );

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

export default SingleItem;
