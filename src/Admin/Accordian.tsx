import React, { ReactNode } from 'react';

const Accordion: React.FC = () => {
  const AccordionItem: React.FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
    <div className="border border-gray-300 rounded mb-4">
      <button className="w-full text-left py-2 px-4 bg-gray-200 hover:bg-gray-300 focus:outline-none">
        {title}
      </button>
      <div className="px-4 py-2">{children}</div>
    </div>
  );

  return (
    <div>
      <AccordionItem title="Accordion 1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
          leo lobortis eget.
        </p>
      </AccordionItem>
      <AccordionItem title="Accordion 2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
          leo lobortis eget.
        </p>
      </AccordionItem>
      <AccordionItem title="Accordion 3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
          leo lobortis eget.
        </p>
      </AccordionItem>
      <AccordionItem title="Accordion 4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
          leo lobortis eget.
        </p>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
