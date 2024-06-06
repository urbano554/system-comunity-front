/* eslint-disable react/prop-types */
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  section: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    flexGrow: 1,
  },
});

//eslint-disable-next-line
//@ts-ignore
// eslint-disable-next-line react/prop-types
const ResidenceLetterPdf = ({ data }) => {
  return (
    <Document style={{ height: 100 }}>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            border: "1px solid black",
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 15,
            ...styles.section,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            <Text>REPUBLICA BOLIVARIANA DE VENEZUELA</Text>
            <Text>CONSEJO COMUNAL `` NUESTRA SEÑORA DE LA CHIQUINQUIRA ``</Text>
            <Text>PARROQUIA PUNTA CARDON</Text>
            <Text>MUNICIPIO CARIRUBANA ESTADO FALCON</Text>
          </View>

          <Text style={{ fontWeight: "bold", fontSize: "14px" }}>
            CARTA DE RESIDENCIA
          </Text>

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
              Quienes suscribimos voceros, del Consejo Comunal NUESTRA SEÑORA DE
              LA CHIQUINQUIRÁ, sector Puerta Maraven, Parroquia Punta Cardón,
              Estado Falcón.
            </Text>

            <Text
              style={{
                marginTop: "10px",
                textAlign: "justify",
                fontSize: "12px",
              }}
            >
              Hacemos Constar que el Ciudadano (a)
              <Text style={{ textDecoration: "underline" }}>
                {data.firstname} {data.lastname}
              </Text>
              , mayor de edad, portador(a) de la cédula de identidad N°{" "}
              <Text style={{ textDecoration: "underline" }}>{data.ci}</Text>, de
              estado civil ________________________, residenciado(a) en{" "}
              <Text style={{ textDecoration: "underline" }}>
                {data.address}
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
              Ciudad de Punto fijo a los _______________ días del mes de
              ______________ del año dos mil _____________
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

            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "10px",
                  marginTop: "20px",
                }}
              >
                SELLO
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResidenceLetterPdf;
