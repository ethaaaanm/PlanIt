import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native'
import { View, Text } from '../components/Themed';
import event from "../assets/data/event.json";
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';

export default function ModalScreen() {

  const onJoin = () => {} ;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.name}</Text>
      <Text style={styles.time}>
        <AntDesign name="calendar" size={24} color={"black"} /> {"  "}
        {new Date(event.date).toDateString()}
      </Text>
     
    <View style={styles.footer}>
      <CustomButton text='Join the event' onPress={onJoin} />
    </View> 
    

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  time: {
    fontSize: 20,
  },
  footer: {
    marginTop: "auto",
  },
});
