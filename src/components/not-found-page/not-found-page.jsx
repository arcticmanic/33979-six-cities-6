import React from 'react';
import Header from '../header/header';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main">
          <div className="container">
            <h1>404 Not Found</h1>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default NotFoundPage;
