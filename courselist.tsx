import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const courses = [
  { id: '1', name: 'First Aid' },
  { id: '2', name: 'Sewing' },
  { id: '3', name: 'Cooking' },
  { id: '4', name: 'Landscaping' },
  { id: '5', name: 'Life Skills' },
  { id: '6', name: 'Child Minding' },
  { id: '7', name: 'Garden Maintenance' },
];

const CourseListScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Courses</Text>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('CourseDetail', { courseId: item.id })}>
            <Text style={styles.courseLink}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
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
  courseLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
});

export default CourseListScreen;
