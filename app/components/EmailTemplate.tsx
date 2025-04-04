import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <div style={{ background: '#f9f9f9', padding: '20px', textAlign: 'center', borderBottom: '2px solid #6b46c1' }}>
      <h1 style={{ color: '#6b46c1', margin: '0', fontSize: '24px' }}>New Contact Form Submission</h1>
    </div>
    
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '15px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', color: '#333' }}>Name:</p>
        <p style={{ margin: '5px 0 0', fontSize: '16px' }}>{name}</p>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', color: '#333' }}>Email:</p>
        <p style={{ margin: '5px 0 0', fontSize: '16px' }}>
          <a href={`mailto:${email}`} style={{ color: '#6b46c1', textDecoration: 'none' }}>{email}</a>
        </p>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', color: '#333' }}>Subject:</p>
        <p style={{ margin: '5px 0 0', fontSize: '16px' }}>{subject}</p>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', color: '#333' }}>Message:</p>
        <div style={{ 
          margin: '5px 0 0', 
          padding: '15px', 
          background: '#f5f5f5', 
          borderRadius: '5px',
          whiteSpace: 'pre-wrap',
          fontSize: '16px'
        }}>
          {message}
        </div>
      </div>
    </div>
    
    <div style={{ background: '#f0f0f0', padding: '15px', textAlign: 'center', borderTop: '1px solid #ddd', fontSize: '14px', color: '#666' }}>
      <p>This email was sent from the contact form on your website.</p>
    </div>
  </div>
); 