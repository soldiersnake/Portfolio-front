import React, { useState } from "react";

export const Formulario = () => {
  const [formData, setFormData] = useState({
    name: "",
    motivo: "",
    email: "",
    message: "",
    tipoContacto: "otro",
  });

  const [errors, setErrors] = useState({}); // Estado para manejar los errores

  //manejo de los cambios del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   // Validar formulario
   const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formData.motivo.trim()) newErrors.motivo = "El motivo es requerido";
    if (!formData.email.trim()) newErrors.email = "El email es requerido";
    if (!formData.message.trim()) newErrors.message = "El mensaje es requerido";
    if (!formData.tipoContacto.trim()) newErrors.tipoContacto = "El tipo de contacto es requerido";

    return newErrors;
  };

  // Manejo de envio de formulario
  const handleSubmit = (e) => {
    e.preventDefault(); //evitamos que la pagina recargue al enviar el formulario

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      // Si hay errores, no se envía el formulario y se muestran los errores
      setErrors(validationErrors);
    } else {
      // Si no hay errores, se puede enviar el formulario
      console.log("Datos enviados", formData);

      // Limpiar formulario
      setFormData({
        name: "",
        motivo: "",
        email: "",
        message: "",
        tipoContacto: "",
      });

      // Limpiar errores
      setErrors({});
    }
  };

  return (
    <>
      <div className="center">
        <section id="content" style={{ width: "100%" }}>
          <h2 className="subheader">Contactame</h2>
          <div>
            <p>
              Si deseas contactarme, puedes enviarme un mail vía este formulario
              y yo me contactaré contigo a la brevedad.
            </p>
          </div>
          <form className="mid-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                // required 
              />
              {errors.name && <p style={{ color: "red", marginTop:'-5px' }}>{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="motivo">Motivo de contacto</label>
              <input 
                type="text" 
                name="motivo" 
                id="motivo" 
                value={formData.motivo}
                onChange={handleChange}
                // required 
              />
              {errors.motivo && <p style={{ color: "red", marginTop:'-5px' }}>{errors.motivo}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                // required
              />
              {errors.email && <p style={{ color: "red", marginTop:'-5px' }}>{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea 
                name="message" 
                id="message" 
                value={formData.message}
                onChange={handleChange}
                // required
              ></textarea>
              {errors.message && <p style={{ color: "red", marginTop:'-5px' }}>{errors.message}</p>}
            </div>

            <div className="form-group radibuttons">
              <input
                type="radio"
                name="tipoContacto"
                value='empresa'
                checked={formData.tipoContacto === 'empresa'}
                onChange={handleChange}
                // required
              />
              Empresa
              <input
                type="radio"
                name="tipoContacto"
                value='recluiter'
                checked={formData.tipoContacto === 'recluiter'}
                onChange={handleChange}
              />
              Recluiter
              <input 
                type="radio" 
                name="tipoContacto" 
                value='cliente'
                checked={formData.tipoContacto === 'cliente'}
                onChange={handleChange}
              />
              Cliente
              <input 
                type="radio" 
                name="tipoContacto" 
                value='otro'
                checked={formData.tipoContacto === 'otro'}
                onChange={handleChange}
              />
              Otro
              {errors.tipoContacto && <p style={{ color: "red", marginTop:'-5px' }}>{errors.tipoContacto}</p>}
            </div>

            <div className="clearfix"></div>

            <input
              type="submit"
              value="Enviar"
              className="btn-form btn-success-form"
            />
          </form>
        </section>

        {/* <Sidebar/> */}
        <div className="clearfix"></div>
      </div>
    </>
  );
};
