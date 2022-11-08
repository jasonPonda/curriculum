import React from "react";

const Second = () => {
  return (
    <section className="experiencesSection">
      <h3>EXPERIENCES</h3>
      <div className="leftPart">
        <div className="trainee">
          <p>Trainee</p>
          <p>09/2022 - 11/2022 | Jobswappy (Vilvoorde)</p>
          <ul>
            Internship as a fronted junior web developer:
            <li>HTML, CSS, JavaScript, Reactjs</li>
            <li>figma, miro, bubble.io</li>
            <li>Git</li>
          </ul>

          <div className="becode">
            <p>Trainee</p>
            <p>03/2022 - 09/2022 | Becode (Brussels)</p>
            <ul>
              Bootcamp with active pedagogy in order to train as a junior web
              developer:
              <li>HTML, CSS, JavaScript, Reactjs</li>
              <li>Nodejs, PostgreSQL, SQL</li>
              <li>Git, Heroku</li>
              <li>C# .NET, ASP.NET</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rigthPart">
        <div className="traineeAdmi">
          <p>Trainee administrative</p>
          <p>03/2018 - 03/2018 | FEDER (Brussels)</p>
          <ul>
            <li> Office filing</li>
            <li>encoding</li>
            <li>text translation</li>
            <li>various works on pc</li>
          </ul>

          <div className="hub">
            <p>Trainee administrative</p>
            <p>03/2017 - 03/2017 | Hub.brussels (Brussels)</p>
            <ul>
              <li>call sending and receiving</li>
              <li>face-to-face reception</li>
              <li>encoding</li>
              <li>office filing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
