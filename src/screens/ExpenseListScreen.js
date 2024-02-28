import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseItem from '../components/ExpenseItem';

const ExpenseListScreen = ({ navigation }) => {
    const expenses = useSelector(state => state.expenses);
    const dispatch = useDispatch();

    const handleDeleteExpense = (id) => {
        dispatch({ type: 'DELETE_EXPENSE', payload: id });
    };

    return (
        <View style={styles.container}>
        {expenses.length === 0 ? (
            <Text>No expenses to display. Add some expenses!</Text>
        ) : (
            <FlatList
            data={expenses}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <ExpenseItem
                title={item.title}
                amount={item.amount}
                onDelete={() => handleDeleteExpense(item.id)}
                />
            )}
            />
        )}
        <Button
            title="Add Expense"
            onPress={() => navigation.navigate('AddExpense')}
        />
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
});

export default ExpenseListScreen;