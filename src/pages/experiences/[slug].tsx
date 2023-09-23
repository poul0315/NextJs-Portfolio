import { useRouter } from 'next/router';
import { experiences } from '../../sections/Experience'; // adjust the path if necessary

type ExperienceType = {
    name: string;
    role: string;
    url: string;
    positionDescription: string[];
    link: string;
};
  

function ExperienceDetail() {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug)
  console.log(experiences)

  const experience = experiences.find((exp: ExperienceType) => exp.link === slug);

  console.log(experience)

  if (!experience) {
    return <p>Experience not found</p>;
  }

  return (
    <div>
      <h1>{experience.name}</h1>
      <p>{experience.role}</p>
      {/* Display other experience details as needed */}
    </div>
  );
}

export default ExperienceDetail;
