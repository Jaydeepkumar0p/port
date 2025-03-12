import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 15px rgba(255, 255, 255, 0.2);
  }

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Role = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary || "#fff"};
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Company = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary || "#ccc"};
  opacity: 0.9;
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
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary || "#fff"};
  opacity: 0.9;
  line-height: 1.5;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const Skill = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 5px 12px;
  font-size: 13px;
  color: ${({ theme }) => theme.text_primary || "#fff"};
  transition: background 0.3s ease-in-out;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.company}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
          }}
          src={experience?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "rgba(17, 25, 40, 0.92)",
        color: "#fff",
        boxShadow: "0 8px 32px rgba(23, 92, 230, 0.2)",
        borderRadius: "10px",
        padding: "20px",
        transition: "all 0.4s ease-in-out",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      date={experience?.date}
    >
      <Top>
        <Image src={experience?.img} />
        <Body>
          <Role>{experience?.role}</Role>
          <Company>{experience?.company}</Company>
          <Date>{experience?.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc}
      </Description>

      {experience?.skills && (
        <Skills>
          {experience.skills.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </Skills>
      )}
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
