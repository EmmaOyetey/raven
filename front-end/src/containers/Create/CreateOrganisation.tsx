import React from "react";
import "./CreateOrganisation.scss";
import OrganisationForm from "../../components/Form/Form";
import OrganisationType from "../../types/organisationType";
import Nav from "../../components/Nav/Nav"
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
      navigate("/organisation/" + createdOrganisation.name, { state: createdOrganisation });
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  return (
    <>
      <Nav />
      <section className="create-organisation">
        <h2 className="create-organisation__title">Add an Organisation</h2>
        <OrganisationForm onSubmit={handleSubmit} />
      </section>
    </>
  );
};

export default CreateOrganisation;
