// This file can contain functions for interacting with a backend API, if applicable
// For example, functions for fetching and sending data to a server

// Example function for fetching expenses from a backend API
export const fetchExpenses = async () => {
    try {
        // Perform fetch request to your backend API
        const response = await fetch('https://example.com/api/expenses');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching expenses:', error);
        return [];
    }
};

// Example function for sending an expense to be saved in the backend
export const saveExpense = async (expense) => {
    try {
      // Perform POST request to save the expense to your backend API
        const response = await fetch('https://example.com/api/expenses', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(expense),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error saving expense:', error);
        return null;
    }
};  