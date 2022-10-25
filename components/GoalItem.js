import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
            <TouchableOpacity onPress={() => props.deleteItem(props.itemKey)}>
                <AntDesign
                    name='delete'
                    size={24}
                    color='red'
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 8,
        marginHorizontal: 5,
        marginBottom: 5,
        backgroundColor: 'gainsboro',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    goalText: {
        color: 'blue',
    },
});

export default GoalItem;
