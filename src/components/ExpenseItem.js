import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExpenseItem = ({ title, amount }) => {
    return (
        <View style={styles.item}>
        <Text>{title}</Text>
        <Text>${amount}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
});

export default ExpenseItem;
