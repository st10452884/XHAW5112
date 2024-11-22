import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

interface CourseDetails {
  name: string;
  fees: string;
  purpose: string;
  content: string[];
  image: any; // Adjust type as necessary for images
}

const courseDetails: Record<string, CourseDetails> = {
  '1': {
    name: 'First Aid',
    fees: 'R1500',
    purpose: 'To provide first aid awareness and basic life support',
    content: [
      'Wounds and bleeding',
      'Burns and fractures',
      'Emergency scene management',
      'Cardio-Pulmonary Resuscitation (CPR)',
      'Respiratory distress (e.g., choking, blocked airway)',
    ],
    image: require('./images/first aid.png'), // Ensure the path is correct
  },
  '2': {
    name: 'Sewing',
    fees: 'R1500',
    purpose: 'To provide alterations and new garment tailoring services',
    content: [
      'Types of stitches',
      'Threading a sewing machine',
      'Sewing buttons, zips, hems, and seams',
      'Alterations',
      'Designing and sewing new garments',
    ],
    image: require('./images/sewinglady.jpg'),
  },
  '3': {
    name: 'Cooking',
    fees: 'R750',
    purpose: 'To prepare and cook nutritious family meals',
    content: [
      'Nutritional requirements for a healthy body',
      'Types of protein, carbohydrates, and vegetables',
      'Planning meals',
      'Preparation and cooking of meals',
    ],
    image: require('./images/cooking.jpg'),
  },
  '4': {
    name: 'Landscaping',
    fees: 'R1500',
    purpose: 'To provide landscaping services for new and established gardens',
    content: [
      'Indigenous and exotic plants and trees',
      'Fixed structures (fountains, statues, benches, tables, built-in braai)',
      'Balancing of plants and trees in a garden',
      'Aesthetics of plant shapes and colours',
      'Garden layout',
    ],
    image: require('./images/landscaping.jpg'),
  },
  '5': {
    name: 'Life Skills',
    fees: 'R1500',
    purpose: 'To provide skills to navigate basic life necessities',
    content: [
      'Opening a bank account',
      'Basic labour law (know your rights)',
      'Basic reading and writing literacy',
      'Basic numeric literacy',
    ],
    image: require('./images/life skills.png'),
  },
  '6': {
    name: 'Child Minding',
    fees: 'R750',
    purpose: 'To provide basic child and baby care',
    content: [
      'Birth to six-month old baby needs',
      'Seven-month to one-year-old needs',
      'Toddler needs',
      'Educational toys',
    ],
    image: require('./images/childminding.jpg'),
  },
  '7': {
    name: 'Garden Maintenance',
    fees: 'R750',
    purpose: 'To provide basic knowledge of watering, pruning, and planting in a domestic garden',
    content: [
      'Water restrictions and the watering requirements of indigenous and exotic plants',
      'Pruning and propagation of plants',
      'Planting techniques for different plant types',
    ],
    image: require('./images/Garden maintenance.jpg'),
  },
};

interface RouteParams {
  courseId: string;
}

interface CourseDetailScreenProps {
  route: {
    params: RouteParams;
  };
}

const CourseDetailScreen: React.FC<CourseDetailScreenProps> = ({ route }) => {
  const { courseId } = route.params;
  const course = courseDetails[courseId];

  // Check if the course exists
  if (!course) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Course not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={course.image} style={styles.image} />
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.fee}>Fees: {course.fees}</Text>
      <Text style={styles.purpose}>Purpose: {course.purpose}</Text>
      <Text style={styles.subtitle}>Content:</Text>
      {course.content.map((item, index) => (
        <Text key={index} style={styles.contentItem}>
          - {item}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5E0D9', // Nude color
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fee: {
    fontSize: 18,
    marginBottom: 10,
  },
  purpose: {
    fontSize: 18,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  contentItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CourseDetailScreen;
