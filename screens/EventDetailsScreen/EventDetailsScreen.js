import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function EventDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Details</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non urna
        et tellus pellentesque volutpat id et augue.
      </Text>
      {/* Weitere Inhalte der Event-Detailansicht */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default EventDetailsScreen;
