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
  const [authorized, setAuthorized] = useState(false);
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
    if (!authorized) return;
    // Enviar a los emails de Hernán y María
    const recipients = siteContent.form.recipientEmails;
    console.log('Formulario enviado a:', recipients);
    console.log('Datos del formulario:', formData);

    // TODO: Conectar a un backend o servicio de email para enviar realmente los datos
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ nombre: '', email: '', celular: '', area: '', mensaje: '' });
      setAuthorized(false);
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

              {/* Autorización de Datos Personales */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="autorizado"
                  checked={authorized}
                  onChange={(e) => setAuthorized(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-panesso-white cursor-pointer flex-shrink-0"
                />
                <label htmlFor="autorizado" className="font-nunito text-xs sm:text-sm text-panesso-light-gray leading-relaxed cursor-pointer">
                  Autorizo a PANESSO MERCADO S.A.S. el tratamiento de mis datos personales para atender mi solicitud de contacto, en los términos del{' '}
                  <a
                    href="/aviso-de-privacidad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-panesso-white hover:text-panesso-light-gray underline transition-colors"
                  >
                    Aviso de Privacidad
                  </a>
                  {' '}y de la{' '}
                  <a
                    href="/politica-de-tratamiento-de-datos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-panesso-white hover:text-panesso-light-gray underline transition-colors"
                  >
                    Política de Tratamiento de Datos Personales
                  </a>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!authorized}
                className={`w-full font-nunito font-semibold text-sm uppercase tracking-widest py-4 transition-all duration-300 ${
                  authorized
                    ? 'bg-panesso-white text-panesso-black hover:bg-panesso-light-gray cursor-pointer'
                    : 'bg-panesso-medium-gray text-panesso-dark-gray cursor-not-allowed opacity-50'
                }`}
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
