import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    return (
        <Modal
            visible={props.isVisible}
            animationType='slide'
        >
            <View style={styles.wrapper}>
                <View style={styles.inputContainer}>
                    <Image
                        source={require('../assets/images/goal.png')}
                        style={styles.image}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Your Goal'
                        onChangeText={(enteredText) => (enteredText !== '' ? setEnteredGoal(enteredText) : null)}
                        value={enteredGoal}
                        onEndEditing={() => {
                            props.onAddGoal(enteredGoal);
                            setEnteredGoal('');
                            props.setIsVisible(false);
                        }}
                    />
                    <Button
                        title='Add Goal'
                        color='darkblue'
                        onPress={() => {
                            props.onAddGoal(enteredGoal);
                            setEnteredGoal('');
                            props.setIsVisible(false);
                        }}
                    />
                </View>
                <Button
                    title='Close'
                    color='darkblue'
                    onPress={() => props.setIsVisible(false)}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'teal',
    },
    image: {
        width: 100,
        height: 100,
    },
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 25,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'darkblue',
        width: '100%',
        color: 'white',
        padding: 16,
        marginVertical: 16,
    },
});

export default GoalInput;
