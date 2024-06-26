import "./CreateOrganisation.scss";
import OrganisationForm from "../../components/Form/OrganisationForm";
import OrganisationType from "../../types/organisationType";
import Nav from "../../components/Nav/Nav";
import { useNavigate } from "react-router-dom";

const CreateOrganisation = () => {
  const navigate = useNavigate();

  const handleSubmit = async (newOrganisation: OrganisationType) => {
    const result = await fetch("http://localhost:8080/organisations/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrganisation),
    });

    if (result.ok) {
      alert("Organisation added");
      const createdOrganisation = await result.json();
      navigate("/organisation/" + createdOrganisation.id, { state: createdOrganisation });
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  return (
    <>
      <Nav />
      <h1 className="create-organisation__title">Add an Organisation</h1>
      <section className="create-organisation"> 
        <OrganisationForm onSubmit={handleSubmit} />
      </section>
    </>
  );
};

export default CreateOrganisation;
