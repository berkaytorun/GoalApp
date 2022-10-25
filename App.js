import { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
export default function App() {
    const [goals, setGoals] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const addGoalHandler = (enteredGoalText) => {
        if (enteredGoalText !== '')
            setGoals((currentGoals) => [...currentGoals, { text: enteredGoalText, key: Math.random().toString() }]);
    };

    const deleteItems = (key) => {
        setGoals(goals.filter((goal) => goal.key !== key));
    };

    return (
        <>
            <StatusBar style='auto' />
            <View style={styles.appContainer}>
                <Button
                    title='Add Goal'
                    color='ivory'
                    onPress={() => setIsVisible(true)}
                />
                {isVisible && (
                    <GoalInput
                        onAddGoal={addGoalHandler}
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                    />
                )}
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={goals}
                        keyExtractor={(item, index) => item.key}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    deleteItem={deleteItems}
                                    text={itemData.item.text}
                                    itemKey={itemData.item.key}
                                />
                            );
                        }}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: 'teal',
    },
    goalsContainer: {
        flex: 6,
    },
});
