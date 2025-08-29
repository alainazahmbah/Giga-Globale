import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountryPartners {
  country: string;
  flag: string; // URL to the flag image
  partners: string[];
}

const data: CountryPartners[] = [
  {
    country: "Barbados",
    flag: "https://flagcdn.com/w40/bb.png",
    partners: [
      "Ministry of Education, Technological and Vocational Training",
      "Ministry of Industry, Innovation, Science and Technology",
      "ITU Regional office for Americas",
      "ITU Area Office for Southern America",
      "ITU Office for the Eastern Caribbean Area",
    ],
  },
  {
    country: "Belize",
    flag: "https://flagcdn.com/w40/bz.png",
    partners: [
      "Ministry of Education, Culture, Science and Technology",
      "Ministry of Public Utilities, Evergy, Logistics and E-Governance",
      "ITU Regional office for Americas",
      "ITU Area Office in Bridgetown, Barbados",
      "UNICEF Belize Country Office",
    ],
  },
  {
    country: "Benin",
    flag: "https://flagcdn.com/w40/bj.png",
    partners: [
      "Ministry of Digital Economy and Communications (MDEC)",
      "Ministry of Pre-school and Primary Education (MEMP)",
      "Ministry of Secondary Education and Technical and Vocational Training (MESFPT)",
      "Information and Digital Systems Agency (ASIN)",
      "ITU Regional office for Africa",
      "ITU Area Office for West Africa",
      "UNICEF Benin Country Office",
    ],
  },
  {
    country: "Bosnia",
    flag: "https://flagcdn.com/w40/ba.png",
    partners: [
      "ITU Regional office for Europe",
      "UNICEF Bosnia and Herzegovina Country Office",
    ],
  },
  {
    country: "Botswana",
    flag: "https://flagcdn.com/w40/bw.png",
    partners: [
      "Ministry for State President (MSP) - SmartBots Digital Transformation Office",
      "Ministry of Education and Skills Development (MESD)",
      "Botswana Communications Regulatory Authority (BOCRA)",
      "ITU Regional Office for Africa",
      "ITU Area Office for Southern Africa",
      "UNICEF Botswana Country Office",
    ],
  },
  {
    country: "Brazil",
    flag: "https://flagcdn.com/w40/br.png",
    partners: [
      "Ministry of Communications (MCom)",
      "Ministry of Education (MEC)",
      "National Development Bank (BNDES)",
      "Anatel",
      "Nic.br",
      "Brazilian Education and Research Network (RNP)",
      "InvestKids",
      "InvestKids",
      "The Northern Brazil Arizona State University, Texas Tech University, USAID",
      "ITU Regional office for Americas",
      "UNICEF Brazil Country Office",
    ],
  },
  {
    country: "Dominican Republic",
    flag: "https://flagcdn.com/w40/do.png",
    partners: [
      "Ministry of Education (MINERD)",
      "Dominican Institute of Telecommunications (INDOTEL)",
      "ITU Regional Office for Americas",
      "ITU Area Office for Santiago, Honduras",
      "UNICEF Dominican Republic Country Office",
    ],
  },
  {
    country: "El Salvador",
    flag: "https://flagcdn.com/w40/sv.png",
    partners: [
      "Ministry of Innovation (previous government)",
      "ITU Regional office for Americas",
      "ITU Area Office Tegucigalpa, Honduras",
      "UNICEF El Salvador Country Office",
    ],
  },
  {
    country: "Guinea",
    flag: "https://flagcdn.com/w40/gn.png",
    partners: [
      "Ministry of Pre-University Education and Literacy (MEPUA)",
      "National Agency for State Digitization (ANDE)",
      "Ministry of Posts, Telecommunications and Digital Economy (MPTNE)",
      "ITU Regional Office for Africa",
      "ITU Area Office for West Africa",
      "UNICEF Guinea Country Office",
    ],
  },
  {
    country: "Honduras",
    flag: "https://flagcdn.com/w40/hn.png",
    partners: [
      "Ministry of Secretary of Education (SE)",
      "IDB Honduras",
      "Honduran Communications Company (Hondutel)",
      "Save the Children",
      "ITU Regional office for Americas",
      "ITU Area Office Tegucigalpa, Honduras",
      "UNICEF Honduras Country Office",
    ],
  },
  {
    country: "Kazakhstan",
    flag: "https://flagcdn.com/w40/kz.png",
    partners: [
      "Ministry of Education and Science",
      "Ministry of Digital Development, Innovation and Aerospace Industry",
      "ITU Regional Office for the Commonwealth of Independent States",
      "UNICEF Kazakhstan Country Office",
    ],
  },
  {
    country: "Kosovo",
    flag: "https://flagcdn.com/w40/xk.png",
    partners: [
      "Ministry of Infrastructure and Transport",
      "UNICEF Bosnia and Herzegovina Country Office",
    ],
  },
  {
    country: "Kenya",
    flag: "https://flagcdn.com/w40/ke.png",
    partners: [
      "Ministry of Education",
      "Ministry of Information, Communications and the Digital Economy",
      "Communications Authority of Kenya (CA)",
      "Kenya Education and Research Technology Authority (KERA)",
      "ITU Regional Office for Africa",
      "UNICEF Kenya Country Office",
    ],
  },
  {
    country: "Kyrgyzstan",
    flag: "https://flagcdn.com/w40/kg.png",
    partners: [
      "Ministry of Education and Science",
      "Ministry of Digital Development",
      "Internet Society Kyrgyzstan Chapter",
      "ITU Regional Office for the Commonwealth of Independent States",
      "UNICEF Kyrgyzstan Country Office",
    ],
  },
  {
    country: "Lesotho",
    flag: "https://flagcdn.com/w40/ls.png",
    partners: [
      "Ministry of Education and Training",
      "Ministry of Information, Communications, Science, Technology and Innovation",
      "ITU Regional Office for Africa",
      "ITU Area Office for Southern Africa",
      "UNICEF Lesotho Country Office",
    ],
  },
  {
    country: "Mongolia",
    flag: "https://flagcdn.com/w40/mn.png",
    partners: [
      "Ministry of Education and Science",
      "Communications and Information Center",
      "ITU Regional Office for Asia and the Pacific",
      "UNICEF Mongolia Country Office",
    ],
  },
  {
    country: "Namibia",
    flag: "https://flagcdn.com/w40/na.png",
    partners: [
      "Ministry of Education, Arts and Culture",
      "Ministry of Information and Communication Technology",
      "Communications Regulatory Authority of Namibia (CRAN)",
      "ITU Regional Office for Africa",
      "ITU Area Office for Southern Africa",
      "UNICEF Namibia Country Office",
    ],
  },
  {
    country: "Niger",
    flag: "https://flagcdn.com/w40/ne.png",
    partners: [
      "Ministry of Education (MEN)",
      "National Agency of Information Society (ANS)",
      "National Institute of Statistics (INS Niger)",
      "World Bank Niger Office",
      "ITU Regional Office for Africa",
      "ITU Area Office for West Africa",
      "UNICEF Niger Country Office",
    ],
  },
  {
    country: "OECS (The Organisation of Eastern Caribbean States)",
    flag: "https://flagcdn.com/w40/gd.png",
    partners: ["OECS Commission"],
  },
  {
    country: "Panama",
    flag: "https://flagcdn.com/w40/pa.png",
    partners: [
      "Ministry of Education (MEDUCA)",
      "National Authority for Public Services (ASEP)",
      "National Authority for Government Innovation (AIG)",
      "ITU Regional Office for Americas",
      "ITU Area Office Tegucigalpa, Honduras",
      "UNICEF Panama Country Office",
    ],
  },
  {
    country: "Rwanda",
    flag: "https://flagcdn.com/w40/rw.png",
    partners: [
      "Ministry of Education",
      "Ministry of ICT and Innovation",
      "ITU Regional Office for Africa",
      "ITU Area Office for Central Africa and Madagascar",
      "UNICEF Rwanda Country Office",
    ],
  },
  {
    country: "Sao Tome and Principe",
    flag: "https://flagcdn.com/w40/st.png",
    partners: [
      "Ministry of Education and Culture",
      "Ministry of Public Works, Infrastructure, Transport and Communications",
      "Autoridade Geral de Regulacao (AGER)",
      "ITU Regional Office for Africa",
      "ITU Area Office for Central Africa and Madagascar",
      "UNICEF Sao Tome and Principe Country Office",
    ],
  },
  {
    country: "Sierra Leone",
    flag: "https://flagcdn.com/w40/sl.png",
    partners: [
      "Ministry of Basic and Senior Secondary Education",
      "Ministry of Communication, Technology and Innovation",
      "ITU Regional Office for Africa",
      "ITU Area Office for West Africa",
      "UNICEF Sierra Leone Country Office",
    ],
  },
  {
    country: "South Africa",
    flag: "https://flagcdn.com/w40/za.png",
    partners: [
      "National Department of Basic Education",
      "ITU Regional Office for Africa",
      "ITU Area Office for Southern Africa",
      "UNICEF South Africa Country Office",
    ],
  },
  {
    country: "Trinidad and Tobago",
    flag: "https://flagcdn.com/w40/tt.png",
    partners: [
      "GovTT (National Information and Communication Technology)",
      "TATT (Regulator)",
      "Ministry of Education",
      "ITU Regional office for Americas",
      "ITU Area Office for Southern America",
      "ITU Office for the Eastern Caribbean Area",
    ],
  },
  {
    country: "Uzbekistan",
    flag: "https://flagcdn.com/w40/uz.png",
    partners: [
      "Ministry of Public Education",
      "Ministry of Digital Technologies",
      "ITU Regional Office for the Commonwealth of Independent States",
      "UNICEF Uzbekistan Country Office",
    ],
  },
  {
    country: "Zimbabwe",
    flag: "https://flagcdn.com/w40/zw.png",
    partners: [
      "Ministry of Primary and Secondary Education",
      "Ministry of Information Communication Technology and Courier Services UNICEF Uzbekistan Cou",
      "Posts and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ)",
      "ITU Regional Office for Africa",
      "ITU Area Office for Southern Africa",
      "UNICEF Zimbabwe Country Office",
    ],
  },
];

const CountryPartnersSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 12000); // 12 seconds per country
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="overflow-hidden h-24 relative">
          <AnimatePresence mode="wait">
            {data.map(
              (item, idx) =>
                idx === currentIndex && (
                  <motion.div
                    key={item.country}
                    className="absolute w-full flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Country Name with Flag */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <h1
                        style={{
                          fontWeight: "bold",
                          fontSize: "24px",
                          color: "#277aff",
                        }}
                      >
                        Country Partners :
                      </h1>
                      <img
                        src={item.flag}
                        alt={item.country}
                        className="w-8 h-6 object-cover rounded-sm"
                      />
                      <h3 className="text-xl font-bold text-[#277aff] whitespace-nowrap">
                        {item.country}
                      </h3>
                    </div>

                    {/* Scrolling Partners Container with Gradient Mask */}
                    <div
                      className="flex-1 overflow-hidden"
                      style={{
                        maskImage: `linear-gradient(to right, transparent, black 150px, black calc(100% - 150px), transparent)`,
                        WebkitMaskImage: `linear-gradient(to right, transparent, black 150px, black calc(100% - 150px), transparent)`,
                      }}
                    >
                      <motion.div
                        className="flex gap-8 whitespace-nowrap text-gray-700 font-medium"
                        initial={{ x: "100%" }}
                        animate={{ x: "-100%" }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {item.partners.map((partner, index) => (
                          <span key={index} className="inline-block">
                            {partner}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CountryPartnersSection;