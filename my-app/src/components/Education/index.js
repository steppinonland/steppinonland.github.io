import React from 'react';

const Education = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="head-bar"><i className="fa fa-book"></i> Education</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <article className="education">
            <a href="https://techbootcamps.utexas.edu/coding/online/"><h1>The University of Texas - Austin</h1></a>
            <span className="label label-default">2020</span>
            <h2>Certification <small>Full Stack Web Development</small></h2>
            <h3>Software Engineering</h3>
          </article>
        </div>
        <div className="col-md-6">
          <article className="education">
            <a href="https://www.slu.edu/business/index.php"><h1>Saint Louis University</h1></a>
            <span className="label label-default">
            2014-2018</span>
            <h2>Bachelors of Science <small>Business Administration</small></h2>
            <h3>Marketing, Political Science</h3>
          </article>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3 className="head-bar"><i className="fa fa-briefcase"></i> Work</h3>
        </div>
      </div>
    </div>
);
export default Education;