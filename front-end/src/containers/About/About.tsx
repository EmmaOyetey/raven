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
    <>
      <Nav />
      <div className="about__raven-logo" />
        <div className=" page-container--about ">
          <div className="about-content">
            <h1>About Us</h1>
            <p className = "about-content__overview">Welcome to our organisation. Here we provide detailed information about our mission, values, and services.</p>
            <div className = "about-content__support-numbers">
              <p className = "total-org-count">Currently we have <span>{totalOrgCount ?? 'N/A'}</span> Organisations Listed</p>
                <h3>By Area Of Support Offered: </h3>
                  <div className = "about-content__table">
                    {loading ? (
                      <p>Loading...</p>
                    ) : (
                      <ul className = "about-content__list">
                        <li className = "about-content__item">Careers : {counts.Careers ?? 'N/A'}</li>
                        <li className = "about-content__item">Creative Arts : {counts.CreativeArts ?? 'N/A'}</li>
                        <li className = "about-content__item">Curriculum : {counts.Curriculum ?? 'N/A'}</li>
                        <li className = "about-content__item">Life Skills : {counts.LifeSkills ?? 'N/A'}</li>
                        <li className = "about-content__item">Mental Health : {counts.MentalHealth ?? 'N/A'}</li>
                        <li className = "about-content__item">Physical Activity : {counts.PhysicalActivity ?? 'N/A'}</li>
                        <li className = "about-content__item">PSHE : {counts.Pshe ?? 'N/A'}</li>
                        <li className = "about-content__item">Tech : {counts.Tech ?? 'N/A'}</li>
                      </ul>
                    )}  
                  </div>  
            </div>
            <div className = "about-content__info" >
              <p> Our aim is to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti</p>
              <p>Praesent sed arcu et velit cursus pretium. Sed ullamcorper urna at quam varius, non facilisis nunc tristique. Nullam ac magna non elit mollis tempus. Proin fermentum, urna id feugiat vulputate, non tristique risus quam vel nulla. Donec consectetur, arcu ut tincidunt vulputate, nisl nunc condimentum arcu, id laoreet sapien magna nec erat. Cras ac luctus odio. Quisque eget libero nec risus efficitur sagittis.</p>
              <p>Suspendisse potenti. Aenean mollis vestibulum urna, nec lacinia ex faucibus at. Aliquam erat volutpat.</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default About;