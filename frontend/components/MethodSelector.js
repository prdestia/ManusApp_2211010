import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function MethodSelector({ selectedMethod, onSelect }) {
  const methods = ['SAW', 'WP', 'TOPSIS', 'AHP'];

  return (
    <View style={styles.container}>
      {methods.map((method) => (
        <Button
          key={method}
          title={method}
          onPress={() => onSelect(method)}
          color={selectedMethod === method ? 'blue' : 'gray'}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
});
