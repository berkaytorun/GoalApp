import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='Your Goal'
                onChangeText={(enteredText) => (enteredText !== '' ? setEnteredGoal(enteredText) : null)}
                value={enteredGoal}
            />
            <Button
                title='Add Goal'
                onPress={() => {
                    props.onAddGoal(enteredGoal);
                    setEnteredGoal('');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
});

export default GoalInput;
