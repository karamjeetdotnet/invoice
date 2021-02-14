import logo from './logo.svg';
import './App.css';
// template: https://www.freshbooks.com/wp-content/uploads/2018/12/invoice-service-2-1.jpg
var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

// function inWords (num) {
//     if ((num = num.toString()).length > 9) return 'overflow';
//     n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
//     if (!n) return; var str = '';
//     str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
//     str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
//     str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
//     str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
//     str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
//     return str;
// }
function App() {
  return (
    <div className="container">
      <div className="bg-secondary">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="text-left text-light ml-4">Invoice</h1>
          </div>
          <div className="col-sm-6">
            <h5 className="text-right text-light mr-2">Invoice Id: {new Date().getTime()}</h5>
          </div>
        </div>
      </div>
      <div className="row">
<div className="col-sm-4">
<h1 className="text-uppercase">Grafix World</h1>
</div>
<div className="col-sm-8">
<h3 className="text-capitalize full-justify" style={{paddingTop: "15px"}}>one solution for all your printing needs</h3>
</div>  
      </div>
      <div className="row">
        <div className="col-sm-9">
        <table className="table mb-5">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Rate</th>
      <th scope="col">Qty</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6 X 4 - Nava Saal Vadhai - 24 Sq Ft</td>
      <td>11 /-</td>
      <td>1</td>
      <td>264 /-</td>
    </tr>
    <tr>
      <td>4 X 3 - Nava Saal Vadhai - 12 Sq Ft</td>
      <td>11 /-</td>
      <td>1</td>
      <td>132 /-</td>
    </tr>
  </tbody>
</table>
<div className="row">
  <div className="col-sm-6">

  </div>
  <div className="col-sm-6">
  <table className="table">
<tbody>
  <tr>
    <td style={{width: "60%"}}>Subtotal</td>
    <td style={{width: "40%"}}>2,000.00</td>
  </tr>
  <tr>
    <td>Tax</td>
    <td>0.00</td>
  </tr>
  <tr>
    <td>Total</td>
    <td>2,000.00</td>
  </tr>
  <tr>
    <td>Amount Paid</td>
    <td>0.00</td>
  </tr>
  <tr>
    <td><strong>Amount Due</strong></td>
    <td>2,000.00 INR</td>
  </tr>
</tbody>
</table>
  </div>
</div>
<div>
  <div style={{bottom: 0, position: "absolute"}}>
Make all the payments in favour of BHAGWANT SINGH
  </div>
</div>
          </div>
          <div className="col-sm-3">
          <div className="card mt-2">
  <div className="card-header">
    <h5>Amount Due(INR)</h5>
  </div>
  <div className="card-body">
    <div style={{fontSize: "2rem", fontWeight: "bold"}}>2,000 &#8377;</div>
  </div>
</div>
<div className="card mt-2">
  <div className="card-header">
    <h5>Billed To</h5>
  </div>
  <div className="card-body">
    <div>
      Client Name<br/>
      Street Address, <br/>
      City, State<br/>
      Zip Code
    </div>
  </div>
</div>
<div className="card mt-2">
  <div className="card-header">
    <h5>Invoice Number</h5>
  </div>
  <div className="card-body">
  {new Date().getTime()}
  </div>
</div>
<div className="card mt-2">
  <div className="card-header">
    <h5>Date of Issue</h5>
  </div>
  <div className="card-body">
  {new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}
  </div>
</div>
<div className="card mt-2">
  <div className="card-header">
    <h5>Due Date</h5>
  </div>
  <div className="card-body">
  {new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}
  </div>
</div>
          </div>
        </div>
    </div>
  );
}

export default App;
