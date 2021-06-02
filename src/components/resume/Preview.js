import React, { Component } from "react";
import "../../style/Resume.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default class Preview extends Component {
  render() {
    return (
      <div className="section2 sticky-top">
        <div className="headerSection2">
          <div className="check_tasks">
            <i className="fas fa-check-circle"></i> {"Saved "}
          </div>
          <div className="pagination">
            <button>
              <i className="fas fa-angle-left"></i>
            </button>

            <div className="text_pages">
              <p>1 / 3</p>
            </div>

            <button>
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
          <div className="button-close">
            <button>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        <div className="mainSection2">
          <div className="mainLeft"></div>
          <div className="mainRight"></div>
        </div>

        <div className="buttom-section2">
          <div className="buttom-left">
            <Button>
              <i className="fas fa-palette fa-2x"></i> Choose Template
            </Button>
          </div>
          <div className="buttom-right">
            <Button>
              <i className="far fa-file-pdf fa-2x"></i> Download
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
