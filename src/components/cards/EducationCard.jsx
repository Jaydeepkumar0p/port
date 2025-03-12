import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
  max-width: 100%;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  transition: transform 0.3s ease-in-out; 
  &:hover {
    transform: scale(1.05); /* Subtle hover effect */
  }

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const School = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary || "#fff"};
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Degree = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary || "#ccc"};
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary || "#aaa"};
  opacity: 0.8;

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary || "#fff"};
  opacity: 0.9;
  line-height: 1.5;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary || "#ddd"};
  opacity: 0.9;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education?.school}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)", // Softer icon glow
          }}
          src={education?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "rgba(17, 25, 40, 0.92)",
        color: "#fff",
        boxShadow: "0 8px 32px rgba(23, 92, 230, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "10px",
        padding: "20px",
        transition: "all 0.4s ease-in-out",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      date={education?.date}
    >
      <Top>
        <Image src={education?.img} />
        <Body>
          <School>{education?.school}</School>
          <Degree>{education?.degree}</Degree>
          <Date>{education?.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade : </b>
        {education?.grade}
      </Grade>
      <Description>
        {education?.desc && <Span>{education.desc}</Span>}
      </Description>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
