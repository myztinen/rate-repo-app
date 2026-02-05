import { View, Pressable } from 'react-native';
import RepositoryHeader from './RepositoryHeader';
import RepositoryStats from './RepositoryStats';
import { useNavigate } from 'react-router-native';
import styles from './repositoryStyles';

const RepositoryItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
      <View testID="repositoryItem" style={styles.container}>
        <RepositoryHeader item={item} styles={styles} />
        <RepositoryStats item={item} styles={styles} />
      </View>
    </Pressable>
  );
};

export default RepositoryItem;
