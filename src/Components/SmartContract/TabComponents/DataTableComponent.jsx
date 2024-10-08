import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import DataTable from "datatables.net-dt";
import '../Smartcontract.css'

const Transaction = () => {
  useEffect(() => {
    // Check if the DataTable is already initialized and destroy it if needed
    if ($.fn.DataTable.isDataTable("#myTable")) {
      $('#myTable').DataTable().destroy();
    }

    

    // Initialize DataTable
    const table = $('#myTable').DataTable({
      data: exampleData,
      columns: [
        { title: "Address" },
        { title: "Action" },
        { title: "Txn Hash" },
        { title: "Time" },
        { title: "Value" },
        { title: "Token Price" }
      ],
      destroy: true,  // Allow reinitialization
      responsive: false,
      drawCallback: function () {
        // Add custom class to the select dropdown
        $('select').addClass('custom-dropdown');
        $('table').addClass('myDataTable')
      }
    });

    // Cleanup on component unmount
    return () => {
      table.destroy();  // Destroy DataTable when the component unmounts
    };
  }, []);

  const exampleData = [
    [
      `<div><i class="fas fa-eye"></i> <a href="#">0x7fa075e389...</a> <button class="copy-btn"><i class="fas fa-copy"></i></button></div>`,
      '<button class="buy-btn">Buy Tokens</button>',
      '<a href="#">20889338</a>',
      '3 days ago',
      '0.00095 ETH',
      '0.00019781'
    ],
    [
      `<div><i class="fas fa-eye"></i> <a href="#">0x490623da6...</a> <button class="copy-btn"><i class="fas fa-copy"></i></button></div>`,
      '<button class="buy-btn">Buy Tokens</button>',
      '<a href="#">20889164</a>',
      '3 days ago',
      '0.00625 ETH',
      '0.00056687'
    ],
    [
      `<div><i class="fas fa-eye"></i> <a href="#">0xf3e088c6da4...</a> <button class="copy-btn"><i class="fas fa-copy"></i></button></div>`,
      '<button class="buy-btn">Buy Tokens</button>',
      '<a href="#">20882538</a>',
      '4 days ago',
      '0.029 ETH',
      '0.00056108'
    ],
    [
      `<div><i class="fas fa-eye"></i> <a href="#">0x81e61ec2be...</a> <button class="copy-btn"><i class="fas fa-copy"></i></button></div>`,
      '<button class="buy-btn">Buy Tokens</button>',
      '<a href="#">20879892</a>',
      '4 days ago',
      '0.3145 ETH',
      '0.00321612'
    ],
    [
      `<div><i class="fas fa-eye"></i> <a href="#">0x4576cbdb0b...</a> <button class="copy-btn"><i class="fas fa-copy"></i></button></div>`,
      '<button class="buy-btn">Buy Tokens</button>',
      '<a href="#">20879594</a>',
      '4 days ago',
      '0.04 ETH',
      '0.00308523'
    ]
    // Add more rows as necessary
  ];

  return (
    <div>
      <table id="myTable" className="display" style={{ width: "100%" }}></table>
    </div>
  );
};

export default Transaction;
