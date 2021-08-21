import React, { Component } from "react";
import Dropzone from "react-dropzone";
import ErrorDialog from "./errordialog";

class FileDrop extends Component {
  state = { showModal: false, errorString: "" };
  onDrop = (acceptedFiles) => {
    var formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    this.setState({ showModal: false, errorString: "" });
    fetch("/api/v1/parser/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        if (response && response.error) {
          this.setState({ showModal: true, errorString: response.message });
          return;
        }

        if (response.content && response.content.length > 0) {
          var strCSV = '"Datum";"Wert";"Buchungswährung";"Typ";"Notiz"\n';
          var cont = response.content;
          for (var i = 0; i < cont.length; i++) {
            strCSV += '"' + cont[i].date + '";"' + cont[i].amount + '";"' + cont[i].currency + '";"' + cont[i].type + '";"' + '"\n';
          }
          const element = document.createElement("a");
          const file = new Blob([strCSV], { type: "text/plain" });
          element.href = URL.createObjectURL(file);
          element.download = "export.csv";
          document.body.appendChild(element); // Required for this to work in FireFox
          element.click();
        }
      })
      .catch((error) => {
        this.setState({ showModal: true, errorString: error + "" });
      });
  };

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <ErrorDialog show={this.state.showModal} errorStr={this.state.errorString} handleClose={() => this.handleCloseModal()}></ErrorDialog>
        <Dropzone onDrop={this.onDrop}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <section>
              <div className="box" {...getRootProps()}>
                <input {...getInputProps()} />
                <img alt="" src="/img/upload.png" width="128" height="128" />
                <p>{isDragActive ? "Upload file!" : "Drag 'n' drop some files here, or click to select files"}</p>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    );
  }
}

export default FileDrop;
