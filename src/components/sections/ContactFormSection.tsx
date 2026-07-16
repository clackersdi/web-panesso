'use client';

import React, { useState } from 'react';
import Container from '../Container';
import { siteContent } from '@/lib/content';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    celular: '',
    area: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Por ahora solo mostramos mensaje de éxito
    // Luego puedes conectar a un backend o servicio de email
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ nombre: '', email: '', celular: '', area: '', mensaje: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contacto"
      className="w-full bg-panesso-black text-panesso-white py-20"
    >
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-alexandria font-bold text-3xl sm:text-4xl mb-4">
              Agenda tu Consulta
            </h2>
            <p className="font-nunito text-panesso-light-gray text-sm sm:text-base">
              Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>

          {submitted ? (
            <div className="bg-transparent border border-panesso-light-gray text-panesso-white p-6 text-center">
              <p className="font-nunito">¡Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block font-nunito text-sm font-semibold mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent text-panesso-white font-nunito border border-panesso-dark-gray focus:border-panesso-white focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-nunito text-sm font-semibold mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent text-panesso-white font-nunito border border-panesso-dark-gray focus:border-panesso-white focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Celular */}
              <div>
                <label className="block font-nunito text-sm font-semibold mb-2">
                  Celular
                </label>
                <input
                  type="tel"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent text-panesso-white font-nunito border border-panesso-dark-gray focus:border-panesso-white focus:outline-none transition-colors"
                  placeholder="+57 123 456 7890"
                />
              </div>

              {/* Área de Práctica */}
              <div>
                <label className="block font-nunito text-sm font-semibold mb-2">
                  Área de Práctica
                </label>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent text-panesso-white font-nunito border border-panesso-dark-gray focus:border-panesso-white focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Selecciona un área (opcional)</option>
                  {siteContent.practiceAreas.map((area) => (
                    <option key={area.id} value={area.title}>
                      {area.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block font-nunito text-sm font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent text-panesso-white font-nunito border border-panesso-dark-gray focus:border-panesso-white focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos más sobre tu caso o inquietud..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-panesso-white text-panesso-black font-nunito font-semibold text-sm uppercase tracking-widest py-4 hover:bg-panesso-light-gray transition-all duration-300"
              >
                Enviar Solicitud
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
