import React from 'react';
import { X } from 'lucide-react';

const SliderRight = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    lifecycleStage: '',
    leadStage: '',
    contactOwner: 'Neha Laal'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Contact created:', formData);
    onClose();
  };

  const handleCreateAndAddAnother = () => {
    console.log('Contact created:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      jobTitle: '',
      lifecycleStage: '',
      leadStage: '',
      contactOwner: 'Neha Laal'
    });
  };

  const InputBox = ({ type, placeholder, name, value, onChange }) => (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      style={{
        width: '100%',
        height: '56px',
        backgroundColor: '#E5EDF5',
        padding: '16px',
        borderRadius: '8px',
        border: 'none',
        outline: 'none',
        color: '#4575A1',
        fontSize: '16px'
      }}
    />
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9998,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
      
      {/* Right Sliding Panel */}
      <div 
        style={{
          position: 'fixed',
          top: 100,
          right: 0,
          height: '90vh',
          width: '533px',
          backgroundColor: '#FFFFFF',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.3)',
          zIndex: 9999,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        
        {/* Header */}
        <div style={{
          backgroundColor: '#2B6CB0',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <h2 style={{
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: '600',
            margin: 0
          }}>
            Create Contact
          </h2>
          <button 
            onClick={onClose}
            style={{
              color: '#FFFFFF',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Form Content - Scrollable */}
        <div className='flex-1 px-[44px] overflow-y-scroll' style={{
          // padding: '24px',
          // flex: 1,
          // overflowY: 'auto',
          // paddingBottom: '200px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* First Name */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                First Name <span style={{ color: '#EF4444' }}>*</span>
              </label>
              <InputBox
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>

            {/* Last Name */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Last Name <span style={{ color: '#EF4444' }}>*</span>
              </label>
              <InputBox
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Email <span style={{ color: '#EF4444' }}>*</span>
              </label>
              <InputBox
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Phone number <span style={{ color: '#EF4444' }}>*</span>
              </label>
              <InputBox
                type="tel"
                placeholder="Enter phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            {/* Job Title */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Job Title
              </label>
              <InputBox
                type="text"
                placeholder="Enter job title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
              />
            </div>

            {/* Lifecycle Stage */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Lifecycle Stage
              </label>
              <select
                name="lifecycleStage"
                value={formData.lifecycleStage}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  height: '56px',
                  backgroundColor: '#E5EDF5',
                  padding: '16px',
                  borderRadius: '8px',
                  border: 'none',
                  outline: 'none',
                  color: '#4575A1',
                  fontSize: '16px'
                }}
              >
                <option value="">Please Select</option>
                <option value="lead">Lead</option>
                <option value="prospect">Prospect</option>
                <option value="qualified">Qualified</option>
                <option value="customer">Customer</option>
                <option value="evangelist">Evangelist</option>
              </select>
            </div>

            {/* Lead Stage */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Lead Stage
              </label>
              <select
                name="leadStage"
                value={formData.leadStage}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  height: '56px',
                  backgroundColor: '#E5EDF5',
                  padding: '16px',
                  borderRadius: '8px',
                  border: 'none',
                  outline: 'none',
                  color: '#4575A1',
                  fontSize: '16px'
                }}
              >
                <option value="">Please Select</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="proposal">Proposal</option>
                <option value="negotiation">Negotiation</option>
                <option value="closed-won">Closed Won</option>
                <option value="closed-lost">Closed Lost</option>
              </select>
            </div>

            {/* Contact Owner */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Contact Owner
              </label>
              <div style={{
                width: '100%',
                height: '56px',
                backgroundColor: '#F3F4F6',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{
                  color: '#4575A1',
                  fontSize: '16px'
                }}>
                  {formData.contactOwner}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Action Buttons at Bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid #E5E7EB',
          padding: '24px',
          flexShrink: 0
        }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
            <button
              onClick={handleSubmit}
              style={{
                width: '100%',
                backgroundColor: '#2B6CB0',
                color: '#FFFFFF',
                padding: '12px 16px',
                borderRadius: '6px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Create
            </button>
            
            <button
              onClick={handleCreateAndAddAnother}
              style={{
                width: '100%',
                border: '2px solid #2B6CB0',
                color: '#2B6CB0',
                backgroundColor: '#FFFFFF',
                padding: '12px 16px',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Create & add another
            </button>
            
            <button
              onClick={onClose}
              style={{
                width: '100%',
                border: '2px solid #EF4444',
                color: '#EF4444',
                backgroundColor: '#FFFFFF',
                padding: '12px 16px',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default  SliderRight;



// Demo Component to test the slider
// export default function ContactsDemo() {
//   const [isSliderOpen, setIsSliderOpen] = React.useState(false);

//   return (
//     <div style={{
//       minHeight: '100vh',
//       backgroundColor: '#F3F4F6',
//       padding: '32px'
//     }}>
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto'
//       }}>
//         <div style={{
//           backgroundColor: '#FFFFFF',
//           borderRadius: '8px',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//           padding: '24px'
//         }}>
//           <div style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginBottom: '24px'
//           }}>
//             <h1 style={{
//               fontSize: '24px',
//               fontWeight: 'bold',
//               color: '#111827',
//               margin: 0
//             }}>
//               Contacts
//             </h1>
//             <button
//               onClick={() => setIsSliderOpen(true)}
//               style={{
//                 backgroundColor: '#2B6CB0',
//                 color: '#FFFFFF',
//                 padding: '8px 16px',
//                 borderRadius: '4px',
//                 border: 'none',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: '600'
//               }}
//             >
//               Add Contact
//             </button>
//           </div>
          
//           <div style={{
//             textAlign: 'center',
//             color: '#6B7280',
//             padding: '48px 0'
//           }}>
//             <p>Click "Add Contact" to see the right sliding panel in action!</p>
//             <p style={{ marginTop: '8px', fontSize: '14px' }}>
//               Current slider state: {isSliderOpen ? 'OPEN' : 'CLOSED'}
//             </p>
//           </div>
//         </div>
//       </div>

//       <SliderRight 
//         isOpen={isSliderOpen} 
//         onClose={() => setIsSliderOpen(false)} 
//       />
//     </div>
//   );
// }