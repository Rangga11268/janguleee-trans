"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Award,
  Headphones,
  Map,
  Smile,
  Zap,
  CreditCard,
} from "lucide-react";

const services = [
  {
    icon: <Shield size={32} />,
    title: "Safety First",
    description: "International safety standards applied to every fleet.",
  },
  {
    icon: <Award size={32} />,
    title: "Premium Class",
    description: "Luxury facilities including Reclining Seats & Entertainment.",
  },
  {
    icon: <Smile size={32} />,
    title: "Pro Crew",
    description: "Experienced, friendly, and uniformed crew members.",
  },
  {
    icon: <Clock size={32} />,
    title: "On Time",
    description: "We value your time with disciplined schedules.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-slate relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="text-brand-primary font-black tracking-widest uppercase text-sm mb-4 block">
            SERVICE STANDARDS
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-black leading-tight tracking-tighter max-w-3xl">
            MORE THAN JUST <br />A{" "}
            <span className="text-brand-primary">BUS RIDE.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] hover:bg-black hover:text-white transition-all duration-300 group border border-black/5 hover:border-transparent flex flex-col justify-between h-[300px]"
            >
              <div className="w-14 h-14 bg-brand-slate rounded-2xl flex items-center justify-center text-black mb-8 group-hover:bg-[#008D85] group-hover:text-white transition-colors duration-300">
                {/* Clone element to add hover class if it's a valid element */}
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 font-medium">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
