import React from "react";
import reactlogo from "../Logos/react.png";
import nodelogo from "../Logos/node.png";
import sqllogo from "../Logos/sql.jpg";
import mongologo from "../Logos/mongo.jpg";
import htmllogo from "../Logos/html.png";
import csslogo from "../Logos/css3.png";
import jslogo from "../Logos/js.png";
import javalogo from "../Logos/java.png";
import gitlogo from "../Logos/git.png";
import vscodelogo from "../Logos/vscode.png";
import intellijlogo from "../Logos/intellij.jpg";
import cucumberlogo from "../Logos/cucumber.png";
import testraillogo from "../Logos/testrail.png";
import jiralogo from "../Logos/jira.png";
import confluencelogo from "../Logos/confluence.png";

const Skillset = () => {
  return (
    <div className="container margin-bottom-5-p">
      <div className="margin-top-2-p icons color">
        <div class="content_img">
          <img className="imgcontainer" src={reactlogo} alt="react" />
          <div>React and Redux</div>
        </div>
        <div class="content_img">
          <img className="imgcontainer" src={nodelogo} alt="node" />
          <div>Node.js</div>
        </div>
        <div class="content_img">
          <img className="imgcontainer" src={sqllogo} alt="sql" />
          <div>MYSQL</div>
        </div>
        <div class="content_img">
          <img className="imgcontainer" src={mongologo} alt="mongo" />
          <div>MongoDB</div>
        </div>
        <div class="content_img">
          <img className="imgcontainer" src={htmllogo} alt="html" />
          <div>HTML5</div>
        </div>
      </div>
      <div className="margin-top-2-p icons color">
        <div class="content_img">
          <img className="imgcontainer" src={csslogo} alt="css" />
          <div>CSS3</div>
        </div>
        <div class="content_img">
          <img className="imgcontainer" src={jslogo} alt="js" />
          <div>Javascript</div>
        </div>
        <div class="content_img">
          <img className="imgcontainer" src={javalogo} alt="java" />
          <div>Java</div>
        </div>
        <div class="content_img">
          <img className="imgcontainer" src={gitlogo} alt="git" />
          <div>Git</div>
        </div>
        <div class="content_img">
          <img className="imgcontainer" src={vscodelogo} alt="vscode" />
          <div>VSCode</div>
        </div>
      </div>
      <div className="margin-top-2-p icons color">
        <div class="content_img">
          <img className="imgcontainer" src={intellijlogo} alt="IJ" />
          <div>IntelliJ</div>
        </div>
        <div class="content_img">
          <img className="imgcontainer" src={cucumberlogo} alt="cucumber" />
          <div>Cucumber</div>
        </div>
        <div class="content_img">
          <img className="imgcontainer" src={testraillogo} alt="testrail" />
          <div>TestRail</div>
        </div>
        <div class="content_img">
          <img className="imgcontainer" src={jiralogo} alt="jira" />
          <div>Jira</div>
        </div>
        <div class="content_img">
          <img className="imgcontainer" src={confluencelogo} alt="confluence" />
          <div>Confluence</div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
