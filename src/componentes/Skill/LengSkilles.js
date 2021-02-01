import React from 'react'
import {
    Rating,
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
  } from "@material-ui/lab";
  import {
    Box,
    //Typography
  } from "@material-ui/core";
  

export default function programingSkill() {
    return (
        
        <Timeline className="mainSkilles">
          <h3> Language skills levels</h3>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Armenian</TimelineContent>

          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="read-only" value={3} readOnly />
          </Box>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Russian</TimelineContent>

          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="read-only" value={3} readOnly />
          </Box>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>English</TimelineContent>

          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="read-only" value={3} readOnly />
          </Box>
        </TimelineItem>

       
      </Timeline>
    )
}
