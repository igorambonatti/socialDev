import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

function App() {
  const editModeState = useState({ editMode: false, dev: {} });
  const [devs, setDevs] = useState([]);
  const [{ editMode }] = editModeState;

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("devs");

      setDevs(response.data.devs);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("devs", data);
    const { data: newDev } = response;
    let add = true;
    for (let oldDev in devs) if (devs[oldDev]._id === newDev._id) add = false;
    if (add) setDevs([...devs, newDev]);
  }

  async function handleEditDev(dev, data) {
    const { github } = dev;
    const newDevs = devs.map(async dev => {
      if (dev.github === github) {
        const response = await api.put(`devs/${github}`, data);
        if (response.data.modifiedCount > 0) {
          const newDev = await api.get(`devs/${github}`);
          return newDev.data;
        } else return dev;
      } else return dev;
    });
    (async () => {
      const resultado = await Promise.all(newDevs);
      setDevs(resultado);
    })();
  }

  async function handleDelDev(github) {
    await api.delete(`devs/${github}`);
    setDevs(devs.filter(dev => dev.github !== github));
  }

  return (
    <div id="app">
      <aside>
        <strong>{editMode ? "Editar" : "Cadastrar"}</strong>
        <DevForm
          onAdd={handleAddDev}
          onEdit={handleEditDev}
          editModeState={editModeState}
        />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem
              key={dev._id}
              dev={dev}
              onEdit={editModeState}
              onDelete={handleDelDev}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
