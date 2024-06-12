import Button from "~/components/button";
import Container from "~/components/container";
import NavAdmin from "~/components/nav-admin";
import "./index.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "@remix-run/react";
import { request } from "~/services/request";
import { GET_JEFE, GetJefe } from "~/services/jefe";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResidenceLetterPdf from "~/components/pdfs/ResidenceLetterPdf";
import { GET_MIEMBRO, GetMiembro } from "~/services/miembro";

const initialvalues = {
  firstname: "",
  lastname: "",
  phone: "",
  address: "",
  ci: "",
  numberHome: "",
  street: "",
  typeDocument: "",
  sexo: "",
  numberBuy: "",
  discapacity: "",
  dateNacimiento: "",
  age: "",
};

const singleMiembroInitialvalues = {
  firstname: "",
  lastname: "",
  phone: "",
  age: "",
  dateNacimiento: "",
  ciJefeFamily: "",
  discapacity: "",
  ci: "",
  sexo: "",
};

const ResidenceLetter = () => {
  const [values, setValues] = useState(initialvalues);
  const [singleMiembroData, setSingleMiembro] = useState(
    singleMiembroInitialvalues
  );
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      if (searchParams.get("idJefe") === null) {
        //eslint-disable-next-line
        //@ts-ignore
        setValues(null);
        return;
      }
      const [, data] = await request<GetJefe>(GET_JEFE, {
        id: searchParams.get("idJefe") ?? "",
      });
      if (data?.data.getJefe) {
        const { ...input } = data.data.getJefe;
        setValues({ ...input });
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (searchParams.get("idMiembro") === null) return;
      const [, data] = await request<GetMiembro>(GET_MIEMBRO, {
        id: searchParams.get("idMiembro") ?? "",
      });
      if (data?.data.getMiembro) {
        const { ...input } = data.data.getMiembro;
        setSingleMiembro({
          ...input,
        });
      }
    };
    getData();
  }, []);

  return (
    <Container>
      <NavAdmin />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <PDFDownloadLink
          document={
            //eslint-disable-next-line
            //@ts-ignore
            <ResidenceLetterPdf data={values === null ? singleMiembroData ?? [] : values ?? []} />
          }
          fileName="carta_de_residencia.pdf"
        >
          <Button color="primary" size="lg">
            DESCARGAR PDF
          </Button>
        </PDFDownloadLink>
      </div>
    </Container>
  );
};

export default ResidenceLetter;
