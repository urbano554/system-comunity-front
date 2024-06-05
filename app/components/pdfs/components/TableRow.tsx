/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
    fontSize: '10px'
  },
  members: {
    width: "8%",
    borderRightColor: borderColor,
  },
  name_and_lastname: {
    width: "40%",
    borderRightColor: borderColor,
  },
  ci: {
    width: "20%",
    borderRightColor: borderColor,
  },
  date: {
    width: "20%",
    borderRightColor: borderColor,
  },
  age: {
    width: "20%",
    borderRightColor: borderColor,
  },
});

const TableRow = ({ items = [] }) => {
  const rows = items.map(
    ({ firstname, lastname, ci, dateNacimiento, age }, index) => (
      <View style={styles.row} key={index}>
        <Text style={styles.members}>{index}</Text>
        <Text style={styles.name_and_lastname}>
          {firstname} y {lastname}
        </Text>
        <Text style={styles.ci}>{ci}</Text>
        <Text style={styles.date}>{dateNacimiento}</Text>
        <Text style={styles.age}>{age}</Text>
      </View>
    )
  );
  return <Fragment>{rows}</Fragment>;
};

export default TableRow;

// <Text>{index}</Text>
//         <Text>
//           {firstname} y {lastname}
//         </Text>
//         <Text>{ci}</Text>
//         <Text>{sexo}</Text>
//         <Text>{dateNacimiento}</Text>
//         <Text>{age}</Text>
//         <Text>N/A</Text>

//         <Text style={styles.members}>N° integrantes</Text>
//     <Text style={styles.name_and_lastname}>Nombre y apellido</Text>
//     <Text style={styles.dni}>N° cédula</Text>
//     <Text style={styles.date}>Fecha de nacimiento</Text>
//     <Text style={styles.age}>Edad</Text>
//     <Text>Parentesco</Text>
