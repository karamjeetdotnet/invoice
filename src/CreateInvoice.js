import React from 'react';
function CreateInvoice() {
    return <div className="container">
        <form>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea className="form-control" id="description" placeholder="Description"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-4">
      <label for="inputRate">Rate</label>
      <input type="number" id="inputRate" className="form-control"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputQty">Qty</label>
      <input type="number" id="inputQty" className="form-control"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputAmount">Amount</label>
      <input type="number" id="inputAmount" className="form-control"/>
    </div>
  </div>
  <fieldset>
  <legend>Client Information:</legend>
  <div className="form-group">
    <label for="inputName">Name</label>
    <input type="text" className="form-control" id="inputName" placeholder="Dreamzalive"/>
  </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <input type="text" className="form-control" id="inputState"/>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  </fieldset>
</form>
    </div>
}

export default CreateInvoice;