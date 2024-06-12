import { useEffect, useState } from "react";
import { useSearchParams } from "@remix-run/react";
import { GET_JEFE, GetJefe } from "~/services/jefe";
import { request } from "~/services/request";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MigrationLetterPdf from "~/components/pdfs/MigrationLetterPdf";
import Button from "~/components/button";
import {
  GET_MIEMBRO,
  GET_MIEMBROS,
  GetMiembro,
  GetMiembros,
} from "~/services/miembro";
import Container from "~/components/container";
import NavAdmin from "~/components/nav-admin";

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

const MigrationLetter = () => {
  const [values, setValues] = useState(initialvalues);
  const [listFamily, setlistFamily] = useState(null);
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

    const getMiembrosJefe = async () => {
      const [, data] = await request<GetMiembros>(GET_MIEMBROS, {
        ciJefe: searchParams.get("ciJefe") ?? "",
      });
      console.log("data getMiembros", data);
      //eslint-disable-next-line
      //@ts-ignore
      setlistFamily(data.data.getMiembros);
    };
    getMiembrosJefe();
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
            <MigrationLetterPdf
              data={values === null ? singleMiembroData ?? [] : values ?? []}
              list_family={values === null ? null : listFamily}
            />
          }
          fileName="carta_migratoria.pdf"
        >
          <Button color="primary" size="lg">
            DESCARGAR PDF
          </Button>
        </PDFDownloadLink>
      </div>
    </Container>
  );
};

export default MigrationLetter;
