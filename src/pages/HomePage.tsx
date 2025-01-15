

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stores';
import { increment, decrement } from '../stores/slices/counterSlice';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="container py-5">
      <Helmet>
        <title>Home Page - Webpack React Redux TypeScript Starter</title>
      </Helmet>

      {/* Hero Section */}
      <div className="row text-center mb-5">
        <div className="col-12">
          {/* Title */}
          <h1 className="display-4 text-primary">
            Webpack React Redux TypeScript Starter
          </h1>

          {/* Description */}
          <p className="lead text-muted">
            A modern starter template for building React applications with Redux, TypeScript, and Bootstrap 5.
          </p>
        </div>
      </div>

      {/* Counter Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Counter</h2>
            <div className="d-flex justify-content-center gap-3">
              <button
                className="btn btn-primary"
                onClick={handleIncrement}
              >
                Increment
              </button>
              <p className="fs-4 fw-bold">{counter}</p>
              <button
                className="btn btn-danger"
                onClick={handleDecrement}
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="row justify-content-center mt-4">
        <div className="col-12 text-center">
          <a
            href="#"
            className="btn btn-dark d-inline-flex align-items-center gap-2"
          >
            Visit GitHub
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
