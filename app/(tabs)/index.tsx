import { StyleSheet, Text, Pressable, Alert } from 'react-native';
import { View } from '../../components/Themed';
import { Agenda, AgendaEntry } from 'react-native-calendars';
import events from "../../assets/data/events.json";
import { Link } from 'expo-router';


export default function TabOneScreen() {
  const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <Link href="../modal" asChild>
        <Pressable
          style={[styles.item, { height: reservation.height }]}
          >
          <Text style={{ fontSize, color }}>{reservation.name}</Text>
      </Pressable>
      </Link>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
          <Agenda 
          items={events}
          selected="2022-11-24"
          renderItem={renderItem}
          renderEmptyDate={renderEmptyDate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item : {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});