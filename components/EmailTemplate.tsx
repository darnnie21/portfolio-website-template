import React from 'react';

type EmailTemplateProps = {
  firstName: string;
};

export const EmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ firstName }) => {
  return (
    <div>
      <h2>Welcome, {firstName}</h2>
    </div>
  );
};

// export default EmailTemplate;
