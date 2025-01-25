import React from "react";
import Link from "next/link";
import { FooterProps } from "@/types";
import { footerData } from "@/data/mock";

export const Footer: React.FC<FooterProps> = ({ contactInfo, columns }) => {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <p className="text-[#9C9C9D]">{contactInfo.phone}</p>
            <a href={`mailto:${contactInfo.email}`} className="text-[#9C9C9D]">
              {contactInfo.email}
            </a>
            {contactInfo.address.map((line, index) => (
              <p key={index} className="text-[#9C9C9D]">
                {line}
              </p>
            ))}
          </div>

          <div className="hidden md:block" />

          {/* Newsletter */}
          <div>
            <h3 className="text-lg text-[#9C9C9D] mb-4">Newsletter</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row space-x-0.5">
                <input
                  type="email"
                  placeholder="Search"
                  className="p-2 border border-gray-300 w-full"
                />
                <button className="bg-white text-[#9C9C9D] px-6 py-2 w-32">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="border-gray-300"
                />
                <label htmlFor="privacy" className="text-[#9C9C9D] text-sm">
                  I agree to our Privacy Policy
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {columns.map((column, colIndex) => (
            <div key={colIndex}>
              {column.categories.map((category, catIndex) => (
                <div key={catIndex}>
                  {category.divider && (
                    <div className="border-t border-gray-600 my-6" />
                  )}

                  <h3
                    className={`font-normal text-lg mb-4 ${
                      category.isMainCategory
                        ? "text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {category.title}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function FooterWithData() {
  return <Footer {...footerData} />;
}
