import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ExpenseForm = ({ onSaveExpense }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const handleSaveExpense = () => {
        onSaveExpense({ title, amount: parseFloat(amount) });
        setTitle('');
        setAmount('');
    };

    return (
        <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={text => setTitle(text)}
        />
        <TextInput
            style={styles.input}
            placeholder="Amount"
            value={amount}
            onChangeText={text => setAmount(text)}
            keyboardType="numeric"
        />
        <Button title="Save Expense" onPress={handleSaveExpense} />
        </View>
    );
};
const styles = StyleSheet.create({
    form: {
        margin: 20,
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingVertical: 5,
    },
});

export default ExpenseForm;
