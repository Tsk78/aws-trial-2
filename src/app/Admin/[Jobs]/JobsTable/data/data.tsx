import nurses from './Nurses.json';
  export const Ratings = [
    {
      value: "1 star",
      Rating: "1 Star",
    },
    {
      value: "2 star",
      Rating: "2 Star",
    },
    {
      value: "3 star",
      Rating: "3 Star",
    },
    {
      value: "4 star",
      Rating: "4 Star",
    },
    {
      value: "5 star",
      Rating: "5 Star",
    }
  ]
  export const Experience = nurses.reduce((acc: { value: string; label: string; }[], nurse: { Experience: string; }) => {
    if (!acc.find((experience: { value: string; }) => experience.value === nurse.Experience)) {
      acc.push({
        value: nurse.Experience,
        label: nurse.Experience,
      });
    }
    return acc;
  }, []);
  export const Specialisation = nurses.reduce((acc: { value: string; label: string; }[], nurse: { Specialisation: string; }) => {
    if (!acc.find((specialisation: { value: string; }) => specialisation.value === nurse.Specialisation)) {
      acc.push({
        value: nurse.Specialisation,
        label: nurse.Specialisation,
      });
    }
    return acc;
  }, []);