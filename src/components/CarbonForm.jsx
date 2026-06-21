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

    onCalculate({
      transport: form.transport,
      distance: Number(form.distance),
      electricity: Number(form.electricity),
      diet: form.diet,
      waste: Number(form.waste)
    });
  }

  return (
    <div className="card">
      <div className="title">
        <h1>🌍 EcoPulse AI</h1>
        <h3>Carbon Footprint Awareness Platform</h3>
      </div>

      <form
        className="carbon-form"
        onSubmit={handleSubmit}
        aria-label="Carbon Footprint Calculator"
      >
        <label htmlFor="transport">Transport Mode</label>
        <select
          id="transport"
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

        <label htmlFor="distance">
          Distance Travelled (km)
        </label>
        <input
          id="distance"
          type="number"
          min="0"
          required
          name="distance"
          value={form.distance}
          onChange={handleChange}
          placeholder="Distance Travelled (km)"
        />

        <label htmlFor="electricity">
          Electricity Usage (kWh)
        </label>
        <input
          id="electricity"
          type="number"
          min="0"
          required
          name="electricity"
          value={form.electricity}
          onChange={handleChange}
          placeholder="Electricity Usage (kWh)"
        />

        <label htmlFor="diet">Diet Type</label>
        <select
          id="diet"
          name="diet"
          value={form.diet}
          onChange={handleChange}
        >
          <option>Vegetarian</option>
          <option>Mixed</option>
          <option>Non-Vegetarian</option>
        </select>

        <label htmlFor="waste">
          Waste Generated (kg)
        </label>
        <input
          id="waste"
          type="number"
          min="0"
          required
          name="waste"
          value={form.waste}
          onChange={handleChange}
          placeholder="Waste Generated (kg)"
        />

        <button
          type="submit"
          aria-label="Calculate Carbon Footprint"
        >
          Calculate Footprint
        </button>
      </form>
    </div>
  );
}

export default CarbonForm;