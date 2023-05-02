import React from "react";

import {
  Timeline,
  TimelineSeparator,
  TimelineItem,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";

import AcademyTimelineContent from "./academyTimelineContent";

function AcademyTimeline(props) {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector
            sx={{
              backgroundColor: "green.main",
              width: "1px",
            }}
          />
        </TimelineSeparator>

        <TimelineContent />
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="green" />
          <TimelineConnector
            sx={{
              height: 75,
              backgroundColor: "green.main",
              width: "1px",
            }}
          />
        </TimelineSeparator>

        <AcademyTimelineContent
          course={"B.Tech"}
          branch=" in Computer Science & Engineering"
          college={"Aryabhatta Knowledge University"}
          score="CGPA 8.0"
          passingYear={"Persuing"}
        />
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="green" />
          <TimelineConnector
            sx={{
              height: 75,
              backgroundColor: "green.main",
              width: "1px",
            }}
          />
        </TimelineSeparator>

        <AcademyTimelineContent
          course={"Diploma"}
          branch=" in Computer Science & Engineering"
          college={"State Board of Technical Education, Patna"}
          score="CGPA 8.38"
          passingYear={"August 2019"}
        />
      </TimelineItem>

      <TimelineItem data-aos="fade-right">
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="green" />
          <TimelineConnector
            sx={{
              height: 75,
              backgroundColor: "green.main",
              width: "1px",
            }}
          />
        </TimelineSeparator>
        <AcademyTimelineContent
          course={"Xth"}
          branch=" @ RPS High"
          college={"BSEB, Patna"}
          passingYear={"August 2016"}
          score="78.0 %"
        />
      </TimelineItem>
    </Timeline>
  );
}

export default AcademyTimeline;
