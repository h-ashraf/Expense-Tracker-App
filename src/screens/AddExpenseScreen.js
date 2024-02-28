import React from 'react';
import { View, StyleSheet } from 'react-native';
import ExpenseForm from '../components/ExpenseForm';
import { useDispatch } from 'react-redux';

const AddExpenseScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const handleSaveExpense = (expense) => {
        dispatch({ type: 'ADD_EXPENSE', payload: expense });
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
        <ExpenseForm onSaveExpense={handleSaveExpense} />
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

export default AddExpenseScreen;