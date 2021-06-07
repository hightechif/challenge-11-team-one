// import React, { Component } from 'react'
// import firebase from '../../services/firebase'
// import { Form, Col, FormControl } from "react-bootstrap";
// import classes from '../../style/Profpic.module.css'
// import { connect } from "react-redux";
// import { saveProfpic } from "../../redux/actions/profpic.actions";

// class Uploader extends Component {
//     state = {
//         file: null,
//         image:null
//     }

//     handleSubmit = async (event) => {
//         event.preventDefault()
//         const {file} = this.state

//         // upload file
//         try {
//             const res = await firebase.storage().ref(`profpic/${file.name}`).put(file);
//             // console.log(res);
//             alert('file uploaded')
//         } catch(error) {
//             // console.log(error)
//             alert('file upload error')
//         }
//     };

//     handleFileChange = event => {
//         const file = event.target.files[0]
//         this.setState({
//             file
//         })
//         const reader = new FileReader()
//         reader.addEventListener('load',() => {
//             this.setState({
//                 image:reader.result
//             })
//         }, false)

//         if(file.type.includes('image/')){
//             reader.readAsDataURL(file)
//         }
//     }

//     render() {
//         const {file, image} = this.state
//         // console.log(image)

//         return (
//             <>
//                 {/* {!!image && (<img className="w-50 text-center" src={image} />) } */}
//                 <Form inline onSubmit={this.handleSubmit}>
//                     <div className="Form-control">
//                         <input type="file" onChange={this.handleFileChange} placeholder="Upload Your Photo" />
//                         <button type="submit" class="btn btn-primary ">
//                         Upload Photo
//                         </button>
//                     </div>
//                 </Form>
//             </>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         pic: state.profpic
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         saveProfpic: (data) => dispatch(saveProfpic(data)),
//     };
//   };

//   export default connect(mapStateToProps, mapDispatchToProps)(Uploader);
