import React, { Component } from "react";
const docx = require("docx");
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

export default class MagicButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "James"
        };
    }

    generate(){
        const doc = new Document();
        // const image1 = Media.addImage(doc, Uint8Array.from(atob(imageBase64Data), c => c.charCodeAt(0)));
    
        doc.addSection({
          children: [new Paragraph("Hello World")]
        //   children: [new Paragraph("Hello World"), new Paragraph(image1)]
        });
    
        Packer.toBlob(doc).then(blob => {
          console.log(blob);
          saveAs(blob, "example.docx");
          console.log("Document created successfully");
        });
      }
    
    render() {
        return (
            <div>
                <button onClick={this.generate}>BIG BUTTON</button>
            </div>
        );
    }
};