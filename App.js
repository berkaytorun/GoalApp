import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
export default function App() {
    const [goals, setGoals] = useState([]);

    const addGoalHandler = (enteredGoalText) => {
        if (enteredGoalText !== '')
            setGoals((currentGoals) => [...currentGoals, { text: enteredGoalText, key: Math.random().toString() }]);
    };

    const deleteItems = (key) => {
        setGoals(goals.filter((goal) => goal.key !== key));
    };

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={goals}
                    keyExtractor={(item, index) => item.key}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                deleteItem={deleteItems}
                                index={itemData.index}
                                text={itemData.item.text}
                                itemKey={itemData.item.key}
                            />
                        );
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 6,
    },
});
