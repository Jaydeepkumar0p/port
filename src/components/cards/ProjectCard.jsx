import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: transform 0.4s cubic-bezier(0.3, 0.7, 0.4, 1), 
              box-shadow 0.4s ease-in-out, 
              filter 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  ${Card}:hover & {
    transform: scale(1.07);
  }
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-top: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  gap: 6px;
  margin-top: 10px;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.card};
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
  }
`;

const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  background-color: ${({ theme }) => theme.card};
  padding: 8px 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.card};
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member, index) => (
          <Avatar key={index} src={member.img} alt={`Member ${index + 1}`} />
        ))}
      </Members>
      <Button href={project.github} target="_blank" rel="noopener noreferrer">
        View Code
      </Button>
    </Card>
  );
};

export default ProjectCard;
