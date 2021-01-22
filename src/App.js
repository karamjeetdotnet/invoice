import logo from './logo.svg';
import './App.css';
// template: https://www.freshbooks.com/wp-content/uploads/2018/12/invoice-service-2-1.jpg
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
        <span className="text-uppercase">Grafix World</span><span className="text-capitalize">one solution for all your printing needs</span>
      </div>
      <div className="row">
        <div className="col-sm-9">
        <table class="table">
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
