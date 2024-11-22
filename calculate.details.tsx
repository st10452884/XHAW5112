import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalculateDetailsScreen: React.FC<{ route: any }> = ({ route }) => {
  const { totalFees, discountMessage } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculation Details</Text>
      <Text>{discountMessage}</Text>
      <Text style={styles.total}>Total Fees: R{totalFees}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F5E0D9', // Nude color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  total: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default CalculateDetailsScreen;
