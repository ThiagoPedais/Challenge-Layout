import React from 'react';
import ProductCard from '../../core/components/ProductCard';
import './style.scss';
const Catalog = () => {
  return (
    <section className="container main-section">
      <div className="container-catalog-nav">
        <div className="content-catalog-nav">          
          <input type="text" placeholder="Digite sua busca" />
          <div className="d-flex">
            <button className="btn btn-primary btn-icon-catalog">
                <h6>Buscar</h6>
            </button>
        </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
