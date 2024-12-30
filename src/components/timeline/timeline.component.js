import React from "react";
import {
  TCSLogo,
  FyndIconLogo,
  TimelineArea,
  TimeLineCard,
  TimelineContent,
  TimelineContentItem,
  TimeLineDate,
  TimeLineTitle,
  VectoLogo,
  TimeLineTop,
} from "./timeline.styles";

const Timeline = () => {
  return (
    <TimelineArea>
    <TimeLineCard>
        <TimeLineTop>
          <FyndIconLogo />
          <TimeLineDate>Jul 2022 - Present</TimeLineDate>
        </TimeLineTop>
        <TimeLineTitle>Fynd</TimeLineTitle>
        <TimelineContent>
          <TimelineContentItem>
          Optimized UI for catalog management software on Fynd, boosting performance by 60% through image optimization and code-splitting. 
          </TimelineContentItem>
          <TimelineContentItem>
          Added support for multiple platform client versions in outbound data processing, improving compatibility and reducing integration issues by 30%.
          </TimelineContentItem>
          <TimelineContentItem>
          Developed a data synchronization system with BullMQ for one-time dumps and delta updates from FDK, reducing synchronization time by 40% and achieving a 95% success rate in real-time updates through webhook integration.
          </TimelineContentItem>
          <TimelineContentItem>
          Introduced Google Authentication with OAuth 2.0, increasing user sign-up rates by 25% and reducing authentication-related support tickets by 50%, enhancing overall user experience and security.
          </TimelineContentItem>
        </TimelineContent>
      </TimeLineCard>
    <TimeLineCard>
        <TimeLineTop>
          <TCSLogo />
          <TimeLineDate>Jul 2021 - Nov 2023</TimeLineDate>
        </TimeLineTop>
        <TimeLineTitle>Tata Consultancy Services</TimeLineTitle>
        <TimelineContent>
          <TimelineContentItem>
          Created efficient state management with a normalized Redux pattern for plans, milestones, and tasks, resulting in 40% faster state updates and improved data retrieval times.
          </TimelineContentItem>
          <TimelineContentItem>
            Improved the performance of the app by decreasing the load time of a
            bundle with techniques like minifying JS , lazy loading, assets
            optimization, splitting vendor bundles ( Webpack Optimization ) .
          </TimelineContentItem>
          <TimelineContentItem>
          Led an initiative to refactor the interface for a responsive design, ensuring mobile compatibility and conducting thorough testing across multiple devices using Chrome Developer Tools, resulting in a 50% improvement in mobile user experience.
          </TimelineContentItem>
        </TimelineContent>
      </TimeLineCard>
      <TimeLineCard>
        <TimeLineTop>
          <VectoLogo alt="VectoScalar Technology brand logo" />
          <TimeLineDate>Jan 2021 - Mar 2021</TimeLineDate>
        </TimeLineTop>
        <TimeLineTitle>VectoScalar Technologies</TimeLineTitle>
        <TimelineContent>
          <TimelineContentItem>
            Build a FanBlaze cross-platform app that allows you to get the
            details of the upcoming and current matches .
          </TimelineContentItem>
          <TimelineContentItem>
            Partnered with designer team to take client wireframe from
            conception to implementation.
          </TimelineContentItem>
        </TimelineContent>
      </TimeLineCard>
    </TimelineArea>
  );
};

export default Timeline;
