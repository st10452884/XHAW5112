import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, TextInput, Alert } from 'react-native';

const courses = [
  { id: '1', name: 'First Aid', fees: 1500 },
  { id: '2', name: 'Sewing', fees: 1500 },
  { id: '3', name: 'Landscaping', fees: 1500 },
  { id: '4', name: 'Life Skills', fees: 1500 },
  { id: '5', name: 'Child Minding', fees: 750 },
  { id: '6', name: 'Cooking', fees: 750 },
  { id: '7', name: 'Garden Maintenance', fees: 750 },
];

const FeeCalculatorScreen: React.FC = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [contactDetails, setContactDetails] = useState({ name: '', phone: '', email: '' });

  const toggleCourseSelection = (courseId: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId) ? prev.filter(id => id !== courseId) : [...prev, courseId]
    );
  };

  const calculateTotalFees = () => {
    const selected = courses.filter(course => selectedCourses.includes(course.id));
    let total = selected.reduce((sum, course) => sum + course.fees, 0);
    
    let discount = 0;
    if (selected.length === 1) {
      discount = 0; // No discount for one course
    } else if (selected.length === 2) {
      discount = 0.05; // 5% discount
    } else if (selected.length === 3) {
      discount = 0.10; // 10% discount
    } else if (selected.length > 3) {
      discount = 0.15; // 15% discount
    }
    
    total *= (1 - discount); // Apply discount
    total *= 1.15; // Add 15% VAT
    return total.toFixed(2); // Format to two decimal places
  };

  const handleCalculate = () => {
    const totalFees = calculateTotalFees();
    const selectedCount = selectedCourses.length;

    let discountMessage = '';
    if (selectedCount === 1) {
      discountMessage = 'You have selected 1 course. No discount applies.';
    } else if (selectedCount === 2) {
      discountMessage = 'You have selected 2 courses. A 5% discount applies.';
    } else if (selectedCount === 3) {
      discountMessage = 'You have selected 3 courses. A 10% discount applies.';
    } else if (selectedCount > 3) {
      discountMessage = `You have selected ${selectedCount} courses. A 15% discount applies.`;
    }

    Alert.alert(
      'Total Fees',
      `${discountMessage}\n\nTotal Fees: R${totalFees}\n\nName: ${contactDetails.name}\nPhone: ${contactDetails.phone}\nEmail: ${contactDetails.email}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculate Total Fees</Text>

      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={selectedCourses.includes(item.id) ? styles.selectedCourse : styles.course}
            onPress={() => toggleCourseSelection(item.id)}
          >
            <Text>{item.name} - R{item.fees}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />

      <TextInput
        placeholder="Name"
        value={contactDetails.name}
        onChangeText={(text) => setContactDetails({ ...contactDetails, name: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        value={contactDetails.phone}
        onChangeText={(text) => setContactDetails({ ...contactDetails, phone: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={contactDetails.email}
        onChangeText={(text) => setContactDetails({ ...contactDetails, email: text })}
        style={styles.input}
      />

      <Button title="Calculate Total Fees" onPress={handleCalculate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5E0D9', // Nude color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  course: {
    padding: 10,
    borderBottomWidth: 1,
  },
  selectedCourse: {
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: '#D3D3D3', // Highlight selected
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default FeeCalculatorScreen;
