import { View, StyleSheet, } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import appBarTheme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: appBarTheme.appBarTheme.colors.backgroundColor
    },
});

const AppBar = () => {
    return <View style={styles.container}>
        <AppBarTab />
    </View>;
};
export default AppBar;