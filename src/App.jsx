import "./App.css";

function App() {
  return (
    <div className="pricing-container">
      <article className="pricing-card">
        <h3>Essential</h3>
        <div>Essential features</div>
        <div className="pricing-card__price--original">
          <s>$59.99</s>
        </div>
        <div className="pricing-card__price">$54.99</div>
        <div className="period">/ month</div>
        <ul>
          <li>Basic access to content and resources.</li>
          <li>Email support with a 48-hour response time.</li>
          <li>Access to community forums for peer-to-peer support.</li>
          <li>Monthly newsletter with updates and tips.</li>
          <li>Limited access to standard tools and features.</li>
        </ul>
        <a className="enroll" href="#">
          Choose Basic
        </a>
      </article>
      <article className="pricing-card">
        <h3>Advanced</h3>
        <div>Advanced features</div>
        <div className="pricing-card__price--original">
          <s>$112.00</s>
        </div>
        <div className="pricing-card__price">$89.99</div>
        <div className="period">/ month</div>
        <ul>
          <li>All features of the Essential Plan.</li>
          <li>Priority email support with a 24-hour response time.</li>
          <li>Access to exclusive webinars and online events.</li>
          <li>Enhanced tools and features, including analytics.</li>
          <li>
            Customizable content experience based on user preferences.
            asfsfaafsfsafsafsafsaafsfsafsa
          </li>
        </ul>
        <a className="enroll" href="#">
          Choose Advanced
        </a>
      </article>

      <article className="pricing-card pricing-card--primary">
        <div className="pricing-card__banner">Most popular</div>
        <h3>Pro</h3>
        <div>Advanced features</div>
        <div className="pricing-card__price--original">
          <s>$125.00</s>
        </div>
        <div className="pricing-card__price">$94.99</div>
        <div className="period">/ month</div>
        <ul>
          <li>All features of the Advanced Plan.</li>
          <li>Dedicated account manager for personalized assistance.</li>
          <li>Early access to new features and beta programs.</li>
          <li>Advanced analytics and detailed reports.</li>
          <li>High-priority customer service with instant chat support.</li>
        </ul>
        <a className="enroll" href="#">
          Choose Pro
        </a>
      </article>
    </div>
  );
}

export default App;
