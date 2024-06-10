import { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import "./About.scss";

const About = () => {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [totalOrgCount, setTotalOrgCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async (type: string) => {
      try {
        const response = await fetch(`http://localhost:8080/organisations/count/${type}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    const fetchTotalOrgCount = async () => {
      try {
        const response = await fetch("http://localhost:8080/organisations/countAll");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTotalOrgCount(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    const getCounts = async () => {
      const types = [
        'Careers',
        'CreativeArts',
        'Curriculum',
        'LifeSkills',
        'MentalHealth',
        'PhysicalActivity',
        'Pshe',
        'Tech'
      ];

      const countsData = await Promise.all(
        types.map(async type => {
          const count = await fetchCount(type);
          return { [type]: count };
        })
      );

      const counts = countsData.reduce((acc, curr) => ({ ...acc, ...curr }), {});
      setCounts(counts);
      setLoading(false);
    };

    fetchTotalOrgCount();
    getCounts();
  }, []);

  return (
    <div className="about-background">
      <Nav />

      <div className="about__raven-logo" />
//
      <div className=" page-container about">
        <div className="about__content">
          <h1>About Us</h1>
          <p>Welcome to our organisation. Here we provide detailed information about our mission, values, and services.</p>
          <h2>The Number of Organisations listed, Supporting </h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              <li>Careers : {counts.Careers ?? 'N/A'}</li>
              <li>Creative Arts : {counts.CreativeArts ?? 'N/A'}</li>
              <li>Curriculum : {counts.Curriculum ?? 'N/A'}</li>
              <li>Life Skills : {counts.LifeSkills ?? 'N/A'}</li>
              <li>Mental Health : {counts.MentalHealth ?? 'N/A'}</li>
              <li>Physical Activity : {counts.PhysicalActivity ?? 'N/A'}</li>
              <li>PSHE : {counts.Pshe ?? 'N/A'}</li>
              <li>Tech : {counts.Tech ?? 'N/A'}</li>
              <li className = "total-org-count">Total Organisations: {totalOrgCount ?? 'N/A'}</li>
            </ul>
          )}

          <p>Our aim is to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti</p>
          <p>         
          </p>
          <p>
            Praesent sed arcu et velit cursus pretium. Sed ullamcorper urna at quam varius, non facilisis nunc tristique. Nullam ac magna non elit mollis tempus. Proin fermentum, urna id feugiat vulputate, non tristique risus quam vel nulla. Donec consectetur, arcu ut tincidunt vulputate, nisl nunc condimentum arcu, id laoreet sapien magna nec erat. Cras ac luctus odio. Quisque eget libero nec risus efficitur sagittis.
          </p>
          <p>
            Suspendisse potenti. Aenean mollis vestibulum urna, nec lacinia ex faucibus at. Aliquam erat volutpat. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;