import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.infoText}>Phone: (123) 456-7890</Text>
      <Text style={styles.infoText}>Email: info@empoweringthenation.co.za</Text>
      <Text style={styles.infoText}>Venues:</Text>
      <Text style={styles.infoText}>1. Venue 1, Johannesburg</Text>
      <Text style={styles.infoText}>2. Venue 2, Johannesburg</Text>
      <Text style={styles.infoText}>3. Venue 3, Johannesburg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5E0D9', // Nude color for background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ContactScreen;
