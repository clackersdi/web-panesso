'use client';

import React from 'react';

interface PartnerModalProps {
  partner: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnerModal({ partner, isOpen, onClose }: PartnerModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto">
        <div className="bg-panesso-black rounded-xl max-w-2xl w-full my-8 relative border border-panesso-dark-gray flex flex-col max-h-fit">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-panesso-light-gray hover:text-panesso-white text-3xl z-10 transition-colors"
          >
            ✕
          </button>

          <div className="p-8">
            {/* Content */}
            <div>
              <h2 className="font-alexandria font-bold text-4xl mb-2 text-panesso-white">
                {partner.name}
              </h2>
              <p className="font-nunito text-xl text-panesso-white mb-6 font-semibold">
                {partner.title}
              </p>

              {partner.fullInfo ? (
                <div className="font-nunito text-panesso-light-gray leading-relaxed space-y-6 max-h-screen overflow-y-auto pr-4">
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-panesso-white">Perfil</h3>
                    <div className="text-sm space-y-3">
                      {partner.fullInfo.profile.split('\n\n').map((paragraph: string, idx: number) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {partner.fullInfo.practiceAreas && partner.fullInfo.practiceAreas.length > 0 && (
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-panesso-white">Áreas de Práctica</h3>
                      <ul className="space-y-2 text-sm">
                        {partner.fullInfo.practiceAreas?.map((area: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-panesso-white font-bold mt-1">•</span>
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {partner.fullInfo.experience && partner.fullInfo.experience.length > 0 && (
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-panesso-white">Experiencia</h3>
                      <ul className="space-y-2 text-sm">
                        {partner.fullInfo.experience?.map((exp: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-panesso-white font-bold mt-1">•</span>
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {partner.fullInfo.education && partner.fullInfo.education.length > 0 && (
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-panesso-white">Formación</h3>
                      <ul className="space-y-2 text-sm">
                        {partner.fullInfo.education?.map((edu: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-panesso-white font-bold mt-1">•</span>
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {partner.fullInfo.recognition && partner.fullInfo.recognition.length > 0 && (
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-panesso-white">Distinciones Institucionales</h3>
                      <ul className="space-y-2 text-sm">
                        {partner.fullInfo.recognition?.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-panesso-white font-bold mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {partner.fullInfo.socialCommitment && (
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-panesso-white">Compromiso Social</h3>
                      <p className="text-sm">{partner.fullInfo.socialCommitment}</p>
                    </div>
                  )}

                  {partner.fullInfo.philosophy && (
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-panesso-white">Filosofía Profesional</h3>
                      <p className="text-sm italic">{partner.fullInfo.philosophy}</p>
                    </div>
                  )}

                  {/* Agenda tu cita Button */}
                  <div className="mt-8 pt-6 border-t border-panesso-dark-gray">
                    <a
                      href="/#contacto"
                      onClick={onClose}
                      className="w-full inline-block bg-panesso-white text-panesso-black font-nunito font-semibold text-sm uppercase tracking-widest py-3 hover:bg-panesso-light-gray transition-all duration-300 text-center"
                    >
                      Agenda tu cita
                    </a>
                  </div>
                </div>
              ) : (
                <div className="bg-panesso-dark-gray p-6 rounded-lg border border-panesso-medium-gray">
                  <p className="font-nunito text-panesso-light-gray text-center">
                    Información completa disponible próximamente.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
