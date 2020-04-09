import React from 'react';

import Layout from './components/layout/layout.comp';
import ConnectChart from './components/connected-chart/connected-chart.comp';
import SecondChart from './components/second-chart/second-chart.comp';
import ThirdChart from './components/third-chart/third-chart.comp';

const App = () => (
  <Layout>
    <ConnectChart />
    <SecondChart />
    <ThirdChart />
  </Layout>
);

export default App;
