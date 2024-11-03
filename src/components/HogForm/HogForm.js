import React, { useState } from 'react';

const HogForm = ({ onAddHog }) => {
  const [formData, setFormData] = useState({ name: '', image: '', specialty: '', weight: '', greased: false, highestMedal: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog(formData);
    setFormData({ name: '', image: '', specialty: '', weight: '', greased: false, highestMedal: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
      <input name="specialty" value={formData.specialty} onChange={handleChange} placeholder="Specialty" required />
      <input name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" required />
      <label>
        Greased:
        <input name="greased" type="checkbox" checked={formData.greased} onChange={handleChange} />
      </label>
      <input name="highestMedal" value={formData.highestMedal} onChange={handleChange} placeholder="Highest Medal" />
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default HogForm;
