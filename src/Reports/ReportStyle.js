import chitaleLogo from "../assets/images/chitaleLogo.jpg"
import * as table from './TableData'

export const pageBorder = (doc) => {
    doc.line(575, 10, 30, 10);//horizontal line 1
    doc.line(30, 830, 30, 10);//vertical left
    doc.line(575, 830, 30, 830);//horizontal bottom
    doc.line(575, 830, 575, 10);//vertical right 
}
export const pageHeder = (doc) => {
    doc.addImage(chitaleLogo, 'PNG', 250, 18, 65, 40);
    doc.setFont('Tahoma', 'Normal')
    doc.setFontSize(9)
    doc.text('CHITALE SWEETS & SNACKS PVT.LTD.', 32, 30)
    doc.text('Wholesale II - Anand', 32, 40)
    doc.text("2187, Sadashiv Peth , Anand Bungalow,Pune 411 030", 32, 50)
}
export const reportHeder1 = (doc) => {
    doc.line(285, 70, 30, 70);//horizontal line 1
    doc.line(285, 100, 30, 100);//horizontal bottom
    doc.line(30, 100, 30, 70);//vertical left
    doc.line(285, 100, 285, 70);//vertical right 

    doc.line(285, 70, 573, 70);//horizontal line 1
    doc.line(285, 100, 575, 100);//horizontal bottom
    doc.line(285, 100, 285, 70);//vertical left
    doc.line(575, 100, 575, 70);//vertical right 

    doc.text('GSTIN: Invoice Number:27AAAFC5288N1ZZ', 33, 80)
    doc.text('PAN:AAAFC5288N', 33, 92)
    doc.text('Invoice Number:21-22/WH214055', 288, 80)
    doc.text('Invoice Date: 15/01/2022 11:43:12 am', 288, 92)
}
export const reportHederR = (doc) => {
    doc.line(285, 15, 30, 15);//horizontal line 1
    doc.line(285, 45, 30, 45);//horizontal bottom
    doc.line(30, 45, 30, 15);//vertical left
    doc.line(285, 45, 285, 15);//vertical right 

    doc.line(285, 15, 573, 15);//horizontal line 1
    doc.line(285, 45, 575, 45);//horizontal bottom
    doc.line(285, 45, 285, 15);//vertical left
    doc.line(575, 45, 575, 15);//vertical right 
    doc.setFont('Tahoma', 'Normal')
    doc.setFontSize(9)

    doc.text('GSTIN: Invoice Number:27AAAFC5288N1ZZ', 33, 25)
    doc.text('PAN:AAAFC5288N', 33, 35)
    doc.text('Invoice Number:21-22/WH214055', 288, 25)
    doc.text('Invoice Date: 15/01/2022 11:43:12 am', 288, 35)
}
export const reportHeder2 = (doc) => {
    doc.line(285, 100, 30, 100);//horizontal line 1
    doc.line(285, 200, 30, 200);//horizontal bottom
    doc.line(30, 200, 30, 100);//vertical left
    doc.line(285, 200, 285, 100);//vertical right 

    doc.text('Name :Atharv Enterprises', 32, 110)
    doc.text('PAN:AAAFC5288N', 32, 122)
    doc.text('Address: Shop No.1,2,3, Fame Manor, Salunkhe Vihar Road,', 32, 134)
    doc.text('State: MAHARASHTRA', 32, 146)
    doc.text('GSTIN Number: 27AAZFA6806B1ZB', 32, 158)
    doc.text('FSSAINo :11514035000034v', 32, 170)
    doc.text('PANNO : AAZFA6806B', 32, 182)

    doc.line(285, 100, 575, 100);//horizontal line 1
    doc.line(285, 200, 575, 200);//horizontal bottom
    doc.line(285, 200, 285, 100);//vertical left
    doc.line(575, 200, 575, 100);//vertical right 

    doc.text('Vehicle No.: MH12 NX 2471', 287, 110)
    doc.text('Driver Name: Mahesh Ghodke', 287, 122)
    doc.text('PO No.: 35216', 288, 134)
    doc.text('Challan No.', 288, 146)
    doc.text('FSSAINo :11514035000034', 288, 158)
    doc.text('Ewaybill No.: 231382901616', 288, 170)
}

