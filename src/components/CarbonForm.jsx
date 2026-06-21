import { useState } from "react";

function CarbonForm({ onCalculate }) {
  const [form, setForm] = useState({
    transport: "Car",
    distance: "",
    electricity: "",
    diet: "Vegetarian",
    waste: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onCalculate(form);
  }

  return (
    <div className="card">

      <div className="title">
        <h1>🌍 EcoPulse AI</h1>
        <h3>Carbon Footprint Awareness Platform</h3>
      </div>

      <form className="carbon-form" onSubmit={handleSubmit}>

        <select
          name="transport"
          value={form.transport}
          onChange={handleChange}
        >
          <option>Car</option>
          <option>Bus</option>
          <option>Bike</option>
          <option>Train</option>
          <option>Walking</option>
        </select>

        <input
          type="number"
          name="distance"
          placeholder="Distance Travelled (km)"
          onChange={handleChange}
        />

        <input
          type="number"
          name="electricity"
          placeholder="Electricity Usage (kWh)"
          onChange={handleChange}
        />

        <select
          name="diet"
          value={form.diet}
          onChange={handleChange}
        >
          <option>Vegetarian</option>
          <option>Mixed</option>
          <option>Non-Vegetarian</option>
        </select>

        <input
          type="number"
          name="waste"
          placeholder="Waste Generated (kg)"
          onChange={handleChange}
        />

        <button type="submit">
          Calculate Footprint
        </button>

      </form>

    </div>
  );
}

export default CarbonForm;