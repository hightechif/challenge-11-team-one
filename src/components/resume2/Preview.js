import React from "react";
import "../../style/Resume2.css";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  BlobProvider,
  Font,
} from "@react-pdf/renderer";
import { connect } from "react-redux";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});
// Create styles
const styles = StyleSheet.create({
  // KERANGKA
  page: {
    flexDirection: "row",
    backgroundColor: "#084C41",
    width: "40%",
  },
  pageKanan: {
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
    height: "100%",
    width: "60%",
  },

  kiri: {
    left: 20,
    right: 50,
    color: "white",
    flexDirection: "column",
    backgroundColor: "",
    // padding: 30,
    height: "100%",
    width: "50%",
  },
  kanan: {
    margin: 20,
    padding: 20,
    flexGrow: 1,
  },

  // ITEMS
  name: {
    fontSize: 20,
    fontWeight: "extrabold",
    fontFamily: "Times-Roman",
    marginTop: 40,
    lineHeight: 1,
  },
  nameLast: {
    fontSize: 20,
    fontWeight: "extrabold",
    fontFamily: "Times-Roman",
    lineHeight: 1,
  },

  Details: {
    fontSize: 12,
    fontWeight: "extrabold",
    fontFamily: "Oswald",
    lineHeight: 1,
    marginTop: 20,
    left: 5,
  },

  IsiDetails: {
    fontSize: 7,
    fontWeight: "extrabold",
    fontFamily: "Oswald",
    lineHeight: 1,
    marginTop: 10,
    left: 5,
  },

  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

// Create Document Component
// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>First Name :</Text>
//         <Text>Last Name :</Text>
//         <Text>Address :</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>firstname</Text>
//         <Text>lastname</Text>
//         <Text>Address</Text>
//       </View>
//     </Page>
//   </Document>
// );

const pdfViewer = (props) => (
  <div>
    <div className="atas ">
      <BlobProvider
        document={
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.kiri}>
                <Text style={styles.name}>{props.data.firstName}</Text>
                <Text style={styles.nameLast}>{props.data.lastName}</Text>
                <Text style={styles.Details}>Details</Text>
                <Text style={styles.IsiDetails}>{props.data.email}</Text>
                <Text style={styles.IsiDetails}>{props.data.phone}</Text>
                <View>
                  <Text style={styles.IsiDetails}>{props.data.address}</Text>
                </View>
                <View>
                  <Text style={styles.IsiDetails}>{props.data.address2}</Text>
                </View>
                <Text style={styles.IsiDetails}>{props.data.city}</Text>
                <Text style={styles.IsiDetails}>{props.data.state}</Text>
                <Text style={styles.IsiDetails}>{props.data.zipCode}</Text>

                <Text style={styles.Details}>Links</Text>
                <View>
                  <Text style={styles.IsiDetails}>{props.data.webLinks}</Text>
                </View>
                <View>
                  <Text style={styles.IsiDetails}>{props.data.webLinks2}</Text>
                </View>
              </View>

              <View style={styles.pageKanan}>
                <Text style={styles.Details}>Profesional Summary</Text>

                <Text style={styles.IsiDetails}>{props.data.profSummary}</Text>
                <Text style={styles.Details}>Educations</Text>
                <Text style={styles.IsiDetails}>
                  {props.education.from} - {props.education.to}
                </Text>
                <Text style={styles.IsiDetails}>{props.education.school}</Text>
                <Text style={styles.IsiDetails}>{props.education.degree}</Text>
                <Text style={styles.Details}>Experiences</Text>
                <Text style={styles.IsiDetails}>
                  {props.experience.from} - {props.experience.to}
                </Text>
                <Text style={styles.IsiDetails}>
                  {props.experience.position}
                </Text>
                <Text style={styles.IsiDetails}>
                  {props.experience.company}
                </Text>

                <Text style={styles.IsiDetails}>
                  {props.experience.description}
                </Text>
              </View>
            </Page>
          </Document>
        }
      >
        {({ url }) => (
          <iframe src={url} style={{ width: "107%", height: "80%" }} />
        )}
      </BlobProvider>
    </div>

    <div className="buttonDL">
      <PDFDownloadLink
        document={
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.kiri}>
                <Text style={styles.name}>{props.data.firstName}</Text>
                <Text style={styles.nameLast}>{props.data.lastName}</Text>
                <Text style={styles.Details}>Details</Text>
                <Text style={styles.IsiDetails}>{props.data.email}</Text>
                <Text style={styles.IsiDetails}>{props.data.phone}</Text>
                <View>
                  <Text style={styles.IsiDetails}>{props.data.address}</Text>
                </View>
                <View>
                  <Text style={styles.IsiDetails}>{props.data.address2}</Text>
                </View>
                <Text style={styles.IsiDetails}>{props.data.city}</Text>
                <Text style={styles.IsiDetails}>{props.data.state}</Text>
                <Text style={styles.IsiDetails}>{props.data.zipCode}</Text>

                <Text style={styles.Details}>Links</Text>
                <View>
                  <Text style={styles.IsiDetails}>{props.data.webLinks}</Text>
                </View>
                <View>
                  <Text style={styles.IsiDetails}>{props.data.webLinks2}</Text>
                </View>
              </View>

              <View style={styles.pageKanan}>
                <Text style={styles.Details}>Profesional Summary</Text>
                <Text style={styles.IsiDetails}>{props.data.profSummary}</Text>
                <Text style={styles.Details}>Educations</Text>
                <Text style={styles.IsiDetails}>
                  {props.education.from} - {props.education.to}
                </Text>
                <Text style={styles.IsiDetails}>{props.education.school}</Text>
                <Text style={styles.IsiDetails}>{props.education.degree}</Text>
              </View>
            </Page>
          </Document>
        }
        fileName="download.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#fff",
          backgroundColor: "#0275d8",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    data: state.data,
    education: state.education,
    experience: state.experience,
  };
};

export default connect(mapStateToProps)(pdfViewer);
