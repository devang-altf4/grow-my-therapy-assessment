"use client";

import { useState } from "react";
import { Send, CheckCircle2, Shield, Calendar, Clock, MapPin } from "lucide-react";

interface ContactFormSectionProps {
  practitionerName: string;
  location: string;
  phone: string;
  email: string;
}

export function ContactFormSection({
  practitionerName,
  location,
  phone,
  email,
}: ContactFormSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "anxiety",
    format: "in-person",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className="py-20 sm:py-28 bg-surface border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary/40 rounded-3xl p-8 sm:p-12 border border-border shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Direct Contact
              </span>
              <h3 className="font-serif text-3xl font-bold text-foreground tracking-tight">
                Request a 15-Minute Phone Consultation
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Take the first step toward relief. Leave your details below, and Dr. Maya will reach out within 24–48 business hours to schedule your introductory call.
              </p>

              <div className="space-y-3 pt-2 text-xs text-muted">
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-primary shrink-0" />
                  <span>100% Confidential & HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>Prompt reply within 1–2 business days</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{location}</span>
                </div>
              </div>
            </div>

            {/* Right Form (7 cols) */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-surface rounded-2xl p-8 border border-primary/20 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-foreground">
                    Consultation Request Received
                  </h4>
                  <p className="text-muted text-sm leading-relaxed max-w-md mx-auto">
                    Thank you, {formData.name || "friend"}. Dr. Maya Reynolds has received your message and will contact you at {formData.email} to coordinate your 15-minute consultation.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-primary underline underline-offset-4"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(310) 555-0123"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Primary Area of Concern
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      >
                        <option value="anxiety">Anxiety & Panic Therapy</option>
                        <option value="trauma">Trauma & EMDR Recovery</option>
                        <option value="burnout">Burnout & High Pressure</option>
                        <option value="other">General Life Stress & Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Preferred Session Format
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className={`flex items-center justify-center p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        formData.format === "in-person"
                          ? "bg-primary text-white border-primary shadow-sm"
                          : "bg-surface text-muted border-border hover:border-border/80"
                      }`}>
                        <input
                          type="radio"
                          name="format"
                          value="in-person"
                          checked={formData.format === "in-person"}
                          onChange={() => setFormData({ ...formData, format: "in-person" })}
                          className="sr-only"
                        />
                        <span>In-Person (Santa Monica)</span>
                      </label>
                      <label className={`flex items-center justify-center p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        formData.format === "telehealth"
                          ? "bg-primary text-white border-primary shadow-sm"
                          : "bg-surface text-muted border-border hover:border-border/80"
                      }`}>
                        <input
                          type="radio"
                          name="format"
                          value="telehealth"
                          checked={formData.format === "telehealth"}
                          onChange={() => setFormData({ ...formData, format: "telehealth" })}
                          className="sr-only"
                        />
                        <span>Telehealth (Across CA)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Brief Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What would you most like support with right now?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-accent-light" />
                    <span>Submit Consultation Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