export const tableBody = (doc, data) => {
    var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
    var reportHead = function () {
        pageBorder(doc);
        if (!(doc.internal.getNumberOfPages() === 1)) {
            reportHederR(doc);
        }
    }
        var reportHead2 = function () {
            pageBorder(doc);
            if (!(doc.internal.getNumberOfPages() === 1)) {
                reportHederR(doc);
            }
        };
    
    var options = {
        beforePageContent: reportHead,
        margin: {
            top: 45, left: 30, right: 20,// bottom:100 
        },
        //pageBreak: 'avoid',
        // showHead:'always',
        theme: 'grid',
        headStyles: {
            textColor: "black",
            fillColor: "gray"
        },
        styles: {
            overflow: 'hidden',
            fontSize: 8,
            height: 50,
            // valign: 'middle'
        },
        columnStyles: {
            0: {
                valign: "top",
                columnWidth: 170,
            },
            1: {
                columnWidth: 50,
                // fontStyle: 'bold',
                halign: 'center',
                //  height:50,
            },
            2: {
                columnWidth: 32,
                // fontStyle: 'bold',
                halign: 'center',
            },
            3: {
                // columnWidth: 40,
                fontStyle: 'bold',
                halign: 'center',
            },
        },
        drawHeaderCell: function (cell, data) {
            if (cell.raw === 'ItemName') {//paint.Name header red
                cell.styles.fontSize = 15;
                cell.styles.textColor = [255, 0, 0];
            } else {
                cell.styles.textColor = 255;
                cell.styles.fontSize = 10;
            }
        },
        createdCell: function (e, data) {
            //   cell.styles.fillColor = '#ffffff';
        },
        //      styles: { halign: 'center' },
        //    headStyles: { Color: [0, 0, 0] },
        //     alternateRowStyles: { fillColor: [231, 215, 252] },
        tableLineColor: "black",
        // tableLineWidth: 0.01,

        startY: doc.autoTableEndPosY() + 201,// 45,
    };
    var options1 = {
        beforePageContent: reportHead2,
        margin: {
            top: 45, left: 30, right: 20,// bottom:100 
        },
        theme: 'grid',
        headStyles: {
            textColor: "black",
            fillColor: "yellow"
        },
        styles: {
            overflow: 'hidden',
            fontSize: 8,
            height: 50,
            // valign: 'middle'
        },
    }
    doc.autoTable(table.columns, table.Rows(data), options);
    doc.autoTable(table.columns1, table.Rows1(data), options1);

}
export const reportFooter = (doc) => {
    doc.line(575, 710, 30, 710);//horizontal line 1
    doc.line(575, 725, 30, 725);//horizontal line 2
    doc.line(575, 745, 30, 745);//horizontal line 3
    doc.line(575, 760, 30, 760);//horizontal line 4
    doc.line(575, 790, 30, 790);//horizontal line 5

    // doc.line(285, 200, 30, 200);//horizontal bottom
    doc.line(400, 745, 400, 710);//vertical midle
    // doc.line(285, 200, 285, 100);//vertical right 

    doc.text('Total GST:1,32,031.95', 410, 720)
    doc.setFontSize(12)
    doc.text('Total Amount:11,94,031.95', 410, 740)

}
export const pageFooter = (doc) => {
    let finalY = doc.previousAutoTable.finalY;
    if (finalY > 675) {
        doc.addPage();
        pageBorder(doc)
        reportFooter(doc)
    }//else {   reportHederR(doc);  }
    const pageCount = doc.internal.getNumberOfPages()

    doc.setFont('helvetica', 'italic')
    doc.setFontSize(10)
    for (var i = 1; i <= pageCount; i++) {
        doc.setPage(i)
        doc.text('Page ' + String(i) + ' of ' + String(pageCount), doc.internal.pageSize.width / 10, 828, {
            align: 'center'
        })
        console.log("aaa", doc.internal.pageSize.height)
    }
}