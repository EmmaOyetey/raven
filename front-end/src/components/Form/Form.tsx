import React, { useState } from 'react';
import OrganisationType from '../../types/organisationType';
import "./Form.scss"


type OrganisationFormProps = {
  onSubmit: (formValues: OrganisationType) => void;
}

const OrganisationForm: React.FC<OrganisationFormProps> = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState<OrganisationType>({
    name: '',
    logo: '',
    overview: '',
    link: '',
    impact: '',
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
      <div className="form-group">
        <label htmlFor="organisationName">Organisation Name</label>
        <input type="text" name="organisationName" value={formValues.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="logo">Logo URL</label>
        <input type="text" name="logo" value={formValues.logo} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="overview">Overview</label>
        <textarea name="overview" value={formValues.overview} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="link">Link</label>
        <input type="url" name="link" value={formValues.link} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="impact">Impact (max 50 words)</label>
        <textarea name="impact" value={formValues.impact} onChange={handleChange} required />
        <div className="word-count">{wordCount(formValues.impact)} / 50 words</div>
      </div>
      <div className="form-group">
        <label>Do you offer the following to young people?</label>
        <div className="checkbox-group">
          {['careers', 'creativeArts', 'curriculum', 'lifeSkills', 'mentalHealth', 'physicalActivity', 'pshe', 'tech'].map((field) => (
            <div key={field} className="checkbox-item">
              <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input type="checkbox" name={field} checked={(formValues as any)[field]} onChange={handleChange} />
            </div>
          ))}
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OrganisationForm;