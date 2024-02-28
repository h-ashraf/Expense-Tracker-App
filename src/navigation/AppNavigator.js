import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ExpenseListScreen from '../screens/ExpenseListScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import ExpenseDetailScreen from '../screens/ExpenseDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="ExpenseList">
            <Stack.Screen
            name="ExpenseList"
            component={ExpenseListScreen}
            options={{ title: 'Expense List' }}
            />
            <Stack.Screen
            name="AddExpense"
            component={AddExpenseScreen}
            options={{ title: 'Add Expense' }}
            />
            <Stack.Screen
            name="ExpenseDetail"
            component={ExpenseDetailScreen}
            options={{ title: 'Expense Detail' }}
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;