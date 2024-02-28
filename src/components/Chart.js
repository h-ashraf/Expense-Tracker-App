import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, XAxis, YAxis, Grid } from 'react-native-svg-charts';

const Chart = ({ data }) => {
    const labels = data.map(item => item.label);
    const amounts = data.map(item => item.amount);

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Spending Chart</Text>
        <View style={{ height: 200, flexDirection: 'row' }}>
            <YAxis
            data={amounts}
            contentInset={{ top: 20, bottom: 20 }}
            svg={{ fontSize: 10, fill: 'grey' }}
            numberOfTicks={5}
            formatLabel={(value) => `$${value}`}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
            <BarChart
                style={{ flex: 1 }}
                data={amounts}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid />
            </BarChart>
            <XAxis
                data={labels}
                formatLabel={(value, index) => labels[index]}
                contentInset={{ left: 20, right: 20 }}
                svg={{ fontSize: 10, fill: 'black' }}
            />
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default Chart;
