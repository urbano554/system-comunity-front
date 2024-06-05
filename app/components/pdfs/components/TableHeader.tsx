import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    backgroundColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
    fontSize: '10px'
  },
  members: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  name_and_lastname: {
    width: "35%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  dni: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  date: {
    width: "25%",
  },
  age: {
    width: "5%",
  },
});

const TableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.members}>N° integrantes</Text>
    <Text style={styles.name_and_lastname}>Nombre y apellido</Text>
    <Text style={styles.dni}>N° cédula</Text>
    <Text style={styles.date}>Fecha de nacimiento</Text>
    <Text style={styles.age}>Edad</Text>
  </View>
);

export default TableHeader;
