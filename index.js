const element = (
  // Write your code here.

  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="bg-container2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="images"
      />
      <h1 className="heading-name">KIRAN V</h1>
      <p className="paragraph">
        Vishnu Institute of Computer Education and Technology Bhimavaram{" "}
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="images"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
