import styles from './Analytics.module.css';

function Analytics() {
  return (
    <div className={styles.container}>
      <h2 style={{ marginTop: '60px' }}>
        The below part makes up the internal analytics charting
      </h2>
      <p>
        By using mongoDB charts one can easily setup new dashboards for your
        apps analytics.
      </p>
      <div className={styles.chartsContainer}>
        <p>Refreshes every 10s</p>
        <iframe
          title="mongoChart"
          style={{
            background: '#FFFFFF',
            border: 'none',
            borderRadius: '2px',
            boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
          }}
          width="640"
          height="480"
          src="https://charts.mongodb.com/charts-dev-to-hackathon-flbpa/embed/charts?id=92c1fae7-fff1-422d-bc65-756e3dff040a&maxDataAge=60&theme=light&autoRefresh=true"
        ></iframe>
      </div>
    </div>
  );
}

export default Analytics;
