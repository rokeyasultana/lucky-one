import React from 'react';

const SelectedProduct = (props) => {
    const { choseOne, emptyItem } = props;
    return (
        <div className="text-center">
      <button
        onClick={() => choseOne()}
        className=" text-black mb-3 btn btn-outline-primary"
      >
        <p>Chose One</p>
      </button>
      <br />
      <button onClick={emptyItem} className="text-black  btn btn-outline-primary">
    Reset
      </button>
    </div>
    );
};

export default SelectedProduct;