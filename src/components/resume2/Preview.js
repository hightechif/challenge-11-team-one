import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  BlobProvider,
} from "@react-pdf/renderer";
import { connect } from "react-redux";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 20,
    padding: 20,
    flexGrow: 1,
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

// email: "",
// phone: "",
// address: "",
// address2: "",
// city: "",
// state: "",
// zipCode: "",
const pdfViewer = (props) => (
  <div style={{ height: "100%" }}>
    <BlobProvider
      document={
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>First Name </Text>
              <Text>Last Name </Text>
              <Text>Email </Text>
              <Text>Address </Text>
              <Text>Address 2 </Text>
              <Text>City </Text>
              <Text>State </Text>
              <Text>Zip Code </Text>
            </View>
            <View style={styles.section}>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
            </View>
            <View style={styles.section}>
              <Text>{props.data.firstName}</Text>
              <Text>{props.data.lastName}</Text>
              <Text>{props.data.email}</Text>
              <Text>{props.data.address}</Text>
              <Text>{props.data.address2}</Text>
              <Text>{props.data.city}</Text>
              <Text>{props.data.state}</Text>
              <Text>{props.data.zipCode}</Text>
              <Text>
                <ul>
                  {props.skill.skills.map((skill, list) => (
                    <li key={list}>{skill}</li>
                  ))}
                </ul>
              </Text>
            </View>
          </Page>
        </Document>
      }
    >
      {({ url }) => (
        <iframe src={url} style={{ width: "100%", height: "95%" }} />
      )}
    </BlobProvider>
    <PDFDownloadLink
      document={
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>First Name </Text>
              <Text>Last Name </Text>
              <Text>Email </Text>
              <Text>Address </Text>
              <Text>Address 2 </Text>
              <Text>City </Text>
              <Text>State </Text>
              <Text>Zip Code </Text>
            </View>
            <View style={styles.section}>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
              <Text>:</Text>
            </View>
            <View style={styles.section}>
              <Text>{props.data.firstName}</Text>
              <Text>{props.data.lastName}</Text>
              <Text>{props.data.email}</Text>
              <Text>{props.data.address}</Text>
              <Text>{props.data.address2}</Text>
              <Text>{props.data.city}</Text>
              <Text>{props.data.state}</Text>
              <Text>{props.data.zipCode}</Text>
              <Text>
                <ul>
                  {props.skills.map((skill, list) => (
                    <li key={list}>{skill}</li>
                  ))}
                </ul>
              </Text>
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
        loading ? "Loading document..." : "Download Now!"
      }
    </PDFDownloadLink>
  </div>
);

const mapStateToProps = (state) => {
  return {
    data: state.data,
    skill: state.skill,
  };
};

export default connect(mapStateToProps)(pdfViewer);
