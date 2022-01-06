import styles from './Analytics.module.css';

function Analytics() {
  return (
    <div className={styles.container}>
      <h2 style={{ marginTop: '60px' }}>Let's look at all the analytics!</h2>
      <p>
        By using mongoDB charts one can easily setup new dashboards for your
        apps analytics. Both internally and externally.
      </p>
      <div className={styles.chartsContainer}>
        <p>Refreshes every 10s</p>
        <iframe
          title="mongoChart1"
          className={styles.chart}
          width="640"
          height="480"
          src="https://charts.mongodb.com/charts-dev-to-hackathon-flbpa/embed/charts?id=92c1fae7-fff1-422d-bc65-756e3dff040a&maxDataAge=60&theme=light&autoRefresh=true"
        ></iframe>

        <iframe
          title="mongoChart2"
          className={styles.chart}
          width="640"
          height="480"
          src="https://charts.mongodb.com/charts-dev-to-hackathon-flbpa/embed/charts?id=df4874f2-8277-4dc7-a64b-51517e173b0c&maxDataAge=10&theme=light&autoRefresh=true"
        ></iframe>

        <iframe
          title="mongoChart3"
          className={styles.chart}
          width="640"
          height="480"
          src="https://charts.mongodb.com/charts-dev-to-hackathon-flbpa/embed/charts?id=077d4de1-7f75-44af-bf45-9ef7718e0ec4&maxDataAge=10&theme=light&autoRefresh=true"
        ></iframe>

        <iframe
          title="mongoChart4"
          className={styles.chart}
          width="640"
          height="480"
          src="https://charts.mongodb.com/charts-dev-to-hackathon-flbpa/embed/charts?id=e2f2488e-ca08-427d-8290-ab2210abf23f&maxDataAge=10&theme=light&autoRefresh=true"
        ></iframe>
      </div>
    </div>
  );
}

export default Analytics;
