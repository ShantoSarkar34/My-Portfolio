"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { services } from "@/src/data/services";
import { getIcon } from "@/src/lib/utils";
import { IconType } from "react-icons";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 px-6 md:px-12 py-16 max-w-6xl mx-auto lg:px-0 "
    >
      <SectionHeading
        eyebrow="~/services $ cat offerings.md"
        title="What I Offer"
        align="left"
      />
      <p className="text-(--muted) max-w-2xl mb-12">
        Full-stack development services from concept to deployment. I help
        businesses build scalable, secure, and user-centric web applications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const Icon = getIcon(service.icon) as IconType | undefined;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-(--accent)/20 bg-(--bg) p-8 hover:border-(--accent)/50 transition-colors flex flex-col"
            >
              <CardHeader className="pb-4 border-none p-0">
                <div className="w-12 h-12 rounded-xl bg-(--accent)/10 text-(--accent) flex items-center justify-center mb-4 group-hover:bg-(--accent) group-hover:text-(--bg) transition-colors">
                  {Icon && <Icon size={24} />}
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-4">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-(--muted)"
                    >
                      <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-(--accent)" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
