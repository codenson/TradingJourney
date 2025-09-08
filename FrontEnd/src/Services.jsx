import "./styles/Services.css";

function Services() {
  return (
    <div className="services-wrapper">
      <div className="services-card">
        <section className="services-hero">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">
            Empowering day traders with AI-driven insights and personalized
            support.
          </p>
        </section>

        <section className="services-list">
          <div className="service-card">
            <h2 className="service-title">AI-Powered Trading Analysis</h2>
            <p className="service-desc">
              Our platform leverages advanced AI to analyze your trading
              activities, helping you make smarter decisions, track your
              performance, and refine your strategies. Whether you are a
              beginner or an experienced trader, our tools are designed to
              support your journey toward consistent profitability.
            </p>
          </div>

          <div className="service-card">
            <h2 className="service-title">Comprehensive Trading Tools</h2>
            <p className="service-desc">
              Access real-time market data, advanced charting tools, and
              personalized trading strategies. Our suite of features is built to
              enhance your trading experience and give you a competitive edge in
              the market.
            </p>
          </div>

          <div className="service-card">
            <h2 className="service-title">
              Psychological & Behavioral Insights
            </h2>
            <p className="service-desc">
              We offer personalized analysis of your trading activities,
              including a deep dive into the psychological aspects that may be
              influencing your results. Our AI helps you identify patterns and
              behaviors that could be holding you back, providing actionable
              insights to overcome the psychological barriers that often lead to
              defeated trading.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
