import { FlatList, View } from 'react-native';
import RepositoryItem from './RepositoryItem'
import ItemSeparator from './ItemSeparator';
import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { useDebounce } from "use-debounce";
import { Searchbar } from 'react-native-paper';
import styles from './repositoryStyles';

export const RepositoryListContainer = ({ repositories, ListHeaderComponent }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList style={styles.list}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

const ListHeader = ({ value, onChange, searchOnChange, searchText }) => {
  return (
    <View>
      <Searchbar placeholder="Search" onChangeText={searchOnChange}
        value={searchText} mode="view" style={styles.se} />
      <View style={styles.pickerStyle}>
        <Picker selectedValue={value} onValueChange={onChange}>
          <Picker.Item label="Latest repositories" value="latest" />
          <Picker.Item label="Highest rated repositories" value="highest" />
          <Picker.Item label="Lowest rated repositories" value="lowest" />
        </Picker>
      </View>
    </View>
  );
};

const RepositoryList = () => {
  const [text, setText] = useState("");
  const [debouncedText] = useDebounce(text, 1000);
  const [order, setOrder] = useState('latest');
  const { repositories } = useRepositories(
    order === 'highest' || order === 'lowest' ? 'RATING_AVERAGE' : 'CREATED_AT',
    order === 'lowest' ? 'ASC' : 'DESC', debouncedText
  );

  return (
    <RepositoryListContainer
      repositories={repositories}
      ListHeaderComponent={<ListHeader value={order} onChange={setOrder} searchOnChange={setText} searchText={text} />}
    />
  );
};

export default RepositoryList;
