import React, { useRef, useState } from 'react';
import domtoimage from 'dom-to-image'; // Import dom-to-image

const CertificateGenerator = () => {
  const certificateRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    completionDate: '',
    issuer: '',
    signature: '',
    issueDate: '',
    certificateType: '',
  });
  const [showCertificate, setShowCertificate] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateCertificate = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.completionDate ||
      !formData.issuer ||
      !formData.signature ||
      !formData.issueDate ||
      !formData.certificateType
    ) {
      alert('Please fill out all fields.');
      return;
    }
    setShowCertificate(true);
  };

  const handleDownloadCertificate = () => {
    const certificate = certificateRef.current;

    if (!certificate) {
      alert('Certificate element not found.');
      return;
    }

    // Use dom-to-image to convert the certificate div to an image
    domtoimage
      .toPng(certificate, {
        quality: 0.95, // Image quality (0 to 1)
        bgcolor: null, // Transparent background
        width: certificate.offsetWidth * 2, // Double the width for better resolution
        height: certificate.offsetHeight * 2, // Double the height for better resolution
        style: {
          transform: 'scale(2)', // Scale up for better quality
          transformOrigin: 'top left',
        },
      })
      .then((dataUrl) => {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'certificate.png'; // Set the file name
        document.body.appendChild(link);
        link.click(); // Trigger the download
        document.body.removeChild(link); // Clean up
      })
      .catch((error) => {
        console.error('Error generating certificate:', error);
        alert('Failed to generate certificate. Please try again.');
      });
  };

  const getCertificateDesign = () => {
    switch (formData.certificateType) {
      case 'Course Completion':
        return {
          title: 'Certificate of Course Completion',
          backgroundColor: 'bg-gradient-to-r from-blue-50 to-blue-100',
          borderColor: 'border-blue-600',
          textColor: 'text-blue-800',
          icon: '📚',
          ribbonColor: 'bg-blue-600',
        };
      case 'Participation':
        return {
          title: 'Certificate of Participation',
          backgroundColor: 'bg-gradient-to-r from-green-50 to-green-100',
          borderColor: 'border-green-600',
          textColor: 'text-green-800',
          icon: '🎉',
          ribbonColor: 'bg-green-600',
        };
      case 'Excellence':
        return {
          title: 'Certificate of Excellence',
          backgroundColor: 'bg-gradient-to-r from-yellow-50 to-yellow-100',
          borderColor: 'border-yellow-600',
          textColor: 'text-yellow-800',
          icon: '🏆',
          ribbonColor: 'bg-yellow-600',
        };
      case 'Leadership':
        return {
          title: 'Certificate of Leadership',
          backgroundColor: 'bg-gradient-to-r from-purple-50 to-purple-100',
          borderColor: 'border-purple-600',
          textColor: 'text-purple-800',
          icon: '🌟',
          ribbonColor: 'bg-purple-600',
        };
      case 'Innovation':
        return {
          title: 'Certificate of Innovation',
          backgroundColor: 'bg-gradient-to-r from-pink-50 to-pink-100',
          borderColor: 'border-pink-600',
          textColor: 'text-pink-800',
          icon: '💡',
          ribbonColor: 'bg-pink-600',
        };
      case 'Teamwork':
        return {
          title: 'Certificate of Teamwork',
          backgroundColor: 'bg-gradient-to-r from-indigo-50 to-indigo-100',
          borderColor: 'border-indigo-600',
          textColor: 'text-indigo-800',
          icon: '🤝',
          ribbonColor: 'bg-indigo-600',
        };
      default:
        return {
          title: 'Certificate of Achievement',
          backgroundColor: 'bg-gradient-to-r from-gray-50 to-gray-100',
          borderColor: 'border-gray-600',
          textColor: 'text-gray-800',
          icon: '🎖️',
          ribbonColor: 'bg-gray-600',
        };
    }
  };

  const { title, backgroundColor, borderColor, textColor, icon, ribbonColor } =
    getCertificateDesign();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Form for User Input */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Certificate Details</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Completion Date</label>
            <input
              type="date"
              name="completionDate"
              value={formData.completionDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Issuer</label>
            <input
              type="text"
              name="issuer"
              value={formData.issuer}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Signature</label>
            <input
              type="text"
              name="signature"
              value={formData.signature}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Issue Date</label>
            <input
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Certificate Type</label>
            <select
              name="certificateType"
              value={formData.certificateType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            >
              <option value="">Select Type</option>
              <option value="Course Completion">Course Completion</option>
              <option value="Participation">Participation</option>
              <option value="Excellence">Excellence</option>
              <option value="Leadership">Leadership</option>
              <option value="Innovation">Innovation</option>
              <option value="Teamwork">Teamwork</option>
              <option value="Creativity">Creativity</option>
              <option value="Mentorship">Mentorship</option>
              <option value="Volunteerism">Volunteerism</option>
              <option value="Outstanding Performance">Outstanding Performance</option>
            </select>
          </div>
          <button
            type="button"
            onClick={handleGenerateCertificate}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Generate Certificate
          </button>
        </form>
      </div>

      {/* Certificate Design */}
      {showCertificate && (
        <div
          ref={certificateRef}
          className={`${backgroundColor} p-12 rounded-lg shadow-2xl text-center w-full max-w-3xl border-8 ${borderColor} relative`}
          style={{ transform: 'translateZ(0)' }} // Fix for rendering issues
        >
          {/* Ribbon */}
          <div className={`absolute top-0 left-0 right-0 h-16 ${ribbonColor} transform -translate-y-1/2`}></div>
          <div className={`absolute top-0 left-0 right-0 h-16 ${ribbonColor} transform -translate-y-1/2 rotate-6`}></div>

          {/* Title */}
          <h1 className={`text-5xl font-bold ${textColor} mb-6 mt-8`}>{title}</h1>

          {/* Name */}
          <p className="text-xl text-gray-700 mb-6">This certifies that</p>
          <p className={`text-4xl font-semibold ${textColor} mb-6`}>{formData.name}</p>

          {/* Issuer */}
          <p className="text-xl text-gray-700 mb-6">has successfully demonstrated</p>
          <p className={`text-3xl font-bold ${textColor} mb-6`}>{formData.certificateType}</p>

          {/* Completion Date */}
          <p className="text-xl text-gray-700 mb-6">on this day, {formData.completionDate}</p>

          {/* Issuer */}
          <p className="text-xl text-gray-700 mb-6">Issued by: {formData.issuer}</p>

          {/* Signature and Issue Date */}
          <div className="mt-12 flex justify-between items-center">
            <div className="text-center">
              <div className="h-1 w-24 bg-gray-700 mx-auto mb-2"></div>
              <p className="text-gray-700">{formData.signature}</p>
            </div>
            <div className="text-center">
              <div className="h-1 w-24 bg-gray-700 mx-auto mb-2"></div>
              <p className="text-gray-700">{formData.issueDate}</p>
            </div>
          </div>

          {/* Icon */}
          <div className="absolute top-4 right-4 text-6xl">
            {icon}
          </div>
        </div>
      )}

      {/* Download Button */}
      {showCertificate && (
        <button
          onClick={handleDownloadCertificate}
          className="mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
        >
          Download Certificate
        </button>
      )}
    </div>
  );
};

export default CertificateGenerator;