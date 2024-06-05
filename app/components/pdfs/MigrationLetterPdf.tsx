/* eslint-disable react/prop-types */
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 600,
  },
  section: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    padding: 10,
    flexGrow: 1,
  },
});

//eslint-disable-next-line
//@ts-ignore
// eslint-disable-next-line react/prop-types
const MigrationLetterPdf = ({ data, list_family = [] }) => {
  return (
    <Document>
      <Page size="A3" style={styles.page}>
        <View
          style={{
            border: "1px solid black",
            width: "75%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 15,
            ...styles.section,
          }}
        >
          <Text>REPUBLICA BOLIVARIANA DE VENEZUELA</Text>
          <Text>CONSEJO COMUNAL `` NUESTRA SEÑORA DE LA CHIQUINQUIRA ``</Text>
          <Text>PARROQUIA PUNTA CARDON</Text>
          <Text>MUNICIPIO CARIRUBANA ESTADO FALCON</Text>

          <Text style={{ fontWeight: "bold" }}>CARTA MIGRATORIA</Text>

          <View
            style={{
              padding: 50,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 15,
            }}
          >
            <Text style={{ textAlign: "justify", fontSize: "12px" }}>
              Por medio de la presente, nosotros los abajo firmantes civilmente
              hábiles, integrantes, activos y representantes del consejo comunal{" "}
              <Text style={{ fontWeight: "bold" }}>
                NUESTRA SEÑORA DE LA CHIQUINQUIRA
              </Text>{" "}
              ubicados en la Puerta Maraven, Punto Fijo, Estado Falcón, hacemos
              constatar que el (la) ciudadano(a){" "}
              <Text style={{ textDecoration: "underline" }}>
                {data.firstname} {data.lastname}
              </Text>
              , Venezolano, mayor de edad, portador de la cédula de identidad:{" "}
              <Text style={{ textDecoration: "underline" }}>{data.ci}</Text>
            </Text>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 24,
                borderWidth: 1,
                borderColor: "#bff0fd",
              }}
            >
              <TableHeader />
              <TableRow items={list_family} />
            </View>

            <Text style={{ textAlign: "justify", fontSize: "12px" }}>
              Residían en esta comunidad en la{" "}
              <Text style={{ textDecoration: "underline" }}>
                {data.address}
              </Text>
              , motivado a ello solicitan el presente documento por trasladarse
              hacia {data.street},en la fecha: ___________ por tanto, declaramos
              que apartir de la presente fecha, deja de ser{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                RESIDENTES Y HABITANTES DE ESTA COMUNIDAD
              </Text>
              , razón por la cual será excluidos de nuestro censo, por ende, ya{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                NO RECIBIRAN BENEFICIOS DE NINGUNA INDOLE.
              </Text>
            </Text>

            <Text
              style={{
                textAlign: "justify",
                marginTop: 20,
                fontSize: "12px",
              }}
            >
              Constancia que se expide a solicitud de parte interesada, en la
              Puerta Maraven a los _______________ días del mes de
              ______________ de 2024.
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "12px",
                gap: 80,
                marginTop: 200,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text>_____________________________</Text>
                <Text>Vocero(a) del Comité Ejecutivo</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text>_____________________________</Text>
                <Text>Vocero(a) de Contraloria</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MigrationLetterPdf;

{
  /* <View style={{ fontSize: "12px" }}>
<View
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  }}
>
  {list_family?.map(
    (
      { id, firstname, lastname, ci, sexo, dateNacimiento, age },
      index
    ) => (
      <View
        key={id}
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Text>{index}</Text>
        <Text>
          {firstname} y {lastname}
        </Text>
        <Text>{ci}</Text>
        <Text>{sexo}</Text>
        <Text>{dateNacimiento}</Text>
        <Text>{age}</Text>
        <Text>N/A</Text>
      </View>
    )
  )}
</View>
</View> */
}
