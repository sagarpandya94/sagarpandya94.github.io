import React from "react";
import "../pagestyle.css";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 700,
    borderRadius: 20,
  },
  content: {
    padding: 24,
    textAlign: "justify",
  },
  smalltitle1: {
    fontWeight: "bold",
  },
}));

const Workexperience = () => {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  return (
    <div className="container margin-top-2-p cards">
      <Card className={cx(cardStyles.root, shadowStyles.root)}>
        <BrandCardHeader
          image={
            "data:image/jpeg;base64,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"
          }
          extra={"June 2020 - December 2020"}
        />
        <CardContent className={cardStyles.content}>
          <TextInfoContent
            classes={styles}
            overline={"8x8"}
            heading={"Quality Engineering Intern"}
            body={
              "I was a part of the quality engineering, platform team. My priority was to maintain testrail and automation of 3 different telecommunication products. I was also responsible to support different product releases by validating the quality of new or improved features."
            }
          />
          <Typography style={{ fontWeight: 600, fontSize: 18, marginTop: 20 }}>
            Result
          </Typography>
          <TextInfoContent
            classes={styles}
            body={
              "Product testrail suites were updated with more coverage and detailed steps. The automation was updated and maintained successfully for six months. My team was able to rely on me 100% for releases and focus on other tasks."
            }
          />
          <Typography style={{ fontWeight: 600, fontSize: 18, marginTop: 20 }}>
            Technologies and Tools
          </Typography>
          <TextInfoContent
            classes={styles}
            body={
              "Java, Cucumber, Serenity BDD, Jenkins, Testrail, IntelliJ, Jira, Confluence"
            }
          />
        </CardContent>
      </Card>
      <div className="margin-top-2-p">
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <BrandCardHeader
            image={
              "data:image/jpeg;base64,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"
            }
            extra={"January 2017 - June 2017"}
          />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={styles}
              overline={"RapidOps Inc."}
              heading={"Mobile Application Development Intern"}
              body={
                "I worked in a team to develop a cross-platform mobile application for one of the in-house products. I supported the team in the development of small functional components of the application and RESTful APIs. Agile methodology was followed and every sprint ended with a deliverable."
              }
            />
            <Typography
              style={{ fontWeight: 600, fontSize: 18, marginTop: 20 }}
            >
              Result
            </Typography>
            <TextInfoContent
              classes={styles}
              body={
                "The application was almost complete at the end of my internship. The organization was able to increase the efficiency of its employees by using this application. I increased the organization’s pool of reusable components remarkably."
              }
            />
            <Typography
              style={{ fontWeight: 600, fontSize: 18, marginTop: 20 }}
            >
              Technologies and Tools
            </Typography>
            <TextInfoContent
              classes={styles}
              body={"Nativescript, Angular.js, ES5, MVC, Trello, inVision"}
            />
          </CardContent>
        </Card>
      </div>
      <div className="margin-top-2-p margin-bottom-5-p">
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <BrandCardHeader
            image={
              "https://azurementor.files.wordpress.com/2017/10/azure-logo.jpg"
            }
            extra={"January 2015 - May 2015"}
          />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={styles}
              overline={"Majesty IT Services"}
              heading={"Web Application Development Intern"}
              body={
                "I was mentored by a team of Microsoft certified trainers. Our team’s goal was to develop a basic web and mobile application for Windows devices. The application was about an Insurance company that wanted to change the workflow of their employees to increase the reach."
              }
            />
            <Typography
              style={{ fontWeight: 600, fontSize: 18, marginTop: 20 }}
            >
              Result
            </Typography>
            <TextInfoContent
              classes={styles}
              body={
                "I learned about the Software Development Life Cycle in a corporate environment. I learned about different approaches to build an application or project from scratch. I was able to create few components of the whole project during my internship."
              }
            />
            <Typography
              style={{ fontWeight: 600, fontSize: 18, marginTop: 20 }}
            >
              Technologies and Tools
            </Typography>
            <TextInfoContent
              classes={styles}
              body={"Azure Cloud Services, php, dotnet"}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Workexperience;
