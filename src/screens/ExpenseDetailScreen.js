import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ExpenseDetailScreen = ({ route }) => {
    const { title, amount} = route.params;

    return (
        <View style={styles.container}>
            <Text style= {styles.title}> Expense Detail</Text>
            <Text>Title: {title}</Text>
            <Text>Amount: ${amount}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default  ExpenseDetailScreen;