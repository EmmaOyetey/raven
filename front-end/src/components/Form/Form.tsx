import React, { useState } from 'react';
import OrganisationType from '../../types/organisationType';
import "./Form.scss";

type OrganisationFormProps = {
  onSubmit: (formValues: OrganisationType) => void;
};

const OrganisationForm = ({ onSubmit }: OrganisationFormProps) => {
  const [formValues, setFormValues] = useState<OrganisationType>({
    name: '',
    logo: '',
    overview: '',
    websiteURL: '',
    impactURL: '',
    careers: false,
    creativeArts: false,
    curriculum: false,
    lifeSkills: false,
    mentalHealth: false,
    physicalActivity: false,
    pshe: false,
    tech: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    if (type === 'checkbox') {
      const checked = (event.target as HTMLInputElement).checked;
      setFormValues({
        ...formValues,
        [name]: checked,
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  const wordCount = (text: string) => {
    return text.split(/\s+/).filter(word => word.length > 0).length;
  };

  return (
    <form onSubmit={handleSubmit} className="organisation-form">
      <div className="organisation-form__group">
        <label className="organisation-form__group-label" htmlFor="name">Organisation Name</label>
        <input className="organisation-form__group-input" type="text" name="name" value={formValues.name} onChange={handleChange} required />
      </div>
      <div className="organisation-form__group">
        <label className="organisation-form__group-label" htmlFor="logo">Logo URL</label>
        <input className="organisation-form__group-input" type="text" name="logo" value={formValues.logo} onChange={handleChange} required />
      </div>
      <div className="organisation-form__group">
        <label className="organisation-form__group-label" htmlFor="websiteURL">Website URL</label>
        <input className="organisation-form__group-input" type="url" name="websiteURL" value={formValues.websiteURL} onChange={handleChange} required />
      </div>
      <div className="organisation-form__group">
        <label className="organisation-form__group-label" htmlFor="impactURL">Impact URL</label>
        <input className="organisation-form__group-input" type="url" name="impactURL" value={formValues.impactURL} onChange={handleChange} required />
      </div>
      <div className="organisation-form__group">
        <label className="organisation-form__group-label" htmlFor="overview">Overview (max 50 words)</label>
        <textarea className="organisation-form__group-textarea" name="overview" value={formValues.overview} onChange={handleChange} required />
        <div className="organisation-form__group-word-count">{wordCount(formValues.overview)} / 50 words</div>
      </div>
      <div className="organisation-form__group">
        <label className="organisation-form__group-label organisation-form__group-label--large-margin">Do you offer the following to young people?</label>
        <div className="organisation-form__checkbox-group">
          {['careers', 'creativeArts', 'curriculum', 'lifeSkills', 'mentalHealth', 'physicalActivity', 'PSHE', 'tech'].map((field) => (
            <div key={field} className="organisation-form__checkbox-group-item">
              <label className="organisation-form__checkbox-group-item-label" htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input className="organisation-form__checkbox-group-item-input" type="checkbox" name={field} checked={(formValues as any)[field]} onChange={handleChange} />
            </div>
          ))}
        </div>
      </div>
      <button className="organisation-form__button" type="submit">Submit</button>
    </form>
  );
};

export default OrganisationForm;