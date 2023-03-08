import { Pressable, StyleSheet, Text, Alert } from 'react-native';
import { View } from '../../components/Themed';
import { Agenda, AgendaEntry } from "react-native-calendars";
import events from "../../assets/data/events.json"

export default function TabOneScreen() {

  const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <Pressable
        style={[styles.item, { height: reservation.height }]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
        <Agenda items={events} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  }
});
