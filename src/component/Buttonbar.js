import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function Buttonbar() {
  const [pressedIndex, setPressedIndex] = useState(null);

  const handlePress = (index) => {
    setPressedIndex(index === pressedIndex ? null : index);
  };

  const isPressed = (index) => {
    return index === pressedIndex;
  };

  const buttonNames = ["Monthly", "Yearly", "Daily", "Quarter", "Season"];

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        {buttonNames.map((name, index) => (
          <Button
            key={index}
            mode={isPressed(index) ? 'contained' : 'outlined'}
            color={isPressed(index) ? '#007aff' : '#000'}
            onPress={() => handlePress(index)}
            style={[styles.button, { borderColor: isPressed(index) ? '#007aff' : '#000' }]}
          >
            {name}
          </Button>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});


